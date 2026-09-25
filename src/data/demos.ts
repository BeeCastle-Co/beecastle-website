/* The three recorded product demos. Each has a landing page
   (/demo-landing-<slug>/) with a lead form, and a watch page
   (/demo-watch-<slug>/) the form sends people on to. Both page shapes are
   rendered from this one list, so a fourth demo is one more entry here. */
export interface Demo {
  slug: 'whitespace' | 'profitability' | 'relationship';
  /** Short name used in "See <name> in action". */
  name: string;
  landing: {
    title: string;
    description: string;
    heading: string;
    lede: string;
  };
  watch: {
    title: string;
    description: string;
    paragraphs: string[];
  };
}

export const demos: Demo[] = [
  {
    slug: 'whitespace',
    name: 'Whitespace',
    landing: {
      title: 'Grow your MSP with Whitespace',
      description:
        'BeeCastle automates your Whitespace Prospecting. Connect your existing PSA and run our AI-driven analysis to find the up-sell and cross-sell opportunities.',
      heading: 'Grow your MSP with Whitespace',
      lede:
        'BeeCastle automates your Whitespace Prospecting. Simply connect your existing PSA setup and run our automated AI-driven analysis to find the up-sell and cross-sell opportunities in your Whitespace.',
    },
    watch: {
      title: 'Whitespace Prospecting Demo',
      description:
        'BeeCastle automates your Whitespace Prospecting. Connect your existing PSA and run our AI-driven analysis to find up-sell and cross-sell opportunities.',
      paragraphs: [
        'BeeCastle automates your Whitespace Prospecting. Simply connect your existing PSA setup and run our automated AI-driven analysis to find the up-sell and cross-sell opportunities in your Whitespace.',
        'Watch our short 4 minute demo to learn more.',
      ],
    },
  },
  {
    slug: 'profitability',
    name: 'Profitability',
    landing: {
      title: "Grow your MSP's Profitability",
      description:
        "BeeCastle gives you the tools to track your MSP's profitability at a glance. Catch trends early and get the best return for every hour of work.",
      heading: 'Grow your MSP’s Profitability',
      lede:
        'BeeCastle gives you the tools to track your MSP’s profitability at a glance. Catch trends in your MSP’s profitability early and use data-driven insights to get the best return for every hour of work at your MSP.',
    },
    watch: {
      title: 'See Profitability in action',
      description:
        "BeeCastle gives you the tools to track your MSP's profitability at a glance. Watch our short 4 minute demo to learn more.",
      paragraphs: [
        'BeeCastle gives you the tools to track your MSP’s profitability at a glance. Catch trends in your MSP’s profitability early and use data-driven insights to get the best return for every hour of work at your MSP.',
        'Watch our short 4 minute demo to learn more.',
      ],
    },
  },
  {
    slug: 'relationship',
    name: 'Account Management',
    landing: {
      title: 'Level-up your MSP’s Account Management',
      description:
        "BeeCastle automates the tracking and analysis of your customer communications to give you real time recommendations to nurture, grow and retain your MSP's clients.",
      heading: 'Level-up your MSP’s Account Management',
      lede:
        'BeeCastle automates the tracking and analysis of your customer communications to give you real time recommendations to nurture, grow and retain your MSP’s clients.',
    },
    watch: {
      title: 'See Account Management in action',
      description:
        "BeeCastle automates the tracking and analysis of your customer communications to give you real time recommendations to nurture, grow and retain your MSP's clients.",
      paragraphs: [
        'BeeCastle automates the tracking and analysis of your customer communications to give you real time recommendations to nurture, grow and retain your MSP’s clients.',
        'Watch our short 5 minute demo to learn more.',
      ],
    },
  },
];

/* "What is BeeCastle": the four cards on every demo landing page. */
export const demoHighlights = [
  { illustration: 'whitespace', title: 'Whitespace & prospecting', body: 'Find the gaps in your service and product penetration across all accounts' },
  { illustration: 'revenue-dashboard', title: 'Revenue tracking dashboards', body: 'Ready-made dashboards and reporting to visualise, analyse and take action' },
  { illustration: 'tiering', title: 'Customer tiering', body: 'Be more intentional about how you nurture accounts through revenue contribution tiering' },
  { illustration: 'crm-logging', title: 'Automated CRM logging', body: 'Ditch manual logging. Automatically record activities from M365 and Teams into your CRM' },
];

/* "How it works": the four steps on every demo page. `image` is a file in
   src/assets/img/, `illustration` a brand illustration; one or the other. */
export const demoSteps: { title: string; body: string; image?: 'w.webp' | 'm365-1.webp'; imageAlt?: string; illustration?: string }[] = [
  { title: '1. Create Account', body: 'Create a **free account** on BeeCastle', illustration: 'bee' },
  { title: '2. Connect your data', body: '**Connect** your **PSA** or **Xero** as a source of contacts and information for BeeCastle to review', image: 'w.webp', imageAlt: 'Xero and PSA integration logos' },
  { title: '3. Connect your M365', body: 'Connect your **Microsoft 365** account (email and calendar) to automate data input', image: 'm365-1.webp', imageAlt: 'Microsoft 365 logo' },
  { title: '4. That’s it!', body: 'Start reviewing your business metrics, grow sales and drive profitability', illustration: 'revenue-dashboard' },
];
