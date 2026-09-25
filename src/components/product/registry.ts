/* The product replicas by name, so a Markdown file can ask for one with
   `replica: whitespace-grid` instead of pointing at a screenshot. The names
   here are the only values the content schema accepts. */
import PortfolioHealth from './PortfolioHealth.astro';
import CompanyOverview from './CompanyOverview.astro';
import RevenueChart from './RevenueChart.astro';
import WhitespaceGrid from './WhitespaceGrid.astro';
import WhitespaceActions from './WhitespaceActions.astro';
import Profitability from './Profitability.astro';
import ProfitabilityTable from './ProfitabilityTable.astro';
import AccountProfitability from './AccountProfitability.astro';
import MeetingPlanner from './MeetingPlanner.astro';
import HealthScore from './HealthScore.astro';
import HealthBreakdown from './HealthBreakdown.astro';
import ClientStack from './ClientStack.astro';
import Prospecting from './Prospecting.astro';
import ProductSummary from './ProductSummary.astro';
import Tiering from './Tiering.astro';
import SalesDashboard from './SalesDashboard.astro';
import Activity from './Activity.astro';
import MeetingNote from './MeetingNote.astro';
import Contacts from './Contacts.astro';
import Onboarding from './Onboarding.astro';

export const REPLICA_NAMES = [
  'portfolio-health', 'company-overview', 'revenue-chart', 'whitespace-grid', 'whitespace-actions',
  'profitability', 'profitability-table', 'account-profitability', 'meeting-planner', 'health-score',
  'health-breakdown', 'client-stack', 'prospecting', 'product-summary', 'tiering', 'sales-dashboard',
  'activity', 'meeting-note', 'contacts', 'onboarding',
] as const;

export type ReplicaName = (typeof REPLICA_NAMES)[number];

export const replicas: Record<ReplicaName, (props: Record<string, unknown>) => unknown> = {
  'portfolio-health': PortfolioHealth,
  'company-overview': CompanyOverview,
  'revenue-chart': RevenueChart,
  'whitespace-grid': WhitespaceGrid,
  'whitespace-actions': WhitespaceActions,
  profitability: Profitability,
  'profitability-table': ProfitabilityTable,
  'account-profitability': AccountProfitability,
  'meeting-planner': MeetingPlanner,
  'health-score': HealthScore,
  'health-breakdown': HealthBreakdown,
  'client-stack': ClientStack,
  prospecting: Prospecting,
  'product-summary': ProductSummary,
  tiering: Tiering,
  'sales-dashboard': SalesDashboard,
  activity: Activity,
  'meeting-note': MeetingNote,
  contacts: Contacts,
  onboarding: Onboarding,
};
