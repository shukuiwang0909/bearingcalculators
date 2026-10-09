// Chinese bearing manufacturer data for 6200/6300/6000 series
// All Chinese brands listed are dimensionally interchangeable with SKF/NSK/FAG per ISO 15:2017

export interface ChineseFactory {
  id: string;
  name: string;
  chineseName: string;
  city: string;
  founded: number;
  certifications: string[];
  exportMarkets: string[];
  website: string;
  minOrder: string;
  paymentTerms: string[];
  leadTimeDays: { stock: number; production: number };
  priceTier: 'budget' | 'mid' | 'premium';
  strengths: string[];
  blurb: string;
}

export const CHINESE_FACTORIES: ChineseFactory[] = [
  {
    id: 'cu',
    name: 'C&U',
    chineseName: '常州南方轴承',
    city: 'Changzhou, Jiangsu',
    founded: 1946,
    certifications: ['ISO/TS 16949', 'ISO 9001', 'CE'],
    exportMarkets: ['EU', 'US', 'Southeast Asia', 'Middle East'],
    website: 'www.curbearing.com',
    minOrder: '50 pcs standard models',
    paymentTerms: ['T/T 30% + 70% before shipment', 'L/C at sight'],
    leadTimeDays: { stock: 5, production: 30 },
    priceTier: 'budget',
    strengths: [
      'Largest Chinese deep groove ball bearing exporter',
      'OEM supplier to Bosch, Whirlpool',
      'Strong small-motor bearing range',
      'Consistently good P0 precision',
    ],
    blurb: 'C&U (常州南方轴承) is China\'s largest bearing exporter. Deep groove ball bearings account for over 60% of output. Suitable for general-purpose and light-industrial applications.',
  },
  {
    id: 'zwz',
    name: 'ZWZ',
    chineseName: '浙江浙宝轴承',
    city: 'Xinchang, Zhejiang',
    founded: 1945,
    certifications: ['ISO/TS 16949', 'ISO 9001', 'IATF 16949'],
    exportMarkets: ['EU', 'US', 'Japan', 'Korea', 'Southeast Asia'],
    website: 'www.zwz.com.cn',
    minOrder: '30 pcs standard models',
    paymentTerms: ['T/T 30% + 70% before shipment', 'L/C at sight', 'D/P'],
    leadTimeDays: { stock: 3, production: 25 },
    priceTier: 'mid',
    strengths: [
      'Military and aerospace supply history',
      'P5/P4 precision available for most models',
      'Strong quality control, low defect rate',
      'Long track record in EU market',
    ],
    blurb: 'ZWZ (Zhejiang Zhaobao Bearing) has supplied precision bearings to military and industrial sectors since 1945. Their civilian-grade P0/P6 bearings consistently test close to SKF tolerances. Slightly higher price than C&U; usually worth it for critical applications.',
  },
  {
    id: 'lyc',
    name: 'LYC',
    chineseName: '洛阳LYC轴承',
    city: 'Luoyang, Henan',
    founded: 1954,
    certifications: ['ISO/TS 16949', 'ISO 9001', 'CE', 'API'],
    exportMarkets: ['EU', 'US', 'Middle East', 'Africa', 'Southeast Asia'],
    website: 'www.lyc.com.cn',
    minOrder: '20 pcs standard models; MOQ varies by model',
    paymentTerms: ['T/T 30% + 70% before shipment', 'L/C at sight'],
    leadTimeDays: { stock: 5, production: 30 },
    priceTier: 'mid',
    strengths: [
      'China\'s largest full-range bearing manufacturer',
      'Strong in larger-bore 6300/6308/6309',
      'API-certified for oil & gas applications',
      'Comprehensive P0→P4 precision range',
    ],
    blurb: 'LYC (Luoyang Bearing Research Institute) is one of the "five major" Chinese bearing makers. Best choice for larger bearings (6308, 6309) and applications requiring API certification. Lead times can be longer for non-stock sizes.',
  },
  {
    id: 'hrb',
    name: 'HRB',
    chineseName: '哈尔滨轴承',
    city: 'Harbin, Heilongjiang',
    founded: 1950,
    certifications: ['ISO/TS 16949', 'ISO 9001'],
    exportMarkets: ['Russia', 'CIS', 'Eastern Europe', 'Southeast Asia'],
    website: 'www.hrbearing.com',
    minOrder: '50 pcs standard models',
    paymentTerms: ['T/T 30% + 70% before shipment', 'L/C at sight'],
    leadTimeDays: { stock: 7, production: 35 },
    priceTier: 'budget',
    strengths: [
      'Strong Russia/CIS market presence',
      'Budget-friendly for high-volume orders',
      'Good for conveyor and agricultural equipment',
    ],
    blurb: 'HRB (Harbin Bearing) is strong in the Russian and CIS markets. Pricing is competitive but quality control can vary more than ZWZ/LYC. Good option for price-sensitive, non-critical applications.',
  },
];

