import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">🍕</a>
        </li>
        <li>
          <a href="#portfolio">🥙</a>
        </li>
        <li>
          <a href="#contact">🥟</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
