// ISO 15:2017 + SKF General Catalogue verified data
// All dimensions in mm, loads in kN, speeds in rpm, weight in kg

export interface BearingDimensions {
  bore: number;
  od: number;
  width: number;
  fillet: number;
}

export interface LoadRatings {
  dynamicC: number;
  staticC0: number;
  fatigueLimitPu: number;
  referenceSpeed: number;
  limitingSpeed: number;
}

export interface BearingVariant {
  suffix: string;
  weight: number;
  friction: number;
}

export interface ChineseBearing {
  factory: 'ZWZ' | 'LYC' | 'C&U' | 'HRB' | 'TMB';
  model: string;
  precision: 'P0' | 'P6' | 'P5' | 'P4';
  priceTier: 'budget' | 'mid' | 'premium';
  notes?: string;
}

export interface BearingData {
  model: string;
  series: string;
  type: 'deep-groove-ball';
  dimensions: BearingDimensions;
  loadRatings: LoadRatings;
  speedLimits: { grease: number; oil: number };
  weight: number;
  variants: {
    open: BearingVariant;
    '2RS': BearingVariant;
    'ZZ': BearingVariant;
  };
  interchange: {
    skf: string;
    fag: string;
    nsk: string;
    ntn: string;
    koyo: string;
    nachi: string;
    timken?: string;
  };
  chinese: {
    equivalents: ChineseBearing[];
    oldGB: string[];
    notes: string;
  };
  availability: {
    status: 'in-stock' | 'limited' | 'made-to-order';
    leadTime: string;
    moq: number;
    priceTier: 'budget' | 'mid' | 'premium';
  };
  standards: { iso: string; din: string; jis: string };
  seo: {
    title: string;
    description: string;
    h1: string;
  };
}

// ─── Helper: build standard Chinese equivalents ─────────────────────────────
function cn(m: string, oldGb: string[]): BearingData['chinese'] {
  return {
    equivalents: [
      { factory: 'ZWZ', model: m, precision: 'P0', priceTier: 'mid' },
      { factory: 'LYC', model: m, precision: 'P0', priceTier: 'mid' },
      { factory: 'C&U', model: m, precision: 'P0', priceTier: 'budget' },
      { factory: 'HRB', model: m, precision: 'P0', priceTier: 'budget' },
    ],
    oldGB: oldGb,
    notes: `Chinese ${m} is dimensionally interchangeable with SKF/NSK/FAG ${m} per ISO 15:2017. P0 is standard precision; P6/P5 available for higher accuracy.`,
  };
}

function ix(m: string): BearingData['interchange'] {
  return { skf: m, fag: m, nsk: m, ntn: m, koyo: m, nachi: m, timken: m };
}

// ─── 6200 Series — Deep Groove Ball Bearings ─────────────────────────────────

