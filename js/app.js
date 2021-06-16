document.querySelector('.Codeforces').addEventListener('click', Codeforces);
document.querySelector('.CodeChef').addEventListener('click', CodeChef);
document.querySelector('.AtCoder').addEventListener('click', AtCoder);
document.querySelector('.Google').addEventListener('click', Google);
document.querySelector('.TopCoder').addEventListener('click', TopCoder);
document.querySelector('.Hackerearth').addEventListener('click', Hackerearth);
document.querySelector('.Hackerrank').addEventListener('click', Hackerrank);
document.querySelector('.LeetCode').addEventListener('click', LeetCode);


function Codeforces(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/codeforces', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            response.forEach(function(contest) {
                
            output += `<div class="card">
                            <h1 class = "Contest-heading">${contest.name}</h1>
                            <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                            <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                            <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                            </div>
                            <br>
                           
                            `;
                   
               });
            
           
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}


function CodeChef(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/code_chef', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}


function AtCoder(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/at_coder', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

function Google(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/kick_start', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                               <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
function TopCoder(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/top_coder', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
function  Hackerearth(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/hacker_earth', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">Challenge : ${contest.type_}</h3>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
function  Hackerrank(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/hacker_rank', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">Challenge : ${contest.type_}</h3>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
function LeetCode(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/leet_code', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               <br>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
