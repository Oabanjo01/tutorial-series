"use client";

import { altitudeToZoom, calculateViewBounds } from "@/utils/calculate";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useRef, useState } from "react";
import { GlobeMethods } from "react-globe.gl";
import Supercluster from "supercluster";
import * as THREE from "three";
import { extraTestData, PointsData } from "../types/data";
import PointDetailModal from "./PointDetailModal";

// Dynamically import the Globe, disabling SSR
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

interface ParticleData {
  lat: number;
  lng: number;
  altitude: number;
  size: number;
  color: string;
}

type PointProperties = PointsData;

interface ClusterProperties {
  cluster: true;
  cluster_id: number;
  point_count: number;
}

type CombinedProperties = PointProperties | ClusterProperties;

type ClusterPoint = GeoJSON.Feature<GeoJSON.Point, CombinedProperties>;
type GeoJsonPoint = GeoJSON.Feature<GeoJSON.Point, PointsData>;

const globeMaterial = new THREE.MeshPhongMaterial({
  color: "#1a2033", // Deep blue-gray base color
  opacity: 0.95,
  transparent: true,
  bumpScale: 10, // Exaggerates terrain elevation
  shininess: 15, // Subtle shine on oceans
});

export default function InteractiveGlobe() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [selectedPoint, setSelectedPoint] = useState<PointsData | null>(null);

  // Clustering state
  const [currentZoom, setCurrentZoom] = useState(4);
  const [currentBounds, setCurrentBounds] = useState<
    [number, number, number, number]
  >([-180, -90, 180, 90]);
  const [currentPov, setCurrentPov] = useState({
    lat: 4,
    lng: 15,
    altitude: 2.5,
  });

  // Create cluster index with more aggressive settings
  const clusterIndex = useMemo(() => {
    if (extraTestData.length === 0) return null;

    const points: GeoJsonPoint[] = extraTestData.map((p) => ({
      type: "Feature",
      properties: p,
      geometry: { type: "Point", coordinates: [p.lng, p.lat] },
    }));

    const index = new Supercluster({
      radius: 10, // Reduced from 60 - only cluster very close points
      maxZoom: 16, // Reduced from 20 - stop clustering earlier when zooming in
      minZoom: 0,
      minPoints: 2, // Min points to form cluster
    });

    index.load(points);
    console.log("Loading points into cluster index:", index);
    return index;
  }, []);
  // console.log("Creating cluster index with points:", clusterIndex);

  const clusters = useMemo(() => {
    if (!clusterIndex) return [];

    try {
      // Ask Supercluster: "What should I display at this zoom level and bounds?"
      const clustersData = clusterIndex.getClusters(currentBounds, currentZoom);

      // Supercluster might return null in edge cases
      return Array.isArray(clustersData) ? clustersData : [];
    } catch (error) {
      console.error("Clustering error:", error);
      return [];
    }
  }, [clusterIndex, currentZoom, currentBounds]);

  // console.log("Calculating clusters for zoom:", clusterIndex);

  const debouncedZoomChange = debounce(
    (pov: { lat: number; lng: number; altitude: number }) => {
      const zoom = altitudeToZoom(pov.altitude);
      const bounds = calculateViewBounds(pov);

      setCurrentZoom(zoom);
      setCurrentBounds(bounds);
      setCurrentPov(pov);
    },
    200
  );

  const handleZoomChange = useCallback(debouncedZoomChange, []);

  const globeReady = () => {
    if (globeEl.current) {
      // Enable zoom controls
      globeEl.current.controls().enableZoom = true;

      // Set initial camera position
      globeEl.current.pointOfView({
        lat: 9.082, // Latitude: roughly central to Africa (around Nigeria)
        lng: 21.0936, // Longitude: centers between Central and East Africa
        altitude: 1.8, // Distance from globe (1 = very close, 3+ = far)
      });
    }
  };

  const pointLabel = useCallback((d: object): string => {
    const clusterPoint = d as ClusterPoint;

    // Handle clusters differently
    if (isCluster(clusterPoint.properties)) {
      const count = clusterPoint.properties.point_count;
      return `
      <div style="
        background: rgba(0,0,0,0.9);
        padding: 8px 10px;
        border-radius: 6px;
        color: white;
        font-size: 11px;
      ">
        <div style="font-weight: bold; color: #00BFFF;">
          ${count} Transactions
        </div>
        <div style="color: #ccc; font-size: 10px;">
          Click to zoom in
        </div>
      </div>
    `;
    } else {
      const point = (clusterPoint.properties as PointsData).accountInformation;
      const businessName = point.business_name ?? "Unknown";
      const sector = point.industry_sector ?? "Unknown";
      const amount = point.amount;

      return `
      <div style="
        background: rgba(0,0,0,0.9);
        padding: 8px 10px;
        border-radius: 6px;
        color: white;
        font-size: 11px;
        min-width: 180px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
        <div style="font-weight: bold; color: #0288d1; margin-bottom: 4px;">
          ${businessName}
        </div>
        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">
          <strong>Sector:</strong> ${sector}
        </div>
        ${
          amount
            ? `
          <div style="color: #4caf50; font-weight: bold; font-size: 11px;">
            <strong>₦${amount.toLocaleString()}</strong>
          </div>
        `
            : ""
        }
      </div>
    `;
    }
  }, []);

  function isCluster(props: CombinedProperties): props is ClusterProperties {
    return "cluster" in props && props.cluster === true;
  }

  const handlePointClick = (
    point: object,
    event: MouseEvent,
    coords: { lat: number; lng: number; altitude: number }
  ) => {
    const clusterPoint = point as ClusterPoint;

    if (isCluster(clusterPoint.properties)) {
      // Handle cluster click - could zoom in or show modal
      const clusterId = clusterPoint.properties.cluster_id;

      if (clusterId !== undefined && clusterIndex) {
        const expansionZoom = clusterIndex.getClusterExpansionZoom(clusterId);

        if (expansionZoom > currentZoom && expansionZoom <= 16) {
          // Zoom in to expand cluster
          const coords = clusterPoint.geometry.coordinates;
          const newAltitude = Math.max(0.5, (18 - expansionZoom) / 3.5);

          globeEl.current?.pointOfView(
            {
              lat: coords[1],
              lng: coords[0],
              altitude: newAltitude,
            },
            1000
          );
        }
      }
      return;
    }

    // For individual points, get data from properties
    setSelectedPoint(clusterPoint.properties as PointsData);
  };

  const handlePointColor = (point: object) => {
    const clusterPoint = point as ClusterPoint;

    // If cluster, color it blue
    if (isCluster(clusterPoint.properties)) {
      return "#00BFFF";
    }

    // For individual points, access color from properties
    return (clusterPoint.properties as PointsData).color;
  };

  const handlePointRadius = (point: object) => {
    const clusterPoint = point as ClusterPoint;

    if (isCluster(clusterPoint.properties)) {
      // Scale cluster size based on point count
      const count = clusterPoint.properties.point_count;
      return Math.min(2, Math.log(count + 1) * 0.5);
    }

    return 0.3; // Individual point size
  };

  // console.log("Rendering globe with clusters:", clusters);

  // Accessor functions for the Globe component
  const pointLat = (d: object): number => {
    return (d as ClusterPoint).geometry?.coordinates?.[1] ?? 0;
  };

  const pointLng = (d: object): number => {
    return (d as ClusterPoint).geometry?.coordinates?.[0] ?? 0;
  };

  const customParticles = useMemo(() => {
    return [...Array(100).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      altitude: Math.random() * 2,
      size: Math.random() * 0.4,
      color: "#addbfa",
    }));
  }, []);

  return (
    <>
      {selectedPoint && (
        <PointDetailModal
          point={selectedPoint}
          onClose={() => setSelectedPoint(null)}
        />
      )}

      <Globe
        ref={globeEl}
        onGlobeReady={globeReady}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        // Scene configuration
        backgroundColor="#08070e"
        atmosphereColor="#4a9eff"
        atmosphereAltitude={0.15}
        // Renderer settings for crisp rendering
        rendererConfig={{ antialias: true, alpha: true }}
        globeMaterial={globeMaterial}
        customLayerData={customParticles}
        customThreeObject={(data: object) => {
          const { size, color } = data as ParticleData;
          // Create a small glowing sphere for each particle
          return new THREE.Mesh(
            new THREE.SphereGeometry(size),
            new THREE.MeshBasicMaterial({ color })
          );
        }}
        customThreeObjectUpdate={(obj, data) => {
          const { lat, lng, altitude } = data as ParticleData;
          // Convert geographic coordinates to 3D position
          Object.assign(
            obj.position,
            globeEl.current?.getCoords(lat, lng, altitude)
          );
        }}
        // Points data
        pointsData={clusters}
        pointLat={pointLat}
        pointLng={pointLng}
        pointAltitude={0.05}
        // pointColor={(point: object) => (point as PointsData).color}

        pointColor={handlePointColor}
        pointRadius={handlePointRadius}
        pointLabel={pointLabel}
        onPointClick={handlePointClick}
        // Clustering props
        onZoom={handleZoomChange}
      />
    </>
  );
}
