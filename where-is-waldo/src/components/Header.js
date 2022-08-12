import '../styles/Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header'>
      <Link id="headingWrapper" to="/">
        <h1 id='heading'>Where's Waldo</h1>
      </Link>
    </div>
  );
}

export default Header;