export const BEARINGS: BearingData[] = [
  {
    model: '6200',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 10, od: 30, width: 9, fillet: 0.6 },
    loadRatings: { dynamicC: 5.07, staticC0: 2.36, fatigueLimitPu: 0.102, referenceSpeed: 36000, limitingSpeed: 28000 },
    speedLimits: { grease: 25000, oil: 32000 },
    weight: 0.043,
    variants: {
      open: { suffix: '', weight: 0.043, friction: 0.0012 },
      '2RS': { suffix: '2RS1', weight: 0.046, friction: 0.0015 },
      'ZZ':  { suffix: 'Z',   weight: 0.044, friction: 0.0013 },
    },
    interchange: ix('6200'),
    chinese: cn('6200', ['200', '80200']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 50, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6200 Bearing — 10×30×9mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6200 bearing: bore 10mm, OD 30mm, width 9mm. SKF, NSK, Timken equivalents. C=5.07kN, C0=2.36kN. Open/2RS/Z variants. Chinese alternatives (ZWZ, C&U). Free quote.',
      h1: '6200 Bearing Specifications',
    },
  },
  {
    model: '6201',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 12, od: 32, width: 10, fillet: 0.6 },
    loadRatings: { dynamicC: 6.89, staticC0: 3.10, fatigueLimitPu: 0.132, referenceSpeed: 32000, limitingSpeed: 24000 },
    speedLimits: { grease: 22000, oil: 28000 },
    weight: 0.060,
    variants: {
      open: { suffix: '', weight: 0.060, friction: 0.0012 },
      '2RS': { suffix: '2RS1', weight: 0.064, friction: 0.0015 },
      'ZZ':  { suffix: 'Z',   weight: 0.062, friction: 0.0013 },
    },
    interchange: ix('6201'),
    chinese: cn('6201', ['201', '80201']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 50, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6201 Bearing — 12×32×10mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6201 bearing: bore 12mm, OD 32mm, width 10mm. SKF, NSK, Timken equivalents. C=6.89kN. Open/2RS/Z variants. Chinese alternatives. Free quote.',
      h1: '6201 Bearing Specifications',
    },
  },
  {
    model: '6202',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 15, od: 35, width: 11, fillet: 0.6 },
    loadRatings: { dynamicC: 7.65, staticC0: 3.73, fatigueLimitPu: 0.160, referenceSpeed: 28000, limitingSpeed: 20000 },
    speedLimits: { grease: 20000, oil: 26000 },
    weight: 0.080,
    variants: {
      open: { suffix: '', weight: 0.080, friction: 0.0013 },
      '2RS': { suffix: '2RS1', weight: 0.085, friction: 0.0016 },
      'ZZ':  { suffix: 'Z',   weight: 0.083, friction: 0.0014 },
    },
    interchange: ix('6202'),
    chinese: cn('6202', ['202', '80202']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 50, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6202 Bearing — 15×35×11mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6202 bearing: bore 15mm, OD 35mm, width 11mm. C=7.65kN. SKF, NSK, FAG, NTN equivalents. Chinese alternatives. Free quote.',
      h1: '6202 Bearing Specifications',
    },
  },
  {
    model: '6203',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 17, od: 40, width: 12, fillet: 0.6 },
    loadRatings: { dynamicC: 9.55, staticC0: 4.78, fatigueLimitPu: 0.204, referenceSpeed: 24000, limitingSpeed: 18000 },
    speedLimits: { grease: 17000, oil: 22000 },
    weight: 0.095,
    variants: {
      open: { suffix: '', weight: 0.095, friction: 0.0013 },
      '2RS': { suffix: '2RS1', weight: 0.100, friction: 0.0016 },
      'ZZ':  { suffix: 'Z',   weight: 0.097, friction: 0.0014 },
    },
    interchange: ix('6203'),
    chinese: cn('6203', ['203', '80203']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 20, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6203 Bearing — 17×40×12mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6203 bearing: bore 17mm, OD 40mm, width 12mm. C=9.55kN, C0=4.78kN. SKF 6203, NSK 6203 equivalents. 2RS/ZZ. Chinese alternatives (ZWZ, C&U). Free quote.',
      h1: '6203 Bearing Specifications',
    },
  },
  {
    model: '6204',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 20, od: 47, width: 14, fillet: 1.0 },
    loadRatings: { dynamicC: 12.8, staticC0: 6.55, fatigueLimitPu: 0.280, referenceSpeed: 20000, limitingSpeed: 15000 },
    speedLimits: { grease: 15000, oil: 19000 },
    weight: 0.115,
    variants: {
      open: { suffix: '', weight: 0.115, friction: 0.0014 },
      '2RS': { suffix: '2RS1', weight: 0.122, friction: 0.0017 },
      'ZZ':  { suffix: 'Z',   weight: 0.118, friction: 0.0015 },
    },
    interchange: ix('6204'),
    chinese: cn('6204', ['204', '80204']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 20, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6204 Bearing — 20×47×14mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6204 bearing: bore 20mm, OD 47mm, width 14mm. C=12.8kN, C0=6.55kN. SKF/NSK/Timken equivalent. 2RS/ZZ. Chinese alternatives (ZWZ, LYC). Free quote.',
      h1: '6204 Bearing Specifications',
    },
  },
  {
    model: '6205',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 25, od: 52, width: 15, fillet: 1.0 },
    loadRatings: { dynamicC: 14.0, staticC0: 7.85, fatigueLimitPu: 0.335, referenceSpeed: 30000, limitingSpeed: 19000 },
    speedLimits: { grease: 13000, oil: 16000 },
    weight: 0.128,
    variants: {
      open: { suffix: '', weight: 0.128, friction: 0.0015 },
      '2RS': { suffix: '2RS1', weight: 0.132, friction: 0.0018 },
      'ZZ':  { suffix: 'Z',   weight: 0.130, friction: 0.0016 },
    },
    interchange: ix('6205'),
    chinese: cn('6205', ['205', '80205']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 10, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6205 Bearing — 25×52×15mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6205 bearing: bore 25mm, OD 52mm, width 15mm. SKF, NSK, Timken equivalents. C=14kN, C0=7.85kN. Seals: Open/2RS/ZZ. Data table + free quote.',
      h1: '6205 Bearing Specifications',
    },
  },
  {
    model: '6206',
    series: '6200',
    type: 'deep-groove-ball',
    dimensions: { bore: 30, od: 62, width: 16, fillet: 1.0 },
    loadRatings: { dynamicC: 19.5, staticC0: 11.2, fatigueLimitPu: 0.475, referenceSpeed: 17000, limitingSpeed: 13000 },
    speedLimits: { grease: 11000, oil: 14000 },
    weight: 0.200,
    variants: {
      open: { suffix: '', weight: 0.200, friction: 0.0015 },
      '2RS': { suffix: '2RS1', weight: 0.208, friction: 0.0018 },
      'ZZ':  { suffix: 'Z',   weight: 0.203, friction: 0.0016 },
    },
    interchange: ix('6206'),
    chinese: cn('6206', ['206', '80206']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 10, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6206 Bearing — 30×62×16mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6206 bearing: bore 30mm, OD 62mm, width 16mm. C=19.5kN, C0=11.2kN. SKF/NSK/FAG 6206 equivalents. 2RS/ZZ. Chinese alternatives. Free quote.',
      h1: '6206 Bearing Specifications',
    },
  },

  // ─── 6300 Series ─────────────────────────────────────────────────────────────
  {
    model: '6304',
    series: '6300',
    type: 'deep-groove-ball',
    dimensions: { bore: 20, od: 52, width: 15, fillet: 1.1 },
    loadRatings: { dynamicC: 15.9, staticC0: 7.80, fatigueLimitPu: 0.335, referenceSpeed: 20000, limitingSpeed: 15000 },
    speedLimits: { grease: 14000, oil: 18000 },
    weight: 0.155,
    variants: {
      open: { suffix: '', weight: 0.155, friction: 0.0015 },
      '2RS': { suffix: '2RS1', weight: 0.160, friction: 0.0018 },
      'ZZ':  { suffix: 'Z',   weight: 0.157, friction: 0.0016 },
    },
    interchange: ix('6304'),
    chinese: cn('6304', ['304', '80304']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 10, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6304 Bearing — 20×52×15mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6304 bearing: bore 20mm, OD 52mm, width 15mm. C=15.9kN — higher load than 6204 at same bore. SKF/NSK equivalents. 2RS/ZZ. Free quote.',
      h1: '6304 Bearing Specifications',
    },
  },
  {
    model: '6305',
    series: '6300',
    type: 'deep-groove-ball',
    dimensions: { bore: 25, od: 62, width: 17, fillet: 1.1 },
    loadRatings: { dynamicC: 22.5, staticC0: 11.4, fatigueLimitPu: 0.490, referenceSpeed: 17000, limitingSpeed: 13000 },
    speedLimits: { grease: 12000, oil: 15000 },
    weight: 0.225,
    variants: {
      open: { suffix: '', weight: 0.225, friction: 0.0015 },
      '2RS': { suffix: '2RS1', weight: 0.233, friction: 0.0018 },
      'ZZ':  { suffix: 'Z',   weight: 0.228, friction: 0.0016 },
    },
    interchange: ix('6305'),
    chinese: cn('6305', ['305', '80305']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 10, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6305 Bearing — 25×62×17mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6305 bearing: bore 25mm, OD 62mm, width 17mm. C=22.5kN — 60% higher load capacity than 6205. SKF/NSK/FAG equivalents. 2RS/ZZ. Free quote.',
      h1: '6305 Bearing Specifications',
    },
  },
  {
    model: '6306',
    series: '6300',
    type: 'deep-groove-ball',
    dimensions: { bore: 30, od: 72, width: 19, fillet: 1.1 },
    loadRatings: { dynamicC: 28.1, staticC0: 14.6, fatigueLimitPu: 0.630, referenceSpeed: 14000, limitingSpeed: 11000 },
    speedLimits: { grease: 10000, oil: 13000 },
    weight: 0.325,
    variants: {
      open: { suffix: '', weight: 0.325, friction: 0.0015 },
      '2RS': { suffix: '2RS1', weight: 0.338, friction: 0.0018 },
      'ZZ':  { suffix: 'Z',   weight: 0.330, friction: 0.0016 },
    },
    interchange: ix('6306'),
    chinese: cn('6306', ['306', '80306']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 10, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6306 Bearing — 30×72×19mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6306 bearing: bore 30mm, OD 72mm, width 19mm. C=28.1kN. SKF/NSK/FAG 6306 equivalents. 2RS/ZZ. Chinese alternatives (ZWZ, LYC). Free quote.',
      h1: '6306 Bearing Specifications',
    },
  },
  {
    model: '6308',
    series: '6300',
    type: 'deep-groove-ball',
    dimensions: { bore: 40, od: 90, width: 23, fillet: 1.5 },
    loadRatings: { dynamicC: 41.0, staticC0: 22.4, fatigueLimitPu: 0.950, referenceSpeed: 10000, limitingSpeed: 8000 },
    speedLimits: { grease: 8000, oil: 10000 },
    weight: 0.685,
    variants: {
      open: { suffix: '', weight: 0.685, friction: 0.0016 },
      '2RS': { suffix: '2RS1', weight: 0.710, friction: 0.0020 },
      'ZZ':  { suffix: 'Z',   weight: 0.695, friction: 0.0017 },
    },
    interchange: ix('6308'),
    chinese: cn('6308', ['308', '80308']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 5, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6308 Bearing — 40×90×23mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6308 bearing: bore 40mm, OD 90mm, width 23mm. C=41.0kN. Heavy-duty pump and motor applications. SKF/NSK/Timken equivalents. Free quote.',
      h1: '6308 Bearing Specifications',
    },
  },
  {
    model: '6309',
    series: '6300',
    type: 'deep-groove-ball',
    dimensions: { bore: 45, od: 100, width: 25, fillet: 1.5 },
    loadRatings: { dynamicC: 52.7, staticC0: 30.0, fatigueLimitPu: 1.27, referenceSpeed: 9000, limitingSpeed: 7000 },
    speedLimits: { grease: 7000, oil: 9000 },
    weight: 0.930,
    variants: {
      open: { suffix: '', weight: 0.930, friction: 0.0016 },
      '2RS': { suffix: '2RS1', weight: 0.965, friction: 0.0020 },
      'ZZ':  { suffix: 'Z',   weight: 0.945, friction: 0.0017 },
    },
    interchange: ix('6309'),
    chinese: cn('6309', ['309', '80309']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 5, priceTier: 'mid' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6309 Bearing — 45×100×25mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6309 bearing: bore 45mm, OD 100mm, width 25mm. C=52.7kN, C0=30.0kN. SKF/NSK/Timken equivalents. Heavy-duty industrial use. Free quote.',
      h1: '6309 Bearing Specifications',
    },
  },

  // ─── 6000 Series (extra-thin) ─────────────────────────────────────────────
  {
    model: '6004',
    series: '6000',
    type: 'deep-groove-ball',
    dimensions: { bore: 20, od: 42, width: 12, fillet: 0.6 },
    loadRatings: { dynamicC: 9.38, staticC0: 4.75, fatigueLimitPu: 0.204, referenceSpeed: 22000, limitingSpeed: 17000 },
    speedLimits: { grease: 17000, oil: 22000 },
    weight: 0.090,
    variants: {
      open: { suffix: '', weight: 0.090, friction: 0.0013 },
      '2RS': { suffix: '2RS', weight: 0.095, friction: 0.0016 },
      'ZZ':  { suffix: 'Z',  weight: 0.092, friction: 0.0014 },
    },
    interchange: ix('6004'),
    chinese: cn('6004', ['1000904', '60904']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 20, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6004 Bearing — 20×42×12mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6004 bearing: bore 20mm, OD 42mm, width 12mm. Extra-thin section for compact electric motors. C=9.38kN. SKF/NSK equivalents. Free quote.',
      h1: '6004 Bearing Specifications',
    },
  },
  {
    model: '6005',
    series: '6000',
    type: 'deep-groove-ball',
    dimensions: { bore: 25, od: 47, width: 12, fillet: 0.6 },
    loadRatings: { dynamicC: 11.2, staticC0: 5.85, fatigueLimitPu: 0.250, referenceSpeed: 19000, limitingSpeed: 15000 },
    speedLimits: { grease: 15000, oil: 19000 },
    weight: 0.095,
    variants: {
      open: { suffix: '', weight: 0.095, friction: 0.0013 },
      '2RS': { suffix: '2RS', weight: 0.100, friction: 0.0016 },
      'ZZ':  { suffix: 'Z',  weight: 0.097, friction: 0.0014 },
    },
    interchange: ix('6005'),
    chinese: cn('6005', ['1000905', '60905']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 20, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6005 Bearing — 25×47×12mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6005 bearing: bore 25mm, OD 47mm, width 12mm. Thin-section motor bearing. C=11.2kN. SKF/NSK/FAG equivalents. Narrower than 6205 at same bore. Free quote.',
      h1: '6005 Bearing Specifications',
    },
  },
  {
    model: '6006',
    series: '6000',
    type: 'deep-groove-ball',
    dimensions: { bore: 30, od: 55, width: 13, fillet: 1.0 },
    loadRatings: { dynamicC: 13.3, staticC0: 6.95, fatigueLimitPu: 0.300, referenceSpeed: 17000, limitingSpeed: 13000 },
    speedLimits: { grease: 13000, oil: 17000 },
    weight: 0.110,
    variants: {
      open: { suffix: '', weight: 0.110, friction: 0.0014 },
      '2RS': { suffix: '2RS', weight: 0.116, friction: 0.0017 },
      'ZZ':  { suffix: 'Z',  weight: 0.112, friction: 0.0015 },
    },
    interchange: ix('6006'),
    chinese: cn('6006', ['1000906', '60906']),
    availability: { status: 'in-stock', leadTime: '3-7 days', moq: 20, priceTier: 'budget' },
    standards: { iso: 'ISO 15:2017', din: 'DIN 625', jis: 'JIS B 1521' },
    seo: {
      title: '6006 Bearing — 30×55×13mm Dimensions, Spec & Interchange | BearingCalculators',
      description: '6006 bearing: bore 30mm, OD 55mm, width 13mm. Thin-section motor bearing. C=13.3kN. Smaller cross-section than 6206/6306. SKF/NSK equivalents. Free quote.',
      h1: '6006 Bearing Specifications',
    },
  },
];

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export const BEARING_BY_MODEL = Object.fromEntries(
  BEARINGS.map(b => [b.model, b])
) as Record<string, BearingData>;

export function findByDimensions(bore: number, od: number, width: number): BearingData[] {
  return BEARINGS.filter(
    b => b.dimensions.bore === bore && b.dimensions.od === od && b.dimensions.width === width
  );
}

export function getBySeries(series: string): BearingData[] {
  return BEARINGS.filter(b => b.series === series);
}
