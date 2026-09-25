/* Paid-traffic landing pages under /lp/. Each is a hero, an optional
   overview, alternating feature sections and a closing call to action,
   rendered by src/pages/lp/[slug].astro. Strings allow **bold**, *italic* and
   [links](/x/) only.

   These have the same shape as the featurePage collections; if more landing
   pages are added, consider an `lp` collection in content.config.ts. */
import type { ImageMetadata } from 'astro';
import finder from '../assets/img/lp/bc_module_whitespace_finder.webp';
import cwLogos from '../assets/img/lp/connectwise-beecastle.webp';
import penetration from '../assets/img/lp/product-penetration-2.webp';
import opportunities from '../assets/img/lp/find-opportunities-2.webp';
import agreementTypes from '../assets/img/lp/white2.webp';
import additionMapping from '../assets/img/lp/white1.webp';
import productAdditions from '../assets/img/lp/whitespace-1.webp';

interface Section {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  cta?: 'signup' | 'demo';
}

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Overview panel with jump links to the sections. */
  overview?: { heading: string; body: string };
  /** A plain text block under the hero, when there is no overview panel. */
  statement?: { heading: string; body: string };
  /** A one-button prompt after the statement. */
  band?: { heading: string; label: string; href: string };
  /** A text-only section shown before the feature sections, not linked from the overview. */
  lead?: Section;
  sections: Section[];
  /** Customer logo wall heading; omit to leave the wall out. */
  trust?: string;
  closing: string;
  /** Include the "Join BeeCastle" sign-up panel at the end. */
  signup?: boolean;
}

const revenueBullets = [
  'View revenue metrics across every dimension of product and client',
  'Identify Whitespace opportunities for high-ROI cross-sell and up-sell',
  'Get prioritised recommendations for every client in your portfolio',
];
const opportunityBullets = [
  'Drive strategic MSP growth through efficient Whitespace Prospecting',
  'Enhance account management with timely up-sell and cross-sell conversations',
  'Pursue leads yourself or allocate across your team directly through your PSA',
];
const accountBullets = [
  'Identify cross-sell and up-sell sales opportunities for every client',
  'Enhance MSP account management by offering clients solutions proactively',
  'Drive MSP growth by focusing on the highest-ROI leads with your existing clients',
];

