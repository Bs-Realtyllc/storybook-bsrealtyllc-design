import './BSRealtyKPICard.css'


export interface BSRealtyKPICardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Title */
    title?: string;
    /**Count */
    count?: number | string;
    /**custom classname */
    className?: string;

}

export const BSRealtyKPICard = ({
    title,
    count,
    className = '',
    ...props
}: BSRealtyKPICardProps) => {
    return (
        <div
            {...props}
            className={`bsr-kpi-card ${className}`} >
            <span className='bsr-kpi-card__title'>{title}</span>
            <span className='bsr-kpi-card__count'>{count}</span>

        </div >
    )
}
