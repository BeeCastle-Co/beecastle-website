/* The main menu. Products, Solutions and Integrations are read from their
   content collections in Nav.astro, so adding a product .md adds it to the
   menu. Everything else is listed here.

   Headings and labels are keys into src/i18n/en-AU.yml, so a new link needs
   its words added there too. */
import { site } from './site';

export type NavLink = { key: string; href: string; external?: boolean };

export const resources: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'nav.groups.learn',
    links: [
      { key: 'nav.links.whyBeeCastle', href: '/why-use-beecastle/' },
      { key: 'nav.links.blog', href: '/blog/' },
      { key: 'nav.links.newsletter', href: '/newsletter/' },
      { key: 'nav.links.helpPortal', href: site.helpUrl, external: true },
    ],
  },
  {
    heading: 'nav.groups.downloads',
    links: [
      { key: 'nav.links.excellence', href: '/excellence_in_account_management/' },
      { key: 'nav.links.securityPaper', href: '/security/' },
      { key: 'nav.links.ebook', href: '/e-book/' },
    ],
  },
  {
    heading: 'nav.groups.getInTouch',
    links: [
      { key: 'nav.links.contactUs', href: '/contact/' },
      { key: 'nav.links.channelPartners', href: '/channel-partners/' },
    ],
  },
];

export const pricing: NavLink[] = [
  { key: 'nav.links.plans', href: '/plans/' },
  { key: 'nav.links.roiCalculator', href: '/roi-calculator/' },
];

/* Footer columns. */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'footer.columns.company',
    links: [
      { key: 'footer.links.about', href: '/about/' },
      { key: 'footer.links.plans', href: '/plans/' },
      { key: 'footer.links.whyBeeCastle', href: '/why-use-beecastle/' },
      { key: 'footer.links.security', href: '/security/' },
      { key: 'footer.links.contact', href: '/contact/' },
    ],
  },
  {
    heading: 'footer.columns.resources',
    links: [
      { key: 'footer.links.blog', href: '/blog/' },
      { key: 'footer.links.newsletter', href: '/newsletter/' },
      { key: 'footer.links.resourceHub', href: site.helpUrl, external: true },
      { key: 'footer.links.roiCalculator', href: '/roi-calculator/' },
      { key: 'footer.links.ebook', href: '/e-book/' },
    ],
  },
  {
    heading: 'footer.columns.legal',
    links: [
      { key: 'footer.links.terms', href: '/terms/' },
      { key: 'footer.links.privacy', href: '/privacy/' },
      { key: 'footer.links.dpa', href: '/beecastle-data-processing-addendum/' },
    ],
  },
];
