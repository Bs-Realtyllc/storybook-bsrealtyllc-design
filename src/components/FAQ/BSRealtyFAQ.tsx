import { useId, useState } from 'react';
import './BSRealtyFAQ.css';
import { ChevronDownIcon } from '../../icons/icons';
import { iconSizeStyle } from '../../icons/iconSize';

export interface BSRealtyFAQProps {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
  /** Whether the FAQ is open by default */
  defaultOpen?: boolean;
    /** Extra class name(s) for the root element, for project-specific styling */
    className?: string;
}

export const BSRealtyFAQ = ({
    className = '',
  question,
  answer,
  defaultOpen = false,
}: BSRealtyFAQProps) => {
  // useState tracks whether the answer is visible or hidden
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const answerId = useId();

  return (
    <div className={`bsr-faq ${className}`}>
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
          <ChevronDownIcon style={iconSizeStyle('lg')} />
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
