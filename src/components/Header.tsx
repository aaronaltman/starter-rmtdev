import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <SearchForm />
      </div>
    </header>
  );
}
