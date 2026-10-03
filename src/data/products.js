import factoryImg       from '../assets/images/factory.jpg';
import miniMillFrontImg  from '../assets/images/mini_mill_front.jpg';
import miniMillsRowImg   from '../assets/images/mini_mills_row.jpg';
import hullerImg         from '../assets/images/huller.jpg';
import blueSystemImg     from '../assets/images/blue_system.jpg';
import separatorTealImg  from '../assets/images/separator_teal.jpg';
import vibroScreenImg    from '../assets/images/vibro_screen.jpg';
import multiGradeImg     from '../assets/images/multi_grade.jpg';
import inspectionImg     from '../assets/images/inspection.jpg';
import blueConveyorImg   from '../assets/images/blue_conveyor.jpg';

export const IMAGES = {
  factory:       factoryImg,
  miniMillFront: miniMillFrontImg,
  miniMillsRow:  miniMillsRowImg,
  huller:        hullerImg,
  blueSystem:    blueSystemImg,
  separatorTeal: separatorTealImg,
  vibroScreen:   vibroScreenImg,
  multiGrade:    multiGradeImg,
  inspection:    inspectionImg,
  blueConveyor:  blueConveyorImg,
};

export const PRODUCTS = [
  {
    id: 1,
    slug: 'mini-rice-mill',
    tag: 'Best Seller',
    tagColor: '#1D6B38',
    image: miniMillFrontImg,
    galleryImages: [miniMillFrontImg, miniMillsRowImg],
    title: 'Mini Rice Mill (WALSON)',
    shortDesc: 'Compact and powerful mini rice mill for small to medium-scale rice processing. Ideal for farmers and small businesses.',
    fullDesc: 'The WALSON Mini Rice Mill is engineered for efficiency and durability. Its compact design makes it suitable for installation in small spaces while delivering consistent milling performance. The machine processes paddy into white rice in a single pass, with adjustable bran extraction and minimal broken grain output.',
    specs: [
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Motor Power', value: '3–5 HP' },
      { label: 'Voltage', value: '220V / 440V' },
      { label: 'Dimensions', value: 'Compact footprint' },
      { label: 'Weight', value: '~80 kg' },
    ],
    features: [
      'Easy single-operator operation',
      'Low maintenance cast-iron rollers',
      'Adjustable bran output',
      'Emergency stop button',
      'Spare parts readily available',
    ],
    category: 'Rice Processing',
  },
  {
    id: 2,
    slug: 'paddy-dehusker',
    tag: 'Commercial',
    tagColor: '#0E6FAB',
    image: hullerImg,
    galleryImages: [hullerImg],
    title: 'Paddy Dehusking Machine',
    shortDesc: 'Heavy-duty dehusker that efficiently removes husk from paddy with minimal broken grains and high throughput.',
    fullDesc: 'Our Paddy Dehusking Machine uses rubber roller technology to efficiently remove the outer husk from paddy without damaging the bran layer. Suitable for both commercial rice mills and medium-scale processing units, it delivers consistent dehusking ratios with adjustable pressure settings.',
    specs: [
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Motor Power', value: '7.5–10 HP' },
      { label: 'Drive', value: 'V-belt / pulley system' },
      { label: 'Frame', value: 'Heavy-duty MS fabrication' },
      { label: 'Finish', value: 'Industrial paint coating' },
    ],
    features: [
      'Rubber roller dehusking mechanism',
      'Adjustable roller pressure',
      'Minimal grain breakage',
      'Easy roller replacement',
      'Belt-driven with motor mount',
    ],
    category: 'Rice Processing',
  },
  {
    id: 3,
    slug: 'grain-separator',
    tag: 'Grain Cleaning',
    tagColor: '#6B3FA0',
    image: separatorTealImg,
    galleryImages: [separatorTealImg, multiGradeImg],
    title: 'Multi-Grade Grain Separator',
    shortDesc: 'Oscillating screen separator that grades and separates grain by size across multiple output grades simultaneously.',
    fullDesc: 'The Multi-Grade Grain Separator uses an oscillating sieve system to sort grain into multiple size fractions in a single pass. It handles paddy, wheat, maize, soybean and other grains. The multi-deck screen arrangement allows simultaneous separation of oversized, undersized and good grain for maximum output quality.',
    specs: [
      
      { label: 'Output Grades', value: '3–4 grade separation' },
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Screen Decks', value: '2–3 layers' },
      { label: 'Drive', value: 'Eccentric vibration motor' },
      { label: 'Material', value: 'MS frame with mesh screens' },
    ],
    features: [
      'Multi-deck oscillating screens',
      'Handles all grain types',
      'Low power consumption',
      'Replaceable mesh screens',
      'Adjustable inclination angle',
    ],
    category: 'Grain Separation',
  },
  {
    id: 4,
    slug: 'complete-processing-plant',
    tag: 'Complete Plant',
    tagColor: '#C05A00',
    image: blueSystemImg,
    galleryImages: [blueSystemImg, blueConveyorImg, factoryImg],
    title: 'Complete Rice Processing Plant',
    shortDesc: 'Fully integrated grain processing line with conveyor, huller, separator and bucket elevator — turnkey installation.',
    fullDesc: 'The Complete Rice Processing Plant is a fully integrated, turnkey solution that handles the entire rice milling workflow from raw paddy input to polished white rice output. It includes a pre-cleaner, paddy separator, dehusker, whitener, grader and bucket elevator, all interconnected with conveyors. Designed for scalability and easy maintenance.',
    specs: [
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Plant Capacity', value: '1–5 tonnes/hr (customisable)' },
      { label: 'Stages', value: 'Pre-clean → Dehusk → Polish → Grade' },
      { label: 'Elevator Height', value: 'Up to 6 metres' },
      { label: 'Power Required', value: '20–50 HP total (depends on scale)' },
      { label: 'Installation', value: 'On-site by our team' },
    ],
    features: [
      'Modular design for easy expansion',
      'Bucket elevator for grain transport',
      'Integrated conveyor system',
      'Custom capacity configurations',
      'Full installation and commissioning',
      'Operator training included',
    ],
    category: 'Complete Plants',
  },
  {
    id: 5,
    slug: 'vibrating-screen-cleaner',
    tag: 'Pre-Cleaning',
    tagColor: '#5A7A1A',
    image: vibroScreenImg,
    galleryImages: [vibroScreenImg, inspectionImg],
    title: 'Vibrating Screen Cleaner',
    shortDesc: 'Pre-cleaning unit that removes stones, stalks, and foreign matter before milling for superior output quality.',
    fullDesc: 'The Vibrating Screen Cleaner is an essential pre-processing unit that removes stones, stalks, large impurities and dust from raw grain before it enters the mill. It uses high-frequency vibration combined with an aspiration system to deliver clean grain, protecting downstream machinery from damage and improving final product quality.',
    specs: [
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Screen Size', value: 'Large mesh tray format' },
      { label: 'Vibration', value: 'Eccentric shaft mechanism' },
      { label: 'Frame', value: 'Heavy-gauge MS fabrication' },
      { label: 'Usage', value: 'Paddy, wheat, maize, pulses' },
    ],
    features: [
      'Removes stones, stalks, and chaff',
      'High-frequency vibrating sieve',
      'Large grain handling capacity',
      'Easy mesh screen access',
      'Connects to any processing line',
    ],
    category: 'Grain Cleaning',
  },
  {
    id: 6,
    slug: 'paddy-aspirator',
    tag: 'Separation',
    tagColor: '#7A3030',
    image: multiGradeImg,
    galleryImages: [multiGradeImg],
    title: 'Paddy Grain Aspirator',
    shortDesc: 'Compact aspiration unit using air flow to separate light chaff, dust and hollow grains from good grain.',
    fullDesc: 'The Paddy Grain Aspirator uses controlled air blast technology to efficiently separate light-weight impurities such as hollow grains, chaff, dust and small debris from good grain by weight differential. It is compact, energy-efficient and can be installed inline with any existing processing line.',
    specs: [
      { label: 'Technology', value: 'Air blast aspiration' },
      { label: 'Airflow', value: 'Adjustable blade velocity' },
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Motor', value: '1–2 HP blower motor' },
      { label: 'Footprint', value: 'Compact inline installation' },
    ],
    features: [
      'Air blast separation technology',
      'Adjustable airflow intensity',
      'Removes hollow grains and chaff',
      'Compact inline design',
      'Works with all grain types',
    ],
    category: 'Grain Separation',
  },
  {
    id: 7,
    slug: 'bucket-elevator',
    tag: 'Material Handling',
    tagColor: '#1D5A6B',
    image: factoryImg,
    galleryImages: [factoryImg],
    title: 'Bucket Elevator',
    shortDesc: 'Vertical grain transport system for lifting paddy or processed grain to elevated hoppers and storage bins.',
    fullDesc: 'The Bucket Elevator provides efficient vertical transport of grain and processed materials from ground level to elevated hoppers, bins or processing machines. Built with heavy-duty MS casing and durable plastic or steel buckets on a continuous belt/chain drive, it handles paddy, rice, wheat and other free-flowing materials.',
    specs: [
      { label: 'Lift Height', value: 'Up to 6 metres (custom)' },
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Drive', value: 'Belt or chain with gearbox motor' },
      { label: 'Bucket Type', value: 'HDPE / MS fabricated' },
      { label: 'Frame', value: 'MS casing, enclosed design' },
    ],
    features: [
      'Enclosed casing prevents spillage',
      'Custom height available',
      'Heavy-duty belt/chain drive',
      'Low-speed gentle on grain',
      'Easy bucket access for cleaning',
    ],
    category: 'Material Handling',
  },
  {
    id: 8,
    slug: 'grain-conveyor-system',
    tag: 'Material Handling',
    tagColor: '#1D5A6B',
    image: blueConveyorImg,
    galleryImages: [blueConveyorImg, blueSystemImg],
    title: 'Inclined Grain Conveyor',
    shortDesc: 'Robust inclined conveyor system for horizontal and inclined transport of paddy, rice, and other grains.',
    fullDesc: 'The Inclined Grain Conveyor offers reliable and gentle transport of grain between processing stages. Its cleated belt design ensures grain does not slip back on inclines. Available in various lengths and inclination angles, it can be integrated into new or existing processing plants.',
    specs: [
      { label: 'Capacity', value: 'Three HP single face' },
      { label: 'Length', value: 'Custom (3m–10m)' },
      { label: 'Inclination', value: 'Up to 35 degrees' },
      { label: 'Belt', value: 'Cleated rubber belt' },
      { label: 'Motor', value: '1–3 HP drive motor' },
      { label: 'Frame', value: 'Heavy-duty MS fabrication' },
    ],
    features: [
      'Cleated belt prevents grain slippage',
      'Custom length and angle',
      'Gentle grain handling',
      'Variable speed option available',
      'Easy integration with existing systems',
    ],
    category: 'Material Handling',
  },
];

