/* Gated downloads: a page with a form, and a thank-you page with the file.
   Each form is a Netlify form named after its page; submissions appear in the
   Netlify dashboard. The PDFs are hosted on assets.beecastle.com, as they were
   on the old site (which posted the form to api.beecastle.com/mailer/contact
   and then opened the PDF in a new tab). */
export interface Download {
  /** The page URL without slashes, and the Netlify form name. */
  slug: string;
  /** What the thing is called in the button and on the thank-you page. */
  label: string;
  pdfUrl: string;
  submitLabel: string;
  thanksHeading: string;
}

export const downloads = {
  security: {
    slug: 'security',
    label: 'the security white paper',
    pdfUrl: 'https://assets.beecastle.com/beecastle-information-security-overview-v2.pdf',
    submitLabel: 'Download',
    thanksHeading: 'Thanks for downloading our security documentation!',
  },
  excellence: {
    slug: 'excellence_in_account_management',
    label: 'the Excellence in Account Management white paper',
    pdfUrl: 'https://assets.beecastle.com/beecastle_excellence_in_account_management.pdf',
    submitLabel: 'Download',
    thanksHeading: 'Thanks for downloading our white paper.',
  },
  ebook: {
    slug: 'e-book',
    label: 'It Pays to Be Proactive',
    pdfUrl: 'https://assets.beecastle.com/it-pays-to-be-proactive_beecastle-ebook-for-msps.pdf',
    submitLabel: 'Get your e-book',
    thanksHeading: 'Thanks for checking out our e-book!',
  },
} satisfies Record<string, Download>;
