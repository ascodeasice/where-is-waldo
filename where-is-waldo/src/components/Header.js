import Github from '../assets/github.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <div id='header'>
      <a id="headingWrapper" href='https://github.com/ascodeasice/where-is-waldo'>
        <img id='githubIcon' src={Github} alt='' />
        <h1 id='heading'>Where's Waldo</h1>
      </a>
    </div>
  );
}

export default Header;