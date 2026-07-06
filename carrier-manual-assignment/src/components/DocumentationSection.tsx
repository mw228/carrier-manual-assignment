type DocumentationSectionProps = {
  children: React.ReactNode;
};

function DocumentationSection({ children }: DocumentationSectionProps) {
  return <section className="row documentation-section">{children}</section>;
}

export default DocumentationSection;
