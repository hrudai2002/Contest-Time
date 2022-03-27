import "./index.css";
import { useEffect, useState } from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Codeforces from "./pages/codeforces";
import Codechef from "./pages/codechef";
import Atcoder from "./pages/atcoder";
import Leetcode from "./pages/leetcode";
import Hackerearth from "./pages/hackerearth";
import Hackerrank from "./pages/hackerrank";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 
  const [codechef, setCodeChef] = useState([]);
  const [codeforces, setCodeForces] = useState([]);
  const [atcoder, setAtCoder] = useState([]);
  const [leetcode, setLeetCode] = useState([]);
  const [hackerearth, setHackerEarth] = useState([]);
  const [hackerrank, setHackerRank] = useState([]);

  const codeChef = async () => {
    const res = await fetch("https://kontests.net/api/v1/code_chef");
    const data = await res.json();
    setCodeChef(data);
  };
  const codeForces = async () => {
    const res = await fetch("https://kontests.net/api/v1/codeforces");
    const data = await res.json();
    setCodeForces(data);
  };
  const atCoder = async () => {
    const res = await fetch("https://kontests.net/api/v1/at_coder");
    const data = await res.json();
    setAtCoder(data);
  };
  const leetCode = async () => {
    const res = await fetch("https://kontests.net/api/v1/leet_code");
    const data = await res.json();
    setLeetCode(data);
  };
  const hackerEarth = async () => {
    const res = await fetch("https://kontests.net/api/v1/hacker_earth");
    const data = await res.json();
    setHackerEarth(data);
  };
  const hackerRank = async () => {
    const res = await fetch("https://kontests.net/api/v1/hacker_rank");
    const data = await res.json();
    setHackerRank(data);
  };

  useEffect(() => {
    codeChef();
    codeForces();
    atCoder();
    leetCode();
    hackerEarth();
    hackerRank();
  }, []);
  console.log(codeforces[0]);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/codeforces" element={<Codeforces codeforces = {codeforces}/>}></Route>
          <Route path="/codechef" element={<Codechef codechef = {codechef} />}></Route>
          <Route path="/atcoder" element={<Atcoder atcoder = {atcoder} />}></Route>
          <Route path="/leetcode" element={<Leetcode leetcode = {leetcode} />}></Route>
          <Route path="/hackerearth" element={<Hackerearth hackerearth = {hackerearth} />}></Route>
          <Route path="/hackerrank" element={<Hackerrank hackerrank = {hackerrank} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
