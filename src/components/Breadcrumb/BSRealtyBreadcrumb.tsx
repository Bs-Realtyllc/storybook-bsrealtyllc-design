import "./BSRealtyBreadcrumb.css";

export interface BSRealtyBreadcrumbItem {
    label: string,
    href?: string,
    active?: boolean
}

export interface BSRealtyBreadcrumbProps {
    /**options */
    items: BSRealtyBreadcrumbItem[];
    separator?: string;
    testId?: string;

}

export const BSRealtyBreadcrumb = ({
    items,
    separator = '/',
    testId
}: BSRealtyBreadcrumbProps) => {
    return (
        <nav className="bsr-breadcrumb" data-testid={testId}>
            <ol className="bsr-breadcrumb_list">
                {
                    items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        const isActive = item.active || isLast;
                        return (
                            <li key={index} className={`bsr-breadcrumb_item ${isActive ? "bsr-breadcrumb_item--active" : ""}`}>{
                                isActive ? (
                                    <span>
                                        {item.label}
                                    </span>
                                ) : item.href ? (<a href={item.href}>{item.label}</a>) : (<span>{item.label}</span>)
                            }
                                {!isLast && (
                                    <span
                                        className="bsr-breadcrumb_separator"
                                        aria-hidden="true"
                                    >
                                        {separator}
                                    </span>
                                )}
                            </li>)
                    })
                }

            </ol>
        </nav>
    )
}