import pkg from '../../../package.json';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <a target="_self" href={pkg.homepage} className="logo header__logo">
        OUTSIDEINSIDEOUT
      </a>
      <nav>
        <ul className="header__links">
          <li className="header__link-container">
            <a href="/about" className="header__link">
              About me
            </a>
          </li>
          <li className="header__link-container">
            <a href="/portfolio" className="header__link">
              Portfolio
            </a>
          </li>
          <li className="header__link-container">
            <a href="/contacts" className="header__link">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <a href="https://calendar.yandex.ru" className="header__link">
        Start project
      </a>
    </header>
  );
}
