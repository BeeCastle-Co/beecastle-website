/* Company-wide constants. Change an address or a link here and it changes
   everywhere it is shown. */
export const site = {
  name: 'BeeCastle',
  appUrl: 'https://app.beecastle.com',
  signInUrl: 'https://app.beecastle.com/login/',
  microsoftSignupUrl: 'https://app.beecastle.com/signup/microsoft-redirect/',
  /** The sign-up form GETs here with ?email=. Points at the current app; the
      rewrite (beecastle-server) may need a different address. */
  signupUrl: 'https://app.beecastle.com/signup',
  /** "Book a demo" goes to a HubSpot meetings page. A real link, not a modal. */
  demoUrl: 'https://meetings.hubspot.com/david4567',
  helpUrl: 'https://help.beecastle.com/en/',
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
