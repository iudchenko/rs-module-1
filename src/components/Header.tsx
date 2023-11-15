interface IHeaderProps {
  children: React.ReactNode;
}

function Header({ children }: IHeaderProps) {
  return (
    <header className="flex w-full items-end max-w-xl mx-auto gap-5">
      {children}
    </header>
  );
}

export default Header;
