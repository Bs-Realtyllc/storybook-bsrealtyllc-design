
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyKPICard } from './BSRealtyKPICard';
const meta = {
    title: 'Components/KPICard',
    component: BSRealtyKPICard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text', description: 'Title for kpi card'
        },
        count: {
            control: 'number', description: 'Count for kpi card'
        },


    },
} satisfies Meta<typeof BSRealtyKPICard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Total Employee',
        count: 10,
    }
}
