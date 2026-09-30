import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import './BSRealtyTabs.css'

// Only 'default' is designed so far; add variants here once they exist in Figma
export type TabsVariant = 'default';

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
    /**Selected tab. When set, the component is controlled and follows this value. */
    value?: string;
    /**Initially selected tab when uncontrolled */
    defaultValue?: string;
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
    defaultValue,
    onChange,
    variant = 'default',
    className = '',
    disabled = false

}: BSRealtyTabsProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.value ?? '');
    const activeTab = value ?? internalValue;
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const isTabDisabled = (tab: BSRealtyTabItem) => disabled || !!tab.disabled;

    const selectTab = (tabValue: string) => {
        if (value === undefined) setInternalValue(tabValue);
        onChange?.(tabValue)
    }

    // Arrow keys / Home / End move between enabled tabs and select them
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const enabled = tabs
            .map((tab, i) => ({ tab, i }))
            .filter(({ tab }) => !isTabDisabled(tab));
        if (enabled.length === 0) return;

        const pos = enabled.findIndex(({ i }) => i === index);
        let next: number;
        switch (event.key) {
            case 'ArrowRight':
                next = (pos + 1) % enabled.length;
                break;
            case 'ArrowLeft':
                next = (pos - 1 + enabled.length) % enabled.length;
                break;
            case 'Home':
                next = 0;
                break;
            case 'End':
                next = enabled.length - 1;
                break;
            default:
                return;
        }
        event.preventDefault();
        const { tab, i } = enabled[next];
        tabRefs.current[i]?.focus();
        selectTab(tab.value);
    }

    // Roving tabindex: only the selected tab (or the first enabled one) is in the Tab order
    const focusableValue = tabs.some((tab) => tab.value === activeTab && !isTabDisabled(tab))
        ? activeTab
        : tabs.find((tab) => !isTabDisabled(tab))?.value;

    return (
        <div
            className={`bsr-tabs bsr-tabs--${variant} ${className}`}
            role='tablist'
        >
            {
                tabs.map((tab, index) => {
                    const isActive = activeTab === tab.value;
                    return (
                        <button
                            key={tab.value}
                            ref={(el) => { tabRefs.current[index] = el; }}
                            type='button'
                            role='tab'
                            aria-selected={isActive}
                            tabIndex={tab.value === focusableValue ? 0 : -1}
                            disabled={isTabDisabled(tab)}
                            className={`bsr-tabs__tab ${isActive ? 'bsr-tabs__tab--active' : ''}`}
                            onClick={() => selectTab(tab.value)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                        >
                            {tab.label}
                        </button>
                    )
                })
            }

        </div>
    )
}
