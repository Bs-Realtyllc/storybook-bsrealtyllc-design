import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyTypography } from './BSRealtyTypography';

const meta = {
  title: 'Components/Typography',
  component: BSRealtyTypography,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['all', 'display', 'headline', 'title', 'body', 'label', 'figma', 'colors'],
      description: 'Typography category to display',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Visual theme',
    },
    sampleText: { 
      control: 'text',
      description: 'Custom sample text to display'
    },
  },
} satisfies Meta<typeof BSRealtyTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Complete System ──────────────────────────────────────────────

/** Complete System — All typography styles and scales */
export const AllStyles: Story = {
  args: {
    category: 'all',
    theme: 'light',
  },
};

/** Dark Theme — Complete system on dark background */
export const DarkTheme: Story = {
  args: {
    category: 'all',
    theme: 'dark',
  },
};

// ── Material Design 3 Categories ─────────────────────────────────

/** Display Styles — Large hero and campaign text */
export const DisplayStyles: Story = {
  args: {
    category: 'display',
    sampleText: 'Find Your Dream Home',
  },
};

/** Headlines — Section headers and page titles */
export const Headlines: Story = {
  args: {
    category: 'headline',
    sampleText: 'Luxury Real Estate Services',
  },
};

/** Titles — Card headers and subsections */
export const Titles: Story = {
  args: {
    category: 'title',
    sampleText: 'Featured Properties',
  },
};

/** Body Text — Main content and descriptions */
export const BodyText: Story = {
  args: {
    category: 'body',
    sampleText: 'Experience luxury living in this beautifully appointed home featuring modern amenities and stunning city views.',
  },
};

/** Labels — UI elements and buttons */
export const Labels: Story = {
  args: {
    category: 'label',
    sampleText: 'View Details',
  },
};

// ── Custom Figma Scale ───────────────────────────────────────────

/** Custom 1.25 Scale — Mathematical typography scale from Figma */
export const FigmaScale: Story = {
  args: {
    category: 'figma',
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
};

/** Figma Scale - Real Estate Copy */
export const FigmaRealEstate: Story = {
  args: {
    category: 'figma',
    sampleText: 'Premium Downtown Penthouse Available',
  },
};

// ── Colors ────────────────────────────────────────────────────────

/** Text Colors — Semantic color variants */
export const TextColors: Story = {
  args: {
    category: 'colors',
  },
};

// ── Interactive Examples ─────────────────────────────────────────

/** Custom Sample Text — Test with your own content */
export const CustomText: Story = {
  args: {
    category: 'headline',
    sampleText: 'BS Realty - Your Trusted Partner',
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <BSRealtyTypography {...args} />
    </div>
  ),
};

/** Comparative View — Side by side Material Design vs Custom Scale */
export const ComparativeView: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      padding: '2rem'
    }}>
      <div>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
          Material Design 3 System
        </h2>
        <BSRealtyTypography 
          category="headline" 
          sampleText="Structured Design System" 
        />
      </div>
      
      <div>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
          Custom 1.25 Scale
        </h2>
        <BSRealtyTypography 
          category="figma" 
          sampleText="Mathematical Typography Scale" 
        />
      </div>
    </div>
  ),
};