interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="p-3 border">
      <h3>{title}</h3>
    </header>
  );
}
