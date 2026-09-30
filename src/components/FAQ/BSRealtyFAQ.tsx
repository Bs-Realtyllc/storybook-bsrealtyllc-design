import { useId, useState } from 'react';
import './BSRealtyFAQ.css';
import { ChevronDownIcon } from '../../icons/icons';

export interface BSRealtyFAQProps {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
  /** Whether the FAQ is open by default */
  defaultOpen?: boolean;
}

export const BSRealtyFAQ = ({
  question,
  answer,
  defaultOpen = false,
}: BSRealtyFAQProps) => {
  // useState tracks whether the answer is visible or hidden
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const answerId = useId();

  return (
    <div className="bsr-faq">
      {/* Question row — clicking this toggles the answer */}
      <button
        type="button"
        className="bsr-faq__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="bsr-faq__question-text">{question}</span>
        <span className={`bsr-faq__icon ${isOpen ? 'bsr-faq__icon--open' : ''}`} aria-hidden="true">
          <ChevronDownIcon size={20} />
        </span>
      </button>

      {/* Answer row — only rendered when open */}
      {isOpen && (
        <div className="bsr-faq__answer" id={answerId}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
