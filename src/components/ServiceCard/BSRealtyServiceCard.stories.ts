import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyServiceCard } from './BSRealtyServiceCard';

const meta = {
  title: 'Components/ServiceCard',
  component: BSRealtyServiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    number: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof BSRealtyServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MortgageAssistance: Story = {
  args: {
    number: '01',
    title: 'Mortgage Assistance',
    description:
      'Get guidance on home financing and connect with trusted lenders to secure the best mortgage options.',
  },
};

export const PropertySearch: Story = {
  args: {
    number: '02',
    title: 'Property Search',
    description:
      'Browse thousands of verified listings and find the perfect home that fits your lifestyle and budget.',
  },
};

export const LegalSupport: Story = {
  args: {
    number: '03',
    title: 'Legal Support',
    description:
      'Our legal experts handle all documentation and compliance requirements so you can buy with confidence.',
  },
};

export const InvestmentAdvisory: Story = {
  args: {
    number: '04',
    title: 'Investment Advisory',
    description:
      'Maximise your real estate returns with personalised investment strategies from our experienced advisors.',
  },
};
