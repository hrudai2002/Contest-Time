import { Link } from "react-router-dom";
function Main() {
  return (
    <>
      <div className="main">
        <div className="home container">
          <div className="home-left">
            <img
              className="code"
              src="https://media.giphy.com/media/paTz7UZbPfTZFRYnnB/giphy.gif"
              alt=""
            />
          </div>
          <div className="home-right">
            <h1>Contest Time</h1>

            <p className="matter">
              Competitive programming is like a sport. Where there are many
              people who try to compete with one another. Competitive
              programming is really helpful in the logic building. Problem
              Solving Skills will be developed more when we are trying to solve
              some complex problems.
            </p>
            <button className="btn">
              <Link to="/codechef">Explore</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>Designed and Developed for all the CP❣️Lovers</footer>
      </div>
    </>
  );
}
export default Main;
