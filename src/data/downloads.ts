/* Gated downloads: a page with a form, and a thank-you page with the file.
   Each form is a Netlify form named after its page (submissions land in
   Netlify, and from there Slack), and only then does the visitor reach the
   thank-you page with the link.

   Not discoverable, rather than secret: the PDFs live in public/files/ under
   a random folder, and each thank-you page sits at a random address. Neither
   is linked from anywhere but the form's redirect, neither is in the sitemap,
   and netlify.toml sends noindex for both. Someone who has the link can share
   it; that is accepted. To rotate a link, change the token and move the file.

   The originals on assets.beecastle.com still work for anyone holding the old
   links from past emails. */
export interface Download {
  /** The page URL without slashes, and the Netlify form name. */
  slug: string;
  /** What the thing is called in the button and on the thank-you page. */
  label: string;
  /** Path of the PDF under public/, inside its random folder. */
  pdfUrl: string;
  /** Random part of the thank-you page address: /<slug>/thanks-<token>/. */
  thanksToken: string;
  submitLabel: string;
  thanksHeading: string;
}

export const downloads = {
  security: {
    slug: 'security',
    label: 'the security white paper',
    pdfUrl: '/files/dac475799114/beecastle-information-security-overview.pdf',
    thanksToken: 'e2fc80425a58',
    submitLabel: 'Download',
    thanksHeading: 'Thanks for downloading our security documentation!',
  },
  excellence: {
    slug: 'excellence_in_account_management',
    label: 'the Excellence in Account Management white paper',
    pdfUrl: '/files/67ad4d62bc91/beecastle-excellence-in-account-management.pdf',
    thanksToken: '90a340e2050d',
    submitLabel: 'Download',
    thanksHeading: 'Thanks for downloading our white paper.',
  },
  ebook: {
    slug: 'e-book',
    label: 'It Pays to Be Proactive',
    pdfUrl: '/files/b3db676c8987/it-pays-to-be-proactive-beecastle-ebook.pdf',
    thanksToken: '62ae07a081be',
    submitLabel: 'Get your e-book',
    thanksHeading: 'Thanks for checking out our e-book!',
  },
} satisfies Record<string, Download>;

/** The thank-you page a download's form sends the visitor to. */
export const thanksPath = (d: Download) => `/${d.slug}/thanks-${d.thanksToken}/`;
