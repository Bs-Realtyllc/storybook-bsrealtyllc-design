import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Replace the Storybook icon with your logo
    brandImage: '/Primary_Logo.png',
    brandTitle: 'BS Realty LLC',
    brandUrl: 'https://bsrealtyllc.com/',   // clicking the logo goes here

    // Optional: match your brand colors
    colorPrimary: '#1e3a5f',
    colorSecondary: '#1e3a5f',
  }),
});
