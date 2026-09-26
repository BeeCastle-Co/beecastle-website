/* Invented data for the product replicas in src/components/product/.

   Every company, person and figure here is made up. The replicas are
   simplified copies of real BeeCastle screens, and they must never show a
   real customer, a real contact or a real number: if you copy something
   across from the app, change the name and the figure.

   Keep it in one place so the same fictional MSP book shows up consistently
   across every replica on the site. */

export type Tier = 'platinum' | 'gold' | 'silver' | 'bronze';
export type Health = 'critical' | 'watch' | 'ok';
/** Colour for a company's avatar, from the brand tints. */
export type Face = 'cyan' | 'honey' | 'mint' | 'periwinkle' | 'magenta';

export interface DemoCompany {
  name: string;
  tier: Tier;
  face: Face;
  mrr: number;
  /** Revenue change against the previous period, as a percentage. */
  change: number;
  margin: number | null;
  health: Health;
  reason: string;
  lastContact: string;
  manager: string;
}

export const companies: DemoCompany[] = [
  { name: 'Harbourline Dental', tier: 'gold', face: 'cyan', mrr: 13712, change: -15.2, margin: 29.4, health: 'critical', reason: 'Margin down from 47% over two quarters.', lastContact: '94 days ago', manager: 'Priya Sandhu' },
  { name: 'Kestrel Freight', tier: 'platinum', face: 'honey', mrr: 21370, change: 2.1, margin: 64.2, health: 'ok', reason: 'No current rule has identified a risk.', lastContact: '6 days ago', manager: 'Tom Walsh' },
  { name: 'Mapleton Legal', tier: 'gold', face: 'periwinkle', mrr: 12281, change: -8.0, margin: 57.1, health: 'watch', reason: 'Overdue against its meeting cadence.', lastContact: '71 days ago', manager: 'Priya Sandhu' },
  { name: 'Coastal Physio Group', tier: 'silver', face: 'mint', mrr: 4482, change: 2.0, margin: 86.4, health: 'ok', reason: 'No current rule has identified a risk.', lastContact: '12 days ago', manager: 'Tom Walsh' },
  { name: 'Ridgeway Builders', tier: 'bronze', face: 'magenta', mrr: 2439, change: -19.6, margin: 12.8, health: 'critical', reason: 'Revenue declined sharply against last period.', lastContact: 'Never', manager: 'Unassigned' },
  { name: 'Northgate Accounting', tier: 'silver', face: 'cyan', mrr: 6120, change: 4.6, margin: 6.1, health: 'watch', reason: 'Reconciled gross margin is below 15%.', lastContact: '23 days ago', manager: 'Sam Okafor' },
  { name: 'Bluegum Architects', tier: 'gold', face: 'honey', mrr: 10988, change: 1.4, margin: 72.1, health: 'ok', reason: 'No current rule has identified a risk.', lastContact: '4 days ago', manager: 'Sam Okafor' },
  { name: 'Parkside Vets', tier: 'bronze', face: 'mint', mrr: 1705, change: 0, margin: null, health: 'watch', reason: 'Cost basis incomplete, margin unknown.', lastContact: '40 days ago', manager: 'Unassigned' },
];

/** Headline numbers for the portfolio health tiles. */
export const portfolio = {
  mrrAtRisk: 48950,
  mrrAtRiskAcross: 12,
  needsAttention: 17,
  critical: 4,
  marginReview: 9,
  indeterminate: 3,
  cadenceOverdue: 14,
  platinumOverdue: 2,
  renewals60: 5,
};

/** One company, for the company overview replica. */
export const account = {
  name: 'Harbourline Dental',
  tier: 'gold' as Tier,
  face: 'cyan' as Face,
  revenue90d: 48951,
  mrr: 13712,
  recurring90d: 57906,
  nextRenewal: '370 days',
  openP1: 0,
  contacts: 38,
  actions: [
    { kind: 'At risk', tone: 'bad', label: 'Margin down 18 points in two quarters', value: 13712 },
    { kind: 'Cross-sell', tone: 'info', label: 'Add Microsoft 365 backup', note: '6 of 9 similar clients have it', value: 1203 },
    { kind: 'Renewal', tone: 'warn', label: 'Managed VoIP renews in 58 days', value: 3237 },
  ],
  contracts: [
    { name: 'Managed IT Services', perYear: 103974, ends: 'ends 30 Sept 2027', left: 0.32 },
    { name: 'Microsoft 365', perYear: 32443, ends: 'ends 30 Sept 2027', left: 0.32 },
    { name: 'Hybrid Cloud Backup', perYear: 10485, ends: 'ends 30 Nov 2028', left: 0.7 },
    { name: 'Managed VoIP', perYear: 3237, ends: 'ends 23 Nov 2026', left: 0.05 },
  ],
  /** Monthly recurring revenue and total revenue, last 6 months. */
  revenue: {
    months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    recurring: [12400, 12650, 12900, 13100, 13350, 13712],
    total: [14800, 16900, 13600, 18200, 15100, 17746],
  },
};

