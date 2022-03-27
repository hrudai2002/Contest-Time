import { Link } from "react-router-dom";
function Nav() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <header className="header container">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Contest Time
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/codeforces" className="nav-link Codeforces">
              Codeforces
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/codechef" className="nav-link CodeChef">
              CodeChef
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/atcoder" className="nav-link AtCoder">
              AtCoder
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leetcode" className="nav-link LeetCode">
              LeetCode
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hackerearth" className="nav-link Hackerearth">
              Hackerearth
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hackerrank" className="nav-link Hackerrank">
              Hackerrank
            </Link>
          </li>

          <li className="nav-item">
            <a
              href="https://github.com/hrudai2002/Contest-Time"
              className="nav-link"
              target="_blank"
            >
              About
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={openNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="sidenav" id="mySidenav">
          <a href="javascript:void(0)" class="closebtn" onClick= {closeNav}>
            &times;
          </a>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/codeforces" className="nav-link Codeforces">
            Codeforces
          </Link>
          <Link to="/codechef" className="nav-link CodeChef">
            CodeChef
          </Link>
          <Link to="/atcoder" className="nav-link AtCoder">
            AtCoder
          </Link>
          <Link to="/leetcode" className="nav-link LeetCode">
            LeetCode
          </Link>
          <Link to="/hackerearth" className="nav-link Hackerearth">
            Hackerearth
          </Link>
          <Link to="/hackerrank" className="nav-link Hackerrank">
            Hackerrank
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