export const CATEGORIES = ['millets', 'Rice Processing', 'Grain Separation', 'Grain Cleaning', 'Complete Plants', 'Material Handling'];

export const COMPANY_INFO = {
  name: 'Sri Vaani Agro Industries Private Limited',
  shortName: 'Sri Vaani Agro',
  tagline: 'Manufacturers of Precision Agro Processing Machinery',
  phone1: '8074765385',
  phone2: '7780267570',
  gstin: '37ABMCS6290A1Z5',
  proprietor: 'Gade Vinayabhushan Reddy',
  address: {
    village: 'Kothareddipalem Village',
    mandal: 'Chebrolu Mandal',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    pin: '522 212',
  },
  email: 'srivaaniagro@gmail.com',
  established: 2010,
};

export const STATS = [
  { num: '15+', label: 'Years Experience' },
  { num: '100+', label: 'Machines Delivered' },
  { num: '8+', label: 'Machine Types' },
  { num: '100%', label: 'Made in India' },
];

export const WHY_ITEMS = [
  {
    icon: '🏭',
    title: 'In-House Manufacturing',
    desc: 'All machines built entirely in our Chebrolu, Guntur workshop — giving us full quality control at every stage.',
  },
  {
    icon: '🔧',
    title: 'Custom Configurations',
    desc: 'Every unit tailored to your specific grain type, required capacity, and site conditions.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Standard models ready within days. Custom orders delivered within 2–4 weeks from confirmed order.',
  },
  {
    icon: '🤝',
    title: 'After-Sales Support',
    desc: 'Dedicated service team for installation, operator training and ongoing maintenance support.',
  },
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Inquiry & Consultation', desc: 'Tell us your capacity and grain type requirements.' },
  { num: '02', title: 'Custom Engineering',     desc: 'We design the right machine configuration for you.' },
  { num: '03', title: 'Manufacturing',          desc: 'Built in our Guntur workshop with quality steel.' },
  { num: '04', title: 'Testing & QC',           desc: 'Every unit is fully test-run before dispatch.' },
  { num: '05', title: 'Install & Support',      desc: 'On-site installation and full operator training.' },
];

export const TESTIMONIALS = [
  {
    name: 'Ravi Shankar Rao',
    role: 'Rice Mill Owner, Vijayawada',
    text: 'Sri Vaani delivered our complete processing plant on time and the installation team was very professional. The machines are running perfectly since two years.',
  },
  {
    name: 'K. Subrahmanyam',
    role: 'Paddy Farmer, Krishna District',
    text: 'I bought the mini rice mill for my farm — excellent quality and very easy to operate. Spare parts are always available when I need them.',
  },
  {
    name: 'M. Lakshmaiah',
    role: 'Agro Processing Dealer, Guntur',
    text: 'Best manufacturer in Guntur district. The WALSON mini mills have been our top-selling product for three years running.',
  },
];