/** The whitespace stack grid: services across, companies down. */
export const stack = {
  services: ['Managed support', 'M365 licensing', 'M365 backup', 'Phones and voice', 'Productivity add-ons', 'Email security', 'Application control', 'Server backup'],
  /** Share of the book that already buys each service. */
  adoption: ['57/73', '59/73', '37/73', '35/73', '26/73', '24/73', '21/73', '17/73'],
  rows: [
    { name: 'Ridgeway Builders', face: 'magenta' as Face, tier: 'bronze' as Tier, met: 0, gap: 1678, cells: [443, 307, 190, 86, 107, 18, 386, 140] },
    { name: 'Northgate Accounting', face: 'cyan' as Face, tier: 'silver' as Tier, met: 1, gap: 2584, cells: [1379, 307, 346, true, 63, 18, 386, 85] },
    { name: 'Mapleton Legal', face: 'periwinkle' as Face, tier: 'gold' as Tier, met: 2, gap: 1763, cells: [true, 338, 477, 126, true, 18, 386, 354] },
    { name: 'Coastal Physio Group', face: 'mint' as Face, tier: 'silver' as Tier, met: 4, gap: 920, cells: [true, true, 190, true, 107, true, 386, 140] },
    { name: 'Kestrel Freight', face: 'honey' as Face, tier: 'platinum' as Tier, met: 6, gap: 530, cells: [true, true, true, true, 144, true, 386, true] },
  ] as { name: string; face: Face; tier: Tier; met: number; gap: number; cells: (number | true)[] }[],
};

/** Customer profitability: revenue against margin, and profit concentration. */
export const profitability = {
  revenue: 539024,
  directCosts: 170761,
  grossProfit: 368263,
  margin: 68.3,
  withheld: 9,
  target: 35,
  /** [revenue in $k, margin %] per account. */
  points: [
    [62, 67], [59, 58], [48, 71], [44, 76], [41, 52], [38, 81], [33, 64], [30, 69], [27, 74], [24, 88],
    [22, 61], [20, 79], [18, 72], [16, 55], [15, 83], [13, 66], [12, 91], [11, 47], [10, 77], [9, 62],
    [8, 85], [7, 70], [6, 94], [5, 58], [4, 73], [3, 80], [14, 29], [9, 12], [5, -8], [3, -21],
  ] as [number, number][],
  /** Top accounts by gross profit, $k, for the concentration chart. */
  concentration: [
    ['Kestrel Freight', 42], ['Bluegum Architects', 34], ['Mapleton Legal', 22], ['Summit Wealth', 18], ['Coastal Physio', 16],
    ['Ironbark Eng.', 14], ['Parkside Vets', 12], ['Northgate Acc.', 10], ['Harbourline', 8], ['Ridgeway', -3],
  ] as [string, number][],
};

/** Meeting planner: who is overdue a meeting against their cadence. */
export const meetings = [
  { name: 'Kestrel Freight', tier: 'platinum' as Tier, status: 'overdue', cadence: 'Quarterly', last: '104 days ago', manager: 'Tom Walsh' },
  { name: 'Mapleton Legal', tier: 'gold' as Tier, status: 'overdue', cadence: 'Every 6 weeks', last: '71 days ago', manager: 'Priya Sandhu' },
  { name: 'Harbourline Dental', tier: 'gold' as Tier, status: 'due', cadence: 'Every 6 weeks', last: '40 days ago', manager: 'Priya Sandhu' },
  { name: 'Bluegum Architects', tier: 'gold' as Tier, status: 'ok', cadence: 'Every 6 weeks', last: '4 days ago', manager: 'Sam Okafor' },
  { name: 'Coastal Physio Group', tier: 'silver' as Tier, status: 'ok', cadence: 'Every 6 months', last: '12 days ago', manager: 'Tom Walsh' },
];

