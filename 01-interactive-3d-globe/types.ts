import { PointsData } from "./src/types/data";

interface ThreeObjPoint {
  metadata: {
    version: number;
    type: string;
    generator: string;
  };
  geometries: Array<{
    uuid: string;
    type: string;
    radiusTop: number;
    radiusBottom: number;
    height: number;
    radialSegments: number;
    heightSegments: number;
    openEnded: boolean;
    thetaStart: number;
    thetaLength: number;
  }>;
  materials: Array<{
    uuid: string;
    type: string;
    color: number;
    emissive: number;
    envMapRotation: [number, number, number, string];
    reflectivity: number;
    refractionRatio: number;
    blendColor: number;
  }>;
  object: {
    uuid: string;
    type: string;
    layers: number;
    matrix: number[];
    up: [number, number, number];
    geometry: string;
    material: string;
  };
}

export interface PointData {
  prediction: PointsData["prediction"];
  accountInformation: PointsData["accountInformation"];
  context: string;
  timestamp: string;
  lat: number;
  lng: number;
  color: string;
  intensity: string;
  __threeObjPoint: ThreeObjPoint;
}
