function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Admin
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Menu 1</a>
          </li>
          <li>
            <a href="badges.html">Menu 2</a>
          </li>
          <li>
            <a href="collapsible.html">Menu 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