export const landingPages: LandingPage[] = [
  {
    slug: 'whitespace-prospecting',
    title: 'Discover Whitespace growth opportunities for your MSP',
    description:
      'BeeCastle’s Whitespace Prospecting tools find cross-sell and up-sell opportunities in your existing clients with automated analysis of your PSA data.',
    eyebrow: 'Whitespace Prospecting',
    headline: 'Discover Whitespace growth opportunities for your MSP',
    intro: [
      'BeeCastle’s MSP Whitespace Prospecting tools identify and recommend cross-sell and up-sell opportunities to your existing clients using automated analysis of your seamlessly integrated PSA data',
    ],
    image: finder,
    imageAlt: 'BeeCastle Whitespace Prospecting',
    overview: {
      heading: 'What is Whitespace Prospecting?',
      body: 'Whitespace analysis is the process of analysing your MSP’s PSA data to find opportunities for cross-sell and up-sell in your existing client base and product stack. BeeCastle’s Whitespace Prospecting tools automate the whole process: just connect your existing PSA setup and run our automated AI-driven analysis to find the opportunities in your Whitespace.',
    },
    lead: {
      heading: 'How does Whitespace Prospecting work?',
      paragraphs: ['Simplify MSP Whitespace Prospecting with BeeCastle:'],
      bullets: [
        'Sign up to BeeCastle and link your PSA account in minutes',
        'Choose the product stack and the set of clients you want to analyse',
        'Let our AI-driven tools find the highest-ROI sales opportunities for you',
      ],
      cta: 'demo',
    },
    sections: [
      {
        heading: 'Automated MSP Revenue Analytics',
        paragraphs: ['Automate analysis of your MSP’s product penetration across your client base to identify gaps and opportunities for the highest-ROI up-sell and cross-sell leads'],
        bullets: revenueBullets,
        image: penetration,
        imageAlt: 'BeeCastle product penetration',
        cta: 'signup',
      },
      {
        heading: 'Whitespace Opportunity Discovery',
        paragraphs: ['BeeCastle’s proprietary technology enables you to find high-ROI sales leads in your existing client base and push them into your PSA (ConnectWise, HaloPSA, or Autotask).'],
        bullets: opportunityBullets,
        image: opportunities,
        imageAlt: 'BeeCastle finding opportunities',
        cta: 'signup',
      },
      {
        heading: 'Strategic MSP account management',
        paragraphs: ['Instantly visualise invoiced and churned agreements across your entire client base and find the best opportunities to proactively sell more of your stack'],
        bullets: accountBullets,
        image: agreementTypes,
        imageAlt: 'BeeCastle agreement type Whitespace',
        cta: 'signup',
      },
      {
        heading: 'MSP sales team coordination',
        paragraphs: ['BeeCastle’s Whitespace Prospecting tools help everyone across your MSP work together to drive strategic revenue growth from your portfolio of existing clients'],
        bullets: [
          'Account Managers have the data to prompt valuable client conversations',
          'Sales leaders can map and prioritise growth opportunities more strategically',
          'Owners ensure their MSP is prioritising the highest-ROI growth opportunities',
        ],
        image: additionMapping,
        imageAlt: 'BeeCastle agreement and addition mapping',
        cta: 'signup',
      },
      {
        heading: 'Understand MSP revenue metrics',
        paragraphs: ['Visualise which products your clients have purchased and where their revenue is coming from. Leverage BeeCastle’s intelligent recommendation system to uncover the best prospects for cross-sell and up-sell.'],
        bullets: [
          'Automate and accelerate your analysis with direct integration to your PSA',
          'Focus sales efforts on the highest ROI sales opportunities to your existing clients',
          'Get the most out of your MSP’s product stack by maximising client coverage',
        ],
        image: productAdditions,
        imageAlt: 'BeeCastle product additions',
        cta: 'signup',
      },
    ],
    closing: 'Ready to see how BeeCastle can improve your up-sell and cross-sell?',
    signup: true,
  },
  {
    slug: 'connectwise-manage',
    title: 'Integrate ConnectWise Manage & sync with BeeCastle',
    description:
      'BeeCastle integrates with your ConnectWise PSA to deliver Sales Dashboards, Whitespace Prospecting, Revenue Analytics and Enhanced Account Management.',
    eyebrow: 'PSA Integrations',
    headline: 'ConnectWise PSA',
    intro: [
      'BeeCastle seamlessly integrates with your ConnectWise PSA setup to deliver advanced Sales Dashboards, Whitespace Prospecting, Revenue Analytics and Enhanced Account Management features purpose-built to help MSPs like yours supercharge their growth',
    ],
    image: cwLogos,
    imageAlt: 'ConnectWise and BeeCastle logos',
    statement: {
      heading: 'Your ConnectWise PSA data is your secret sales weapon',
      body: 'All the data you need to build a world-class MSP sales operation is sitting there waiting for you in your ConnectWise PSA account. BeeCastle offers a simple, seamless and secure integration that analyses your ConnectWise PSA data to make timely and easy-to-action recommendations about how to grow revenue and profit in your MSP.',
    },
    band: { heading: 'Sign up now and turn your ConnectWise PSA data into revenue today', label: 'Get Started', href: '/sign-up/' },
    sections: [
      {
        heading: 'Revenue Analytics for ConnectWise',
        paragraphs: ['Automate analysis of your ConnectWise PSA data to identify gaps and opportunities for the highest-ROI up-sell and cross-sell leads'],
        bullets: revenueBullets,
        image: penetration,
        imageAlt: 'BeeCastle product penetration',
        cta: 'signup',
      },
      {
        heading: 'Whitespace in ConnectWise',
        paragraphs: ['BeeCastle’s proprietary technology enables you to find high-ROI sales leads in your existing client base and push them into your ConnectWise PSA setup.'],
        bullets: opportunityBullets,
        image: opportunities,
        imageAlt: 'BeeCastle finding opportunities',
        cta: 'signup',
      },
      {
        heading: 'ConnectWise account management',
        paragraphs: ['Instantly visualise invoiced and churned agreements across your entire ConnectWise account and find the best opportunities to proactively sell more of your stack'],
        bullets: accountBullets,
        image: agreementTypes,
        imageAlt: 'BeeCastle agreement type Whitespace',
        cta: 'signup',
      },
    ],
    trust: 'More and more MSPs are trusting BeeCastle to supercharge their growth',
    closing: 'Automate MSP sales growth from your ConnectWise PSA data',
  },
];
