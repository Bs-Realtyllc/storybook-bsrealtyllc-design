import { useState } from 'react';
import './BSRealtyTabs.css'

export type TabsVariant = 'default' | 'underline' | 'outline';

export interface BSRealtyTabItem {
    /** Unique tab value */
    value: string;
    /** Tab label */
    label: string;
    /** Optional disabled state */
    disabled?: boolean;
}
export interface BSRealtyTabsProps {
    /**Tabs */
    tabs?: BSRealtyTabItem[];
    /**Current value */
    value?: string;
    /**Tab selected */
    onChange?: (value: string) => void;
    /**tabs Variant */
    variant?: TabsVariant;
    /**custom className */
    className?: string;
    /**Disable all tabs */
    disabled?: boolean;

}
export const BSRealtyTabs = ({
    tabs = [],
    value,
    onChange,
    variant = 'default',
    className = '',
    disabled = false

}: BSRealtyTabsProps) => {
    const [activeTab, setActiveTab] = useState(value || tabs[0]?.value || '');

    const handleTabClick = (tabValue: string) => {
        setActiveTab(tabValue);
        onChange?.(tabValue)
    }
    return (
        <div
            className={`bsr-tabs bsr-tabs--${variant} ${className}`}
            role='tablist'
        >
            {
                tabs?.map((tab) => {
                    const isActive = activeTab === tab.value;
                    return (
                        <button
                            key={tab.value}
                            type='button'
                            role='tab'
                            aria-selected={isActive}
                            disabled={disabled || tab.disabled}
                            className={`bsr-tabs__tab ${isActive ? 'bsr-tabs__tab--active' : ''}`}
                            onClick={() => handleTabClick(tab.value)}
                        >
                            {tab.label}
                        </button>
                    )
                })
            }

        </div>
    )
}
