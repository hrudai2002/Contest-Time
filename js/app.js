const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


document.querySelector('.Codeforces').addEventListener('click', Codeforces);
document.querySelector('.CodeChef').addEventListener('click', CodeChef);
document.querySelector('.AtCoder').addEventListener('click', AtCoder);
document.querySelector('.Google').addEventListener('click', Google);
document.querySelector('.TopCoder').addEventListener('click', TopCoder);
document.querySelector('.Hackerearth').addEventListener('click',Hackerearth);
document.querySelector('.Hackerrank').addEventListener('click', Hackerrank);
document.querySelector('.LeetCode').addEventListener('click', LeetCode);





function Codeforces(e) {
    document.getElementById('loading').style.display = 'block';
    setTimeout(20000);
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/codeforces', true);  
    
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
          let output = '';
          document.getElementById('loading').style.display = 'none';
            response.forEach(function(contest) {
            console.log();
            output += `<div class="card">
                            <h1 class = "Contest-heading">${contest.name}</h1>
                            <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                            <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3><br>
                            <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                            </div>`;
                   
               });
            
           document.querySelector('.output').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}


function CodeChef(e) {
            document.querySelector('.main').innerHTML = '';
            document.querySelector('.output').innerHTML = '';
            document.getElementById('loading').style.display = 'block';
            setTimeout(2000);
            
                let output = '';
                output += `
                <div class="card">
                            <h1 class = "Contest-heading">Codechef Calender</h1><br>
                            <a href="https://www.codechef.com/event-calendar" target = "_blank" class = "btn">Compete Here</a>
                            </div>
                 
                               `;
           document.getElementById('loading').style.display = 'none';
           document.querySelector('.output').innerHTML = output;
     
}


function AtCoder(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/at_coder', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = ''
            document.getElementById('loading').style.display = 'none';
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <br><a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}



function Google(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/kick_start', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            document.getElementById('loading').style.display = 'none';
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                               <br><a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}


function TopCoder(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/top_coder', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            document.getElementById('loading').style.display = 'none';
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <br>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}


function  Hackerearth(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/hacker_earth', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            document.getElementById('loading').style.display = 'none';
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">Challenge : ${contest.type_}</h3><br>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

function  Hackerrank(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/hacker_rank', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            document.getElementById('loading').style.display = 'none';
            let output = '';
            
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">Challenge : ${contest.type_}</h3><br>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

function LeetCode(e) {
    document.querySelector('.main').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
   
    document.getElementById('loading').style.display = 'block';
    setTimeout(2000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://kontests.net/api/v1/leet_code', true);  
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            document.getElementById('loading').style.display = 'none';
           response.forEach(function(contest) {
                console.log();
                output += `<div class="card">
                                <h1 class = "Contest-heading">${contest.name}</h1>
                                <h3 class = "Contest-text">Start Time : ${contest.start_time.slice(0, 10) + ' ' + contest.start_time.slice(11, 19)}</h3>
                                <h3 class = "Contest-text">End Time   : ${contest.end_time.slice(0, 10) + ' ' + contest.end_time.slice(11, 19)}</h3>
                                <br>
                                <a href="${contest.url}" target = "_blank" class = "btn">Compete Here</a>
                               </div>
                               `;
               
           });
           document.querySelector('.output').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}




