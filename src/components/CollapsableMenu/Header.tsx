export default function Header({ menuTitle, children }: HeaderProps) {
  return (
    <div className="flex uppercase text-xs ml-5 mr-3 my-2 select-none items-center justify-between">
      <h1>{menuTitle}</h1>
      <div className="flex">{children}</div>
    </div>
  );
}

/* Types */
interface HeaderProps {
  menuTitle: string;
  children: React.ReactNode;
}
