import React from "react";
import { useEffect, useState } from "react";
const Leetcode = (leetcode) => {
   let contests = leetcode.leetcode;
   function upcontest() {
     for (let i = 0; i < contests.length; ++i) {
       if (contests[i].status === "CODING") {
          return true;
       }
     }
     return false;
   }
   return (
     <div className="container">
       {upcontest() && <h1 className="ongoing-contest">Ongoing Contests</h1>}
       <div className="contests">
         {upcontest() &&
           contests.map((contest) => {
             if (contest.status === "CODING") {
               return (
                 <div className="card">
                   <h1 className="Contest-heading">{contest.name}</h1>
                   <h3 className="Contest-text">Start Time :</h3>
                   <h3 className="Contest-text">
                     {contest.start_time.slice(0, 10) +
                       " " +
                       contest.start_time.slice(11, 19) 
                      }
                   </h3>
                   <h3 className="Contest-text">End Time :</h3>
                   <h3 className="Contest-text">
                     {contest.end_time.slice(0, 10) +
                       " " +
                       contest.end_time.slice(11, 19)}
                   </h3>
                   <div className="contestbutton">
                     <button className="btn">
                       <a href={contest.url}>Compete Here</a>
                     </button>
                   </div>
                 </div>
               );
             }
           })}
       </div>
       <h1 className="upcoming-contest">Upcoming Contests</h1>
       <div className="contests">
         {contests.map((contest) => {
           if (contest.status === "BEFORE") {
             return (
               <div className="card">
                 <h1 className="Contest-heading">{contest.name}</h1>
                 <h3 className="Contest-text">Start Time :</h3>
                 <h3 className="Contest-text">
                   {contest.start_time.slice(0, 10) +
                     " " +
                     contest.start_time.slice(11, 19) 
                     }
                 </h3>
                 <h3 className="Contest-text">End Time :</h3>
                 <h3 className="Contest-text">
                   {contest.end_time.slice(0, 10) +
                     " " +
                     contest.end_time.slice(11, 19)}
                 </h3>
                 <div className="contestbutton">
                   <button className="btn">
                     <a href={contest.url}>Compete Here</a>
                   </button>
                 </div>
               </div>
             );
           }
         })}
       </div>
     </div>
   );
};

export default Leetcode;
