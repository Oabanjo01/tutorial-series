export enum PointColors {
  good = "#4CAF50", // good to go
  warning = "#FFC107", // warning
  info = "#2196F3", // info
  danger = "#F44336", // danger
}

export const extraTestData = [
  // Cluster 1: Lagos, Nigeria area (6.5°N, 3.4°E) - Dense financial hub
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "LAG-001",
      business_name: "Lagos Finance Corp",
      industry_sector: "Finance",
      country: "NG",
      risk_score: 12.5,
      amount: 8500000,
      currency: "NGN",
      tran_dir: "credit",
    },
    context: "Lagos financial district transaction",
    timestamp: "2025-09-13T06:43:40.000Z",
    lat: 6.5244,
    lng: 3.3792,
    color: PointColors.good,
    intensity: "0.15",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "LAG-002",
      business_name: "Victoria Island Trading",
      industry_sector: "Commerce",
      country: "NG",
      risk_score: 18.3,
      amount: 12000000,
      currency: "NGN",
      tran_dir: "debit",
    },
    context: "Victoria Island commercial transaction",
    timestamp: "2025-09-13T07:15:22.000Z",
    lat: 6.4281,
    lng: 3.4219,
    color: PointColors.warning,
    intensity: "0.25",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "LAG-003",
      business_name: "Ikoyi Investment Ltd",
      industry_sector: "Investment",
      country: "NG",
      risk_score: 8.7,
      amount: 25000000,
      currency: "NGN",
      tran_dir: "credit",
    },
    context: "Ikoyi district investment transaction",
    timestamp: "2025-09-13T08:30:15.000Z",
    lat: 6.4541,
    lng: 3.4316,
    color: PointColors.good,
    intensity: "0.10",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "LAG-004",
      business_name: "Lekki Tech Hub",
      industry_sector: "Technology",
      country: "NG",
      risk_score: 15.2,
      amount: 9800000,
      currency: "NGN",
      tran_dir: "debit",
    },
    context: "Lekki technology sector payment",
    timestamp: "2025-09-13T09:45:33.000Z",
    lat: 6.4474,
    lng: 3.47,
    color: PointColors.info,
    intensity: "0.20",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "LAG-005",
      business_name: "Ikeja Business Center",
      industry_sector: "Real Estate",
      country: "NG",
      risk_score: 22.1,
      amount: 18500000,
      currency: "NGN",
      tran_dir: "credit",
    },
    context: "Ikeja real estate transaction",
    timestamp: "2025-09-13T10:20:44.000Z",
    lat: 6.6018,
    lng: 3.3515,
    color: PointColors.warning,
    intensity: "0.30",
  },

  // Cluster 2: Johannesburg, South Africa area (-26.2°S, 28.0°E)
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "JHB-001",
      business_name: "Sandton Financial Services",
      industry_sector: "Finance",
      country: "ZA",
      risk_score: 10.5,
      amount: 15000000,
      currency: "ZAR",
      tran_dir: "credit",
    },
    context: "Sandton CBD financial transaction",
    timestamp: "2025-09-13T11:30:00.000Z",
    lat: -26.1076,
    lng: 28.0567,
    color: PointColors.good,
    intensity: "0.12",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "JHB-002",
      business_name: "Rosebank Mining Corp",
      industry_sector: "Mining",
      country: "ZA",
      risk_score: 28.9,
      amount: 42000000,
      currency: "ZAR",
      tran_dir: "debit",
    },
    context: "Rosebank mining sector payment",
    timestamp: "2025-09-13T12:15:30.000Z",
    lat: -26.1463,
    lng: 28.0421,
    color: PointColors.danger,
    intensity: "0.45",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "JHB-003",
      business_name: "Midrand Tech Solutions",
      industry_sector: "Technology",
      country: "ZA",
      risk_score: 14.3,
      amount: 8900000,
      currency: "ZAR",
      tran_dir: "credit",
    },
    context: "Midrand technology transaction",
    timestamp: "2025-09-13T13:45:18.000Z",
    lat: -25.9953,
    lng: 28.1294,
    color: PointColors.info,
    intensity: "0.18",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "JHB-004",
      business_name: "Fourways Retail Group",
      industry_sector: "Retail",
      country: "ZA",
      risk_score: 7.8,
      amount: 5600000,
      currency: "ZAR",
      tran_dir: "debit",
    },
    context: "Fourways retail transaction",
    timestamp: "2025-09-13T14:20:55.000Z",
    lat: -26.0114,
    lng: 28.0051,
    color: PointColors.good,
    intensity: "0.08",
  },

  // Cluster 3: Nairobi, Kenya area (-1.3°S, 36.8°E)
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "NBO-001",
      business_name: "Westlands Commerce Ltd",
      industry_sector: "Commerce",
      country: "KE",
      risk_score: 16.7,
      amount: 7800000,
      currency: "KES",
      tran_dir: "credit",
    },
    context: "Westlands commercial district",
    timestamp: "2025-09-13T15:10:30.000Z",
    lat: -1.2674,
    lng: 36.8075,
    color: PointColors.warning,
    intensity: "0.22",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "NBO-002",
      business_name: "Kilimani Investment Bank",
      industry_sector: "Finance",
      country: "KE",
      risk_score: 11.2,
      amount: 13500000,
      currency: "KES",
      tran_dir: "debit",
    },
    context: "Kilimani banking transaction",
    timestamp: "2025-09-13T16:25:45.000Z",
    lat: -1.2921,
    lng: 36.785,
    color: PointColors.good,
    intensity: "0.14",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "NBO-003",
      business_name: "Karen Tech Innovations",
      industry_sector: "Technology",
      country: "KE",
      risk_score: 19.4,
      amount: 11200000,
      currency: "KES",
      tran_dir: "credit",
    },
    context: "Karen tech sector investment",
    timestamp: "2025-09-13T17:40:12.000Z",
    lat: -1.3197,
    lng: 36.7081,
    color: PointColors.info,
    intensity: "0.28",
  },

  // Cluster 4: Abuja, Nigeria area (9.1°N, 7.4°E)
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "ABJ-001",
      business_name: "Central District Finance",
      industry_sector: "Finance",
      country: "NG",
      risk_score: 9.3,
      amount: 22000000,
      currency: "NGN",
      tran_dir: "credit",
    },
    context: "Abuja central district transaction",
    timestamp: "2025-09-13T18:15:20.000Z",
    lat: 9.0765,
    lng: 7.3986,
    color: PointColors.good,
    intensity: "0.11",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "ABJ-002",
      business_name: "Wuse Market Traders",
      industry_sector: "Commerce",
      country: "NG",
      risk_score: 24.6,
      amount: 6700000,
      currency: "NGN",
      tran_dir: "debit",
    },
    context: "Wuse market commercial activity",
    timestamp: "2025-09-13T19:30:55.000Z",
    lat: 9.0579,
    lng: 7.4951,
    color: PointColors.warning,
    intensity: "0.35",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Synthetic - cluster simulation"],
      },
    },
    accountInformation: {
      tran_id: "ABJ-003",
      business_name: "Garki Business Hub",
      industry_sector: "Real Estate",
      country: "NG",
      risk_score: 17.8,
      amount: 19500000,
      currency: "NGN",
      tran_dir: "credit",
    },
    context: "Garki real estate development",
    timestamp: "2025-09-13T20:45:33.000Z",
    lat: 9.0354,
    lng: 7.4869,
    color: PointColors.info,
    intensity: "0.24",
  },

  // Scattered individual points across Africa
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Individual transaction"],
      },
    },
    accountInformation: {
      tran_id: "CPT-001",
      business_name: "Cape Town Ventures",
      industry_sector: "Tourism",
      country: "ZA",
      risk_score: 13.2,
      amount: 8400000,
      currency: "ZAR",
      tran_dir: "credit",
    },
    context: "Cape Town tourism sector",
    timestamp: "2025-09-13T21:20:00.000Z",
    lat: -33.9249,
    lng: 18.4241,
    color: PointColors.good,
    intensity: "0.16",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Individual transaction"],
      },
    },
    accountInformation: {
      tran_id: "ACC-001",
      business_name: "Accra Gold Trading",
      industry_sector: "Mining",
      country: "GH",
      risk_score: 31.5,
      amount: 28000000,
      currency: "GHS",
      tran_dir: "debit",
    },
    context: "Accra precious metals trade",
    timestamp: "2025-09-13T22:15:30.000Z",
    lat: 5.6037,
    lng: -0.187,
    color: PointColors.danger,
    intensity: "0.50",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Individual transaction"],
      },
    },
    accountInformation: {
      tran_id: "DAR-001",
      business_name: "Dar es Salaam Logistics",
      industry_sector: "Transport",
      country: "TZ",
      risk_score: 12.9,
      amount: 9300000,
      currency: "TZS",
      tran_dir: "credit",
    },
    context: "Dar es Salaam port logistics",
    timestamp: "2025-09-13T23:30:45.000Z",
    lat: -6.7924,
    lng: 39.2083,
    color: PointColors.info,
    intensity: "0.19",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Individual transaction"],
      },
    },
    accountInformation: {
      tran_id: "ADD-001",
      business_name: "Addis Ababa Coffee Export",
      industry_sector: "Agriculture",
      country: "ET",
      risk_score: 8.4,
      amount: 5200000,
      currency: "ETB",
      tran_dir: "debit",
    },
    context: "Addis Ababa coffee export",
    timestamp: "2025-09-14T00:45:20.000Z",
    lat: 9.032,
    lng: 38.7469,
    color: PointColors.good,
    intensity: "0.09",
  },
  {
    prediction: {
      predictions: {
        prediction: [1],
        explanation: ["Individual transaction"],
      },
    },
    accountInformation: {
      tran_id: "CAS-001",
      business_name: "Casablanca Textiles",
      industry_sector: "Manufacturing",
      country: "MA",
      risk_score: 20.3,
      amount: 14800000,
      currency: "MAD",
      tran_dir: "credit",
    },
    context: "Casablanca textile manufacturing",
    timestamp: "2025-09-14T01:30:55.000Z",
    lat: 33.5731,
    lng: -7.5898,
    color: PointColors.warning,
    intensity: "0.29",
  },
];

export type PointsData = (typeof extraTestData)[number];
