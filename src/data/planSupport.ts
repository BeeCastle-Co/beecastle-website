/* The "Get extra support" cards under the pricing table on /plans/.
   icon is an illustration name from src/assets/illustrations/. */
import { site } from './site';

export interface SupportItem {
  icon: string;
  heading: string;
  body: string;
  link?: { label: string; href: string };
}

export const planSupport: SupportItem[] = [
  {
    icon: 'integrations-stack',
    heading: 'Fast and free implementation',
    body: 'It takes just 10 minutes to set up BeeCastle and integrate with your PSA. You can DIY following our guide, or if you need some help we can guide you through it.',
    link: { label: 'Watch how', href: 'https://www.youtube.com/watch?v=kCQwGXf4iRM' },
  },
  {
    icon: 'revenue-dashboard',
    heading: 'Revenue tracking dashboards',
    body: `Some folks like to get started by rolling up their sleeves and exploring BeeCastle on their own. For those who get stuck, we have the **Resource Hub, [Help Centre](${site.helpUrl}) and 24/7 support**.`,
  },
  {
    icon: 'relationships',
    heading: 'Get the team going with online group training',
    body: "Our platform is extremely user-friendly but it's also deep. '6 Peaks in 6 Weeks' is an online guided training course designed to help BeeCastle users upskill and get business results fast.",
  },
];
