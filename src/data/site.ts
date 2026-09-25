/* Company-wide constants. Change an address or a link here and it changes
   everywhere it is shown. */

/* The product and help centre live on their own domains. Set them per
   environment (.env locally, Netlify for deploys) so a preview can point at a
   staging app. The defaults are production. Trailing slashes are trimmed so
   the paths below always join cleanly. */
const trim = (url: string) => url.replace(/\/+$/, '');
const APP_URL = trim(import.meta.env.PUBLIC_APP_URL || 'https://suite.beecastle.com');
const HELP_URL = trim(import.meta.env.PUBLIC_HELP_URL || 'http://help.suite.beecastle.com');

export const site = {
  name: 'BeeCastle',
  appUrl: APP_URL,
  signInUrl: `${APP_URL}/login`,
  /** Microsoft sign-up is a button on the app's sign-up page, not a URL of its own. */
  microsoftSignupUrl: `${APP_URL}/signup`,
  /** The email sign-up form GETs here with ?email=. The rewrite does not
      prefill from it yet, so the visitor types the address again. */
  signupUrl: `${APP_URL}/signup`,
  /** "Book a demo" goes to a HubSpot meetings page. A real link, not a modal. */
  demoUrl: 'https://meetings.hubspot.com/david4567',
  helpUrl: `${HELP_URL}/`,
  address: 'L13, 20 Hunter St, Sydney NSW 2000 Australia',
  supportHours: 'Mon-Fri, 9am-5pm AEST',
  email: {
    hello: 'hello@beecastle.com',
    sales: 'sales@beecastle.com',
    help: 'help@beecastle.com',
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/beecastle/', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://www.youtube.com/@beecastle', icon: 'youtube' },
    { label: 'X (Twitter)', href: 'https://twitter.com/beecastleapp/', icon: 'x' },
    { label: 'Facebook', href: 'https://www.facebook.com/beecastleformsps', icon: 'facebook' },
  ],
} as const;
