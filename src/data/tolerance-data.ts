// ISO 286-1:2010 tolerance data for bearing fit calculations
// Shaft and housing tolerances used in bearing mounting
// Values in micrometers (μm). Upper deviation (ES/es) and Lower deviation (EI/ei).

export interface DiamRange {
  min: number;  // exclusive lower bound (0 means ≥ nominal)
  max: number;  // inclusive upper bound
  label: string;
}

// Standard diameter ranges per ISO 286-1 (mm)
export const DIAM_RANGES: DiamRange[] = [
  { min: 0,   max: 3,   label: '≤3'        },
  { min: 3,   max: 6,   label: '>3–6'      },
  { min: 6,   max: 10,  label: '>6–10'     },
  { min: 10,  max: 18,  label: '>10–18'    },
  { min: 18,  max: 30,  label: '>18–30'    },
  { min: 30,  max: 50,  label: '>30–50'    },
  { min: 50,  max: 80,  label: '>50–80'    },
  { min: 80,  max: 120, label: '>80–120'   },
  { min: 120, max: 180, label: '>120–180'  },
  { min: 180, max: 250, label: '>180–250'  },
  { min: 250, max: 315, label: '>250–315'  },
  { min: 315, max: 400, label: '>315–400'  },
];

export function getDiamRangeIndex(d: number): number {
  return DIAM_RANGES.findIndex(r => d > r.min && d <= r.max);
}

// Tolerance values per diameter range [es/EI upper, ei/EI lower] in μm
// Shaft tolerances (lowercase: es = upper, ei = lower)
// Housing tolerances (uppercase: ES = upper, EI = lower)

type TolerancePair = [number, number]; // [upper, lower] in μm

// ─── SHAFT TOLERANCES ────────────────────────────────────────────────────────

// h5 (clearance, precision shafts) — upper=0, lower=−IT5
export const h5: TolerancePair[] = [
  [0, -4], [0, -5], [0, -6], [0, -8], [0, -9], [0, -11],
  [0, -13], [0, -15], [0, -18], [0, -20], [0, -23], [0, -25],
];

// h6 (general clearance shafts)
export const h6: TolerancePair[] = [
  [0, -6], [0, -8], [0, -9], [0, -11], [0, -13], [0, -16],
  [0, -19], [0, -22], [0, -25], [0, -29], [0, -32], [0, -36],
];

// js5 (symmetric transition, ±IT5/2)
export const js5: TolerancePair[] = [
  [2, -2], [2.5, -2.5], [3, -3], [4, -4], [4.5, -4.5], [5.5, -5.5],
  [6.5, -6.5], [7.5, -7.5], [9, -9], [10, -10], [11.5, -11.5], [12.5, -12.5],
];

// js6 (symmetric transition, ±IT6/2)
export const js6: TolerancePair[] = [
  [3, -3], [4, -4], [4.5, -4.5], [5.5, -5.5], [6.5, -6.5], [8, -8],
  [9.5, -9.5], [11, -11], [12.5, -12.5], [14.5, -14.5], [16, -16], [18, -18],
];

// k5 (light interference / transition)
export const k5: TolerancePair[] = [
  [4, 0], [6, 1], [7, 1], [9, 1], [11, 2], [13, 2],
  [15, 2], [18, 3], [21, 3], [24, 4], [27, 4], [29, 4],
];

// k6 (standard interference for rotating inner ring)
export const k6: TolerancePair[] = [
  [6, 0], [9, 1], [10, 1], [12, 1], [15, 2], [18, 2],
  [21, 2], [25, 3], [28, 3], [33, 4], [36, 4], [40, 4],
];

// m5 (medium interference)
export const m5: TolerancePair[] = [
  [6, 2], [9, 4], [12, 6], [15, 7], [17, 8], [20, 9],
  [24, 11], [28, 13], [33, 15], [37, 17], [43, 20], [46, 21],
];

// m6 (medium interference)
export const m6: TolerancePair[] = [
  [8, 2], [12, 4], [15, 6], [18, 7], [21, 8], [25, 9],
  [30, 11], [35, 13], [40, 15], [46, 17], [52, 20], [57, 21],
];

// n6 (heavy interference, press fit)
export const n6: TolerancePair[] = [
  [10, 4], [16, 8], [19, 10], [23, 12], [28, 15], [33, 17],
  [39, 20], [45, 23], [52, 27], [60, 31], [66, 34], [73, 37],
];

// p6 (heavy press fit)
export const p6: TolerancePair[] = [
  [12, 6], [20, 12], [24, 15], [29, 18], [35, 22], [42, 26],
  [51, 32], [59, 37], [68, 43], [79, 50], [88, 56], [98, 62],
];

// ─── HOUSING (BORE) TOLERANCES ────────────────────────────────────────────────

// H6 (precision clearance housing — rotating outer ring)
export const H6: TolerancePair[] = [
  [6, 0], [8, 0], [9, 0], [11, 0], [13, 0], [16, 0],
  [19, 0], [22, 0], [25, 0], [29, 0], [32, 0], [36, 0],
];

// H7 (general clearance housing)
export const H7: TolerancePair[] = [
  [10, 0], [12, 0], [15, 0], [18, 0], [21, 0], [25, 0],
  [30, 0], [35, 0], [40, 0], [46, 0], [52, 0], [57, 0],
];

// JS6 (symmetric transition housing)
export const JS6: TolerancePair[] = js6; // numerically same as js6

// JS7
export const JS7: TolerancePair[] = [
  [5, -5], [6, -6], [7.5, -7.5], [9, -9], [10.5, -10.5], [12.5, -12.5],
  [15, -15], [17.5, -17.5], [20, -20], [23, -23], [26, -26], [28.5, -28.5],
];

