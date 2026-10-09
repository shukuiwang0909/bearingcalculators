// Brand cross-reference for deep groove ball bearings (6200/6300/6000 series)
// All major brands use identical ISO model numbers for these series.
// Source: SKF General Catalogue 2018, NSK Product Guide, FAG Rolling Bearing Catalogue

export type BrandKey = 'skf' | 'fag' | 'nsk' | 'ntn' | 'koyo' | 'nachi' | 'timken' | 'ina';

export interface CrossRefEntry {
  iso: string;
  brands: Partial<Record<BrandKey, string>>;
  notes?: string;
}

// All 6200/6300/6000 series use the same number across brands
// Suffix conventions differ: SKF uses "2RS1", NSK uses "2RS", NTN uses "2RS"
const ISO_MODELS = [
  '6200','6201','6202','6203','6204','6205','6206',
  '6304','6305','6306','6308','6309',
  '6004','6005','6006',
];

export const CROSS_REF: CrossRefEntry[] = ISO_MODELS.map(m => ({
  iso: m,
  brands: {
    skf:   m,
    fag:   m,
    nsk:   m,
    ntn:   m,
    koyo:  m,
    nachi: m,
    timken: m,
  },
}));

// Suffix cross-reference (for sealed variants)
export const SUFFIX_EQUIV: Record<BrandKey, { twoRS: string; zz: string }> = {
  skf:   { twoRS: '2RS1',  zz: 'Z'    },
  fag:   { twoRS: '2RS',   zz: 'Z'    },
  nsk:   { twoRS: '2RS',   zz: 'ZZ'   },
  ntn:   { twoRS: '2RS',   zz: 'ZZ'   },
  koyo:  { twoRS: '2RS',   zz: 'ZZ'   },
  nachi: { twoRS: '2NSE9', zz: 'ZZE'  },
  timken:{ twoRS: '2RS',   zz: 'ZZ'   },
  ina:   { twoRS: '2RSR',  zz: 'Z'    },
};

// Build lookup map: brand + model → ISO
export const BRAND_TO_ISO: Map<string, string> = new Map(
  CROSS_REF.flatMap(entry =>
    Object.entries(entry.brands).map(([brand, num]) => [`${brand}:${num!.toUpperCase()}`, entry.iso])
  )
);

export function lookupByBrandModel(brand: BrandKey, model: string): CrossRefEntry | undefined {
  const cleaned = model.toUpperCase().replace(/[-\s]/g, '');
  const isoModel = BRAND_TO_ISO.get(`${brand}:${cleaned}`);
  if (!isoModel) return undefined;
  return CROSS_REF.find(e => e.iso === isoModel);
}

export function fuzzySearch(query: string): CrossRefEntry[] {
  const q = query.toUpperCase().replace(/[-\s]/g, '');
  return CROSS_REF.filter(e =>
    e.iso.includes(q) ||
    Object.values(e.brands).some(v => v!.toUpperCase().includes(q))
  );
}
