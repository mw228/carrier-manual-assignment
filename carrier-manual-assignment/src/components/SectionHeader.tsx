type SectionHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <header>
      <h2>{title}</h2>
      {children}
    </header>
  );
}

export default SectionHeader;
