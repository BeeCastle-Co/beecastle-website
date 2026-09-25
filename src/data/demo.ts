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