// K6 (transition housing, slight interference for stationary outer ring)
export const K6: TolerancePair[] = [
  [2, -4], [2, -6], [2, -7], [2, -9], [2, -11], [3, -13],
  [4, -15], [4, -18], [4, -21], [5, -24], [5, -27], [7, -29],
];

// K7
export const K7: TolerancePair[] = [
  [0, -10], [3, -9], [5, -10], [6, -12], [6, -15], [7, -18],
  [9, -21], [10, -25], [12, -28], [13, -33], [16, -36], [17, -40],
];

// M6 (medium interference housing)
export const M6: TolerancePair[] = [
  [-2, -8], [-1, -9], [0, -9], [0, -11], [0, -13], [0, -16],
  [-1, -20], [-1, -23], [-1, -26], [-2, -31], [-2, -34], [-2, -38],
];

// M7 (medium interference housing)
export const M7: TolerancePair[] = [
  [-2, -12], [0, -12], [1, -14], [2, -16], [2, -19], [2, -23],
  [2, -28], [3, -32], [4, -36], [4, -42], [4, -48], [4, -53],
];

// N7 (heavy interference housing)
export const N7: TolerancePair[] = [
  [-4, -14], [-5, -17], [-7, -22], [-9, -27], [-11, -32], [-12, -37],
  [-14, -44], [-16, -51], [-20, -60], [-22, -68], [-25, -77], [-26, -86],
];

// P7 (press fit housing)
export const P7: TolerancePair[] = [
  [-6, -16], [-9, -21], [-12, -27], [-15, -33], [-17, -38], [-21, -46],
  [-26, -56], [-30, -65], [-36, -76], [-41, -87], [-47, -99], [-51, -108],
];

// ─── Lookup table ─────────────────────────────────────────────────────────────

export type ShaftGrade  = 'h5'|'h6'|'js5'|'js6'|'k5'|'k6'|'m5'|'m6'|'n6'|'p6';
export type HousingGrade = 'H6'|'H7'|'JS6'|'JS7'|'K6'|'K7'|'M6'|'M7'|'N7'|'P7';

export const SHAFT_TOLERANCES: Record<ShaftGrade, TolerancePair[]> = {
  h5, h6, js5, js6, k5, k6, m5, m6, n6, p6,
};

export const HOUSING_TOLERANCES: Record<HousingGrade, TolerancePair[]> = {
  H6, H7, JS6, JS7, K6, K7, M6, M7, N7, P7,
};

export function getShaftTolerance(grade: ShaftGrade, diameter: number): TolerancePair | null {
  const idx = getDiamRangeIndex(diameter);
  if (idx === -1) return null;
  return SHAFT_TOLERANCES[grade][idx];
}

export function getHousingTolerance(grade: HousingGrade, diameter: number): TolerancePair | null {
  const idx = getDiamRangeIndex(diameter);
  if (idx === -1) return null;
  return HOUSING_TOLERANCES[grade][idx];
}

export type FitType = 'clearance' | 'transition' | 'interference';

export interface FitResult {
  maxClearance: number;
  minClearance: number;
  fitType: FitType;
  description: string;
  recommendation: string;
}

export function analyzeFit(
  holeDiameter: number,
  holeGrade: HousingGrade,
  shaftDiameter: number,
  shaftGrade: ShaftGrade,
): FitResult | null {
  const hTol = getHousingTolerance(holeGrade, holeDiameter);
  const sTol = getShaftTolerance(shaftGrade, shaftDiameter);
  if (!hTol || !sTol) return null;

  // Clearance = hole - shaft; positive = clearance, negative = interference
  const maxClearance = hTol[0] - sTol[1]; // ES - ei
  const minClearance = hTol[1] - sTol[0]; // EI - es

  let fitType: FitType;
  let description: string;
  let recommendation: string;

  if (minClearance >= 0) {
    fitType = 'clearance';
    description = `Clearance fit: ${minClearance}–${maxClearance} μm clearance`;
    recommendation = 'Suitable for bearings with rotating outer ring, easy assembly/disassembly.';
  } else if (maxClearance <= 0) {
    fitType = 'interference';
    const minInt = -maxClearance;
    const maxInt = -minClearance;
    description = `Interference fit: ${minInt}–${maxInt} μm interference`;
    recommendation = 'Requires press fitting or thermal mounting. Not recommended for bearings that need frequent replacement.';
  } else {
    fitType = 'transition';
    description = `Transition fit: ${minClearance} to +${maxClearance} μm (clearance or interference)`;
    recommendation = 'Standard for stationary inner ring mounting. Light press or mallet assembly.';
  }

  return { maxClearance, minClearance, fitType, description, recommendation };
}

// ISO 286 recommendations for deep groove ball bearing mounting
export const BEARING_FIT_RECOMMENDATIONS = {
  innerRing: {
    rotatingLoad:   { light: 'k5', normal: 'k6', heavy: 'm6', note: 'Interference fit prevents fretting corrosion under rotating load' },
    stationaryLoad: { light: 'h6', normal: 'js6', heavy: 'k6', note: 'Clearance/transition fit allows axial adjustment' },
  },
  outerRing: {
    rotatingLoad:   { light: 'K7', normal: 'M7', heavy: 'N7', note: 'Interference required to prevent ring rotation in housing' },
    stationaryLoad: { light: 'H7', normal: 'JS7', heavy: 'K7', note: 'Slight clearance allows thermal expansion' },
  },
} as const;