/** One company's profitability tab. */
export const accountProfit = {
  /* The latest month (September) in the series below. */
  revenue: 16100,
  directCosts: 6800,
  grossProfit: 9300,
  margin: 57.8,
  effectiveRate: 394,
  hours: 41,
  costs: [
    { label: 'Products, licensing and expenses', value: 5023 },
    { label: 'Contract labour', value: 1805 },
  ],
  /** Monthly revenue and direct costs, $. July carries a one-off project
      whose labour was bought in, so its margin dips: the drill-down story. */
  months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  revenueByMonth: [14800, 11200, 11900, 22400, 17600, 16100],
  costsByMonth: [6900, 4700, 4900, 16800, 9900, 6800],
  /** The month opened in the drill-down, and what made up its costs. */
  drillMonth: 'Jul',
  drill: {
    labour: { hours: 58.5, value: 2950 },
    lines: [
      { name: 'Network upgrade project labour', value: 9400 },
      { name: 'Laptop, 16" business model + 3yr onsite warranty', value: 1690 },
      { name: 'Microsoft 365 Business Standard (annual, monthly billing)', value: 940 },
      { name: 'Cloud backup, 1yr retention', value: 680 },
      { name: 'Firewall licence renewal', value: 400 },
      { name: 'Microsoft 365 Business Basic (annual, monthly billing)', value: 290 },
      { name: 'Planner and Project Plan 3', value: 200 },
      { name: 'Teams Phone Standard', value: 180 },
      { name: 'Power BI Pro (month to month)', value: 70 },
    ],
  },
};

/** Customer profitability table rows. */
export const profitRows = [
  { name: 'Kestrel Freight', revenue: 62827, costs: 20414, hours: 101 },
  { name: 'Bluegum Architects', revenue: 58888, costs: 24504, hours: 141 },
  { name: 'Mapleton Legal', revenue: 31779, costs: 10817, hours: 76 },
  { name: 'Summit Wealth', revenue: 24379, costs: 5099, hours: 52 },
  { name: 'Harbourline Dental', revenue: 19467, costs: 11181, hours: 24 },
  { name: 'Ridgeway Builders', revenue: 9160, costs: 10410, hours: 68 },
];

/** A single client's product stack, for the company whitespace tab. */
export const clientStack = {
  name: 'Security stack',
  met: 3,
  total: 7,
  monthly: 3065,
  items: [
    { name: 'Managed detection and response', has: false, note: '6 of 9 similar clients have it', value: 692 },
    { name: 'Microsoft 365 backup', has: true },
    { name: 'Email security', has: false, note: '5 of 9 similar clients have it', value: 515 },
    { name: 'Application control', has: true },
    { name: 'SIEM', has: false, note: '3 of 9 similar clients have it', value: 1203 },
    { name: 'Security awareness training', has: true },
    { name: 'Password manager', has: false, note: '4 of 9 similar clients have it', value: 152 },
  ],
};

/** Prospecting: sell a product to clients that do not have it yet. */
export const prospecting = {
  product: 'Managed VoIP',
  prospects: [
    { name: 'Summit Wealth', tier: 'platinum' as Tier, face: 'periwinkle' as Face, mrr: 42827 },
    { name: 'Mapleton Legal', tier: 'gold' as Tier, face: 'periwinkle' as Face, mrr: 31779 },
    { name: 'Ironbark Engineering', tier: 'gold' as Tier, face: 'honey' as Face, mrr: 24379 },
    { name: 'Coastal Physio Group', tier: 'silver' as Tier, face: 'mint' as Face, mrr: 16597 },
    { name: 'Northgate Accounting', tier: 'silver' as Tier, face: 'cyan' as Face, mrr: 13284 },
  ],
  prospectCount: 40,
  have: [
    { name: 'Kestrel Freight', tier: 'platinum' as Tier, face: 'honey' as Face, mrr: 58888 },
    { name: 'Bluegum Architects', tier: 'gold' as Tier, face: 'honey' as Face, mrr: 19620 },
    { name: 'Harbourline Dental', tier: 'gold' as Tier, face: 'cyan' as Face, mrr: 13712 },
    { name: 'Parkside Vets', tier: 'bronze' as Tier, face: 'mint' as Face, mrr: 6635 },
    { name: 'Ridgeway Builders', tier: 'bronze' as Tier, face: 'magenta' as Face, mrr: 4927 },
  ],
  haveCount: 33,
};

/** Whitespace summary: billed revenue and potential by product. */
export const productSummary = {
  billed: 6834916,
  potential: 506393,
  rows: [
    { category: 'MSA, device based', product: 'Managed workstation', billed: 2411478, companies: 51, potential: 30965 },
    { category: 'MSA, device based', product: 'Managed server', billed: 729591, companies: 49, potential: 11265 },
    { category: 'SaaS sales', product: 'Microsoft 365 Business Premium', billed: 367592, companies: 39, potential: 13148 },
    { category: 'SaaS sales', product: 'Application control', billed: 203898, companies: 20, potential: 17730 },
    { category: 'BCDR sales', product: 'Cloud backup, infinite retention', billed: 141910, companies: 21, potential: 13956 },
    { category: 'MSA, VoIP', product: 'Managed VoIP', billed: 100236, companies: 33, potential: 6718 },
  ],
};

