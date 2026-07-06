interface AccordionSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function AccordionSection({ id, title, children }: AccordionSectionProps) {
  return (
    <div className="accordion mb-4" id={`${id}-accordion`}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
          >
            {title}
          </button>
        </h2>

        <div id={id} className="accordion-collapse collapse" data-bs-parent={`#${id}-accordion`}>
          <div className="accordion-body row">{children}</div>
        </div>
      </div>
    </div>
  );
}
