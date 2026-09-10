import './BSRealtyServiceCard.css';

export interface BSRealtyServiceCardProps {
  /** Service number/index label e.g. "01", "02" */
  number: string;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
}

export const BSRealtyServiceCard = ({
  number = '01',
  title = 'Mortgage Assistance',
  description = 'Get guidance on home financing and connect with trusted lenders to secure the best mortgage options.',
}: BSRealtyServiceCardProps) => {
  return (
    <div className="bsr-service-card">
      {/* Number badge */}
      <div className="bsr-service-card__badge">
        <span className="bsr-service-card__number">{number}</span>
      </div>

      {/* Text content */}
      <div className="bsr-service-card__body">
        <h3 className="bsr-service-card__title">{title}</h3>
        <p className="bsr-service-card__description">{description}</p>
      </div>
    </div>
  );
};