// Per-model data (same model number across all Chinese brands)
export interface ChineseModelData {
  model: string;
  // Approximate USD FOB price ranges for standard P0 open bearing (per piece, MOQ 100)
  priceRangeUSD: { min: number; max: number };
  stockStatus: 'common' | 'standard' | 'special-order';
  notes?: string;
}

export const CHINESE_MODEL_DATA: ChineseModelData[] = [
  { model: '6200', priceRangeUSD: { min: 0.35, max: 0.80 }, stockStatus: 'common' },
  { model: '6201', priceRangeUSD: { min: 0.40, max: 0.90 }, stockStatus: 'common' },
  { model: '6202', priceRangeUSD: { min: 0.45, max: 1.00 }, stockStatus: 'common' },
  { model: '6203', priceRangeUSD: { min: 0.50, max: 1.10 }, stockStatus: 'common' },
  { model: '6204', priceRangeUSD: { min: 0.60, max: 1.30 }, stockStatus: 'common' },
  { model: '6205', priceRangeUSD: { min: 0.70, max: 1.50 }, stockStatus: 'common' },
  { model: '6206', priceRangeUSD: { min: 0.90, max: 2.00 }, stockStatus: 'common' },
  { model: '6304', priceRangeUSD: { min: 0.80, max: 1.80 }, stockStatus: 'common' },
  { model: '6305', priceRangeUSD: { min: 1.00, max: 2.20 }, stockStatus: 'common' },
  { model: '6306', priceRangeUSD: { min: 1.20, max: 2.80 }, stockStatus: 'standard' },
  { model: '6308', priceRangeUSD: { min: 2.50, max: 5.50 }, stockStatus: 'standard' },
  { model: '6309', priceRangeUSD: { min: 3.00, max: 7.00 }, stockStatus: 'standard' },
  { model: '6004', priceRangeUSD: { min: 0.55, max: 1.20 }, stockStatus: 'common' },
  { model: '6005', priceRangeUSD: { min: 0.65, max: 1.40 }, stockStatus: 'common' },
  { model: '6006', priceRangeUSD: { min: 0.75, max: 1.60 }, stockStatus: 'common' },
];

export const CHINESE_MODEL_BY_MODEL = Object.fromEntries(
  CHINESE_MODEL_DATA.map(d => [d.model, d])
) as Record<string, ChineseModelData>;

// Old Chinese national standard (GB) model numbers for reference
export const OLD_GB_MAP: Record<string, string[]> = {
  '6200': ['200', '80200'],   '6201': ['201', '80201'],
  '6202': ['202', '80202'],   '6203': ['203', '80203'],
  '6204': ['204', '80204'],   '6205': ['205', '80205'],
  '6206': ['206', '80206'],   '6304': ['304', '80304'],
  '6305': ['305', '80305'],   '6306': ['306', '80306'],
  '6308': ['308', '80308'],   '6309': ['309', '80309'],
  '6004': ['1000904', '60904'], '6005': ['1000905', '60905'],
  '6006': ['1000906', '60906'],
};