/** Tier bands: the share of cumulative revenue each tier covers. */
export const tiering = {
  bands: [
    { tier: 'platinum' as Tier, to: 45 },
    { tier: 'gold' as Tier, to: 80 },
    { tier: 'silver' as Tier, to: 90 },
    { tier: 'bronze' as Tier, to: 100 },
  ],
  revenue90d: 1590349,
  tiered: 70,
  frequencies: [
    { tier: 'platinum' as Tier, cadence: 'Quarterly', target: 'Quarterly +1' },
    { tier: 'gold' as Tier, cadence: 'Every 6 weeks', target: 'Every 6 weeks' },
    { tier: 'silver' as Tier, cadence: 'Every 6 months', target: 'Every 6 months' },
    { tier: 'bronze' as Tier, cadence: 'Yearly', target: 'Yearly' },
  ],
};

/** Sales dashboard: pipeline tiles, value by stage over the next months, top deals. */
export const sales = {
  open: 26,
  pipeline: 184250,
  outdated: 7,
  noActivity: 5,
  months: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  /** [proposal sent, negotiation] per month, $k. */
  stages: [[62, 14], [9, 22], [18, 6], [26, 11], [4, 15], [12, 3]] as [number, number][],
  top: [
    { company: 'Kestrel Freight', deal: 'Managed IT renewal, three years', value: 19923, owner: 'Tom Walsh', close: '18 Sept', stage: 'Proposal sent' },
    { company: 'Mapleton Legal', deal: 'New starter laptops', value: 12177, owner: 'Priya Sandhu', close: '25 Sept', stage: 'Proposal sent' },
    { company: 'Bluegum Architects', deal: 'Conditional access review', value: 8600, owner: 'Sam Okafor', close: '29 Sept', stage: 'Negotiation' },
    { company: 'Coastal Physio Group', deal: 'Replacement switches', value: 4817, owner: 'Tom Walsh', close: '3 Oct', stage: 'Proposal sent' },
  ],
};

/** A company's activity timeline and a meeting note. */
export const activity = [
  { kind: 'meeting', who: 'Jordan Lee', role: 'Decision maker', what: 'Quarterly business review', when: '3 days ago', tone: 'warm' },
  { kind: 'email', who: 'Casey Ng', role: 'Senior influencer', what: 'Re: laptop refresh quote', when: '6 days ago', tone: 'neutral' },
  { kind: 'call', who: 'Jordan Lee', role: 'Decision maker', what: 'Renewal check-in, 14 min', when: '12 days ago', tone: 'warm' },
  { kind: 'email', who: 'Morgan Diaz', role: 'Team member', what: 'Printer still offline after the move', when: '19 days ago', tone: 'frustrated' },
] as { kind: 'meeting' | 'email' | 'call'; who: string; role: string; what: string; when: string; tone: 'warm' | 'neutral' | 'frustrated' }[];

export const meetingNote = {
  title: 'Quarterly business review',
  when: 'Tue 23 Sept, 10:00',
  attendees: ['Jordan Lee', 'Casey Ng', 'Priya Sandhu'],
  body: [
    'Happy with service since the new helpdesk process. Two escalations this quarter, both closed inside SLA.',
    'Opening a second site in March: needs 12 laptops, phones and a site-to-site VPN.',
    'Asked about backup for Microsoft 365 after a lost mailbox scare.',
  ],
  actions: ['Quote the new site fit-out', 'Send the M365 backup one-pager'],
};

/** Contacts at one company, by role, with relationship score. */
export const contacts = [
  { name: 'Jordan Lee', title: 'Managing Director', role: 'Decision maker', score: 86, last: '3 days ago' },
  { name: 'Casey Ng', title: 'Operations Manager', role: 'Senior influencer', score: 71, last: '6 days ago' },
  { name: 'Morgan Diaz', title: 'Office Coordinator', role: 'Team member', score: 44, last: '19 days ago' },
  { name: 'Riley Chen', title: 'Finance Lead', role: 'Senior influencer', score: 18, last: '5 months ago' },
];

/** Product stacks: BeeCastle suggests a core stack from what the book
    already buys. Each category is one question the whitespace grid asks. */
export const coreStack = {
  clients: 73,
  commonCount: 41,
  threshold: 4,
  categories: [
    { name: 'Managed support', products: 'Managed workstation, managed server, managed network device', have: 65 },
    { name: 'Microsoft 365 licensing', products: 'Business Premium, Business Standard, Business Basic', have: 60 },
    { name: 'Microsoft 365 backup', products: 'SaaS backup for Microsoft 365', have: 35 },
    { name: 'Productivity add-ons', products: 'Power BI Pro, Teams Rooms, email signatures, Copilot', have: 30 },
    { name: 'Email security', products: 'Exchange Online protection, advanced threat filtering', have: 24 },
    { name: 'Application control', products: 'Allow-listing, ringfencing', have: 21 },
    { name: 'Server backup and continuity', products: 'Online backup, BCDR appliance, cloud retention', have: 21 },
  ],
};
