/* The main menu. Products, Solutions and Integrations are read from their
   content collections in Nav.astro, so adding a product .md adds it to the
   menu. Everything else is listed here. */
export type NavLink = { label: string; href: string; blurb?: string; external?: boolean };

export const resources: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Learn',
    links: [
      { label: 'Why BeeCastle', href: '/why-use-beecastle/', blurb: 'See why MSPs across the globe use BeeCastle' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'Help portal', href: 'https://help.beecastle.com/en/', external: true },
    ],
  },
  {
    heading: 'Free downloads',
    links: [
      { label: 'Excellence in Account Management', href: '/excellence_in_account_management/' },
      { label: 'Security white paper', href: '/security/' },
      { label: 'E-book', href: '/e-book/' },
      { label: 'MSP coach directory', href: '/msp-coach-directory/' },
    ],
  },
  {
    heading: 'Get in touch',
    links: [
      { label: 'Contact us', href: '/contact/' },
      { label: 'Ask the founders a question', href: '/ask-the-founders-a-question/' },
      { label: 'Channel partners', href: '/channel-partners/' },
    ],
  },
];

export const pricing: NavLink[] = [
  { label: 'Plans', href: '/plans/' },
  { label: 'ROI calculator', href: '/roi-calculator/' },
];

/* Footer columns. */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'BeeCastle',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Plans', href: '/plans/' },
      { label: 'Why BeeCastle', href: '/why-use-beecastle/' },
      { label: 'Security', href: '/security/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'MSP resource hub', href: 'https://help.beecastle.com/en/', external: true },
      { label: 'ROI calculator', href: '/roi-calculator/' },
      { label: 'E-book', href: '/e-book/' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of use', href: '/terms/' },
      { label: 'Privacy statement', href: '/privacy/' },
      { label: 'Data processing addendum', href: '/beecastle-data-processing-addendum/' },
    ],
  },
];
