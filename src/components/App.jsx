import pkg from '../../package.json';

function App() {
  return (
    <>
      <header className="header">
        <a target="_self" href={pkg.homepage} className="logo header__logo">
          OUTSIDEINSIDEOUT
        </a>
        <nav>
          <ul class="header__links">
            <li class="header__link-container">
              <a href="" class="header__link">
                About me
              </a>
            </li>
            <li class="header__link-container">
              <a href="" class="header__link">
                Portfolio
              </a>
            </li>
            <li class="header__link-container">
              <a href="" class="header__link">
                Contacts
              </a>
            </li>
            <li class="header__link-container">
              <a href="https://calendar.yandex.ru" class="header__link">
                Start project
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
