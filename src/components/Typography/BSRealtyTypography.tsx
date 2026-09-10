import React from 'react';
import './BSRealtyTypography.css';

export interface BSRealtyTypographyProps {
  /** Show only specific category */
  category?: 'all' | 'display' | 'headline' | 'title' | 'body' | 'label' | 'figma' | 'colors';
  /** Background theme */
  theme?: 'light' | 'dark';
  /** Sample text to display */
  sampleText?: string;
}

export const BSRealtyTypography: React.FC<BSRealtyTypographyProps> = ({
  category = 'all',
  theme = 'light',
  sampleText = 'The quick brown fox jumps over the lazy dog'
}) => {
  
  const TypographySample = ({ className, label, specs, text = sampleText }: {
    className: string;
    label: string;
    specs: string;
    text?: string;
  }) => (
    <div className="typography-sample">
      <div className="typography-label">{label}</div>
      <div className={`bs-typography ${className}`}>{text}</div>
      <div className="typography-specs">{specs}</div>
    </div>
  );

  const ColorSample = ({ className, label, description }: {
    className: string;
    label: string;
    description: string;
  }) => (
    <div className="color-sample">
      <div className="typography-label">{label}</div>
      <div className={`text-headline-medium ${className}`}>Sample Text</div>
      <div className="typography-specs">{description}</div>
    </div>
  );

  return (
    <div className={`typography-showcase ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
      
      {/* Display Styles */}
      {(category === 'all' || category === 'display') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Display Styles</h2>
          <p className="text-body-medium text-muted mb-6">Large scale text for hero sections and marketing displays</p>
          
          <TypographySample 
            className="text-display-large"
            label="Display Large"
            specs="Lato • 64px • Regular • 72px line height"
            text="Your Dream Home Awaits"
          />
          
          <TypographySample 
            className="text-display-medium"
            label="Display Medium"
            specs="Lato • 48px • Regular • 56px line height"
            text="Premium Real Estate Services"
          />
          
          <TypographySample 
            className="text-display-small"
            label="Display Small"
            specs="Lato • 40px • Regular • 48px line height"
            text="Find Your Perfect Property"
          />
        </div>
      )}

      {/* Headline Styles */}
      {(category === 'all' || category === 'headline') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Headline Styles</h2>
          <p className="text-body-medium text-muted mb-6">Section headers, page titles, and major content divisions</p>
          
          <TypographySample 
            className="text-headline-large"
            label="Headline Large"
            specs="Lato • 32px • Regular • 40px line height"
            text="Featured Properties"
          />
          
          <TypographySample 
            className="text-headline-medium"
            label="Headline Medium"
            specs="Lato • 28px • Regular • 36px line height"
            text="Market Insights & Analysis"
          />
          
          <TypographySample 
            className="text-headline-small"
            label="Headline Small"
            specs="Lato • 24px • Regular • 32px line height"
            text="Client Testimonials"
          />
        </div>
      )}

      {/* Title Styles */}
      {(category === 'all' || category === 'title') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Title Styles</h2>
          <p className="text-body-medium text-muted mb-6">Card headers, subsection titles, and content organization</p>
          
          <TypographySample 
            className="text-title-large"
            label="Title Large"
            specs="Lato • 22px • Regular • 28px line height"
            text="Luxury Waterfront Villa"
          />
          
          <TypographySample 
            className="text-title-medium"
            label="Title Medium"
            specs="Lato • 16px • Regular • 24px line height"
            text="Downtown Executive Suite"
          />
          
          <TypographySample 
            className="text-title-small"
            label="Title Small"
            specs="Lato • 14px • Regular • 20px line height"
            text="Cozy Family Home"
          />
        </div>
      )}

      {/* Body Styles */}
      {(category === 'all' || category === 'body') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Body Styles</h2>
          <p className="text-body-medium text-muted mb-6">Main content, paragraphs, and reading text</p>
          
          <TypographySample 
            className="text-body-large"
            label="Body Large"
            specs="Lato • 16px • Regular • 24px line height"
            text="This stunning waterfront property offers breathtaking views and luxurious amenities. Perfect for those seeking an exceptional lifestyle with modern conveniences and timeless elegance."
          />
          
          <TypographySample 
            className="text-body-medium"
            label="Body Medium"
            specs="Lato • 14px • Regular • 20px line height"
            text="Located in the heart of downtown, this executive suite provides easy access to business districts, fine dining, and entertainment venues. Ideal for professionals and investors."
          />
          
          <TypographySample 
            className="text-body-small"
            label="Body Small"
            specs="Lato • 12px • Regular • 16px line height"
            text="Additional information about property features, neighborhood amenities, and local schools. Terms and conditions apply to all listings."
          />
        </div>
      )}

      {/* Label Styles */}
      {(category === 'all' || category === 'label') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Label Styles</h2>
          <p className="text-body-medium text-muted mb-6">UI labels, buttons, form elements, and interface text</p>
          
          <TypographySample 
            className="text-label-large"
            label="Label Large"
            specs="Lato • 14px • Medium • 20px line height"
            text="SCHEDULE VIEWING"
          />
          
          <TypographySample 
            className="text-label-medium"
            label="Label Medium"
            specs="Lato • 12px • Medium • 16px line height"
            text="Contact Agent"
          />
          
          <TypographySample 
            className="text-label-small"
            label="Label Small"
            specs="Lato • 11px • Medium • 16px line height"
            text="Price Range"
          />
        </div>
      )}

      {/* Custom 1.25 Scale System */}
      {(category === 'all' || category === 'figma') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Custom 1.25 Scale System</h2>
          <p className="text-body-medium text-muted mb-6">Mathematical typography scale • Base: 16px • Ratio: 1.25 (Major Third)</p>
          
          <div className="typography-grid">
            <TypographySample 
              className="text-figma-9xl"
              label="9XL"
              specs="61px • 3.813rem • Scale^6"
            />
            
            <TypographySample 
              className="text-figma-8xl"
              label="8XL"
              specs="49px • 3.063rem • Scale^5"
            />
            
            <TypographySample 
              className="text-figma-7xl"
              label="7XL"
              specs="39px • 2.438rem • Scale^4"
            />
            
            <TypographySample 
              className="text-figma-6xl"
              label="6XL"
              specs="31px • 1.938rem • Scale^3"
            />
            
            <TypographySample 
              className="text-figma-5xl"
              label="5XL"
              specs="25px • 1.563rem • Scale^2"
            />
            
            <TypographySample 
              className="text-figma-4xl"
              label="4XL"
              specs="20px • 1.250rem • Scale^1"
            />
            
            <TypographySample 
              className="text-figma-base"
              label="Base"
              specs="16px • 1.000rem • Base"
            />
            
            <TypographySample 
              className="text-figma-sm"
              label="Small"
              specs="13px • 0.813rem • Scale^-1"
            />
            
            <TypographySample 
              className="text-figma-xs"
              label="XSmall"
              specs="10px • 0.625rem • Scale^-2"
            />
          </div>
        </div>
      )}

      {/* Color Variants */}
      {(category === 'all' || category === 'colors') && (
        <div className="typography-category">
          <h2 className="typography-category-title">Text Colors</h2>
          <p className="text-body-medium text-muted mb-6">Semantic color variants for content hierarchy and branding</p>
          
          <div className="color-grid">
            <ColorSample 
              className="text-primary"
              label="Primary Text"
              description="Main content and headings • #111827"
            />
            
            <ColorSample 
              className="text-secondary"
              label="Secondary Text"
              description="Supporting content • #4b5563"
            />
            
            <ColorSample 
              className="text-muted"
              label="Muted Text"
              description="Captions and metadata • #6b7280"
            />
            
            <ColorSample 
              className="text-brand"
              label="Brand Color"
              description="BS Realty brand elements • #1E3A5F"
            />
            
            <ColorSample 
              className="text-accent"
              label="Accent Color"
              description="Highlights and CTAs • #c9a24d"
            />
            
            <ColorSample 
              className="text-disabled"
              label="Disabled Text"
              description="Inactive elements • #9ca3af"
            />
          </div>
        </div>
      )}

      {/* Usage Examples */}
      {category === 'all' && (
        <div className="typography-category">
          <h2 className="typography-category-title">Real Estate Examples</h2>
          <p className="text-body-medium text-muted mb-6">Typography in context for real estate applications</p>
          
          {/* Property Card Example */}
          <div className="typography-sample">
            <div className="typography-label">Property Listing Card</div>
            <div className="space-y-3">
              <h3 className="text-title-large text-primary font-medium">Luxury Downtown Penthouse</h3>
              <p className="text-body-medium text-secondary">Experience urban living at its finest in this stunning 3-bedroom penthouse featuring panoramic city views, premium finishes, and exclusive rooftop access.</p>
              <div className="flex items-center justify-between">
                <span className="text-headline-small text-brand font-bold">$2,450,000</span>
                <button className="text-label-large text-accent font-medium">View Details</button>
              </div>
              <div className="text-body-small text-muted">Listed by Sarah Johnson, BS Realty • 3 beds • 2.5 baths • 2,400 sq ft</div>
            </div>
          </div>

          {/* Marketing Section Example */}
          <div className="typography-sample">
            <div className="typography-label">Marketing Section</div>
            <div className="space-y-4">
              <h2 className="text-display-medium text-brand">Your Trusted Real Estate Partner</h2>
              <p className="text-body-large text-secondary">With over 20 years of experience in the local market, BS Realty has helped thousands of families find their dream homes. Our expert team provides personalized service and deep market knowledge to ensure your real estate journey is smooth and successful.</p>
              <div className="flex space-x-4">
                <button className="text-label-large text-white bg-brand font-medium px-6 py-3 rounded">Get Started Today</button>
                <button className="text-label-large text-brand border border-brand font-medium px-6 py-3 rounded">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BSRealtyTypography;