/* Named carousels of replicas, for features with more depth than one screen
   can show. A content section asks for one with `carousel: whitespace`.
   3 to 5 slides each; the caption says what that slide shows. */
import type { ReplicaName } from './registry';

export const CAROUSEL_NAMES = ['whitespace', 'customer-success', 'profitability', 'sales'] as const;
export type CarouselName = (typeof CAROUSEL_NAMES)[number];

export const carousels: Record<CarouselName, { label: string; slides: { replica: ReplicaName; caption: string; props?: Record<string, unknown> }[] }> = {
  whitespace: {
    label: 'Whitespace in BeeCastle',
    slides: [
      { replica: 'stack-builder', caption: 'BeeCastle suggests your core stack from what clients already buy.' },
      { replica: 'whitespace-grid', caption: 'Every client against the stack, with the monthly value of each gap.', props: { columns: 4, compact: true } },
      { replica: 'client-stack', caption: 'One client’s gaps, each one click from an opportunity or the next agenda.' },
      { replica: 'prospecting', caption: 'Pick a product and see who does not have it yet, biggest first.' },
      { replica: 'whitespace-actions', caption: 'The week’s best moves, ranked by revenue at stake.' },
    ],
  },
  'customer-success': {
    label: 'Customer success in BeeCastle',
    slides: [
      { replica: 'portfolio-health', caption: 'Every client’s health, and the reason behind it.' },
      { replica: 'health-breakdown', caption: 'Each score explained: relationship, tone, warnings and service.' },
      { replica: 'meeting-planner', caption: 'Who is overdue a meeting for their tier.' },
      { replica: 'activity', caption: 'Meetings, calls and emails logged from Microsoft 365, with tone.' },
      { replica: 'meeting-note', caption: 'Notes linked to the meeting they came from.' },
    ],
  },
  profitability: {
    label: 'Profitability in BeeCastle',
    slides: [
      { replica: 'profitability', caption: 'Revenue against margin across the whole book.' },
      { replica: 'profitability-table', caption: 'Revenue, direct costs and gross profit for every client.' },
      { replica: 'monthly-profitability', caption: 'One client, month by month.' },
      { replica: 'profit-drilldown', caption: 'Open any month to see exactly what made up its costs.' },
    ],
  },
  sales: {
    label: 'Sales in BeeCastle',
    slides: [
      { replica: 'sales-dashboard', caption: 'Pipeline by stage and the deals closing soon.' },
      { replica: 'whitespace-actions', caption: 'Renewals, at-risk accounts and cross-sell in one list.' },
      { replica: 'company-overview', caption: 'Each account’s revenue, renewals and next best actions.' },
    ],
  },
};
