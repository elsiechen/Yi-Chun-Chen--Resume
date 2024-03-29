document.addEventListener('DOMContentLoaded', function(){
    let toggle = document.querySelector('#toggle');
    // Mouseover event on toggle button
    toggle.addEventListener('mouseover', function(){
        if(toggle.innerHTML == 'Toggle Dark Mode'){
            toggle.style.backgroundColor = 'black';
        } else {
            toggle.style.backgroundColor = 'white';
            toggle.style.color = 'black';
            toggle.style.borderColor = 'black';
        }
    });
    // Mouseleave event on toggle button
    toggle.addEventListener('mouseleave', function(){
        toggle.style.backgroundColor = '#002e6a';
        toggle.style.color = 'white';
        toggle.style.borderColor = 'white';
    });

    // Mouse click event on toggle button
    let container = document.querySelector('.container');
    let profile = document.querySelector('#profile');
    let work = document.querySelector('#work');
    let education = document.querySelector('#education');
    let skills = document.querySelector('.skills_container');
    let certificate = document.querySelector('#certificate');
    toggle.addEventListener('click', function(){
        if(toggle.innerHTML == 'Toggle Dark Mode'){
            container.style.color = 'white';
            profile.style.backgroundColor = 'black';
            education.style.backgroundColor = 'black';
            certificate.style.backgroundColor = 'black';
            work.style.backgroundColor = 'black';
            skills.style.backgroundColor = 'black';
            toggle.innerHTML = 'Toggle Light Mode';
        } else {
            container.style.color = 'black';
            profile.style.backgroundColor = 'white';
            education.style.backgroundColor = 'white';
            certificate.style.backgroundColor = 'white';
            work.style.backgroundColor = '#f5f8fd';
            skills.style.backgroundColor = '#f5f8fd';
            toggle.innerHTML = 'Toggle Dark Mode';

        }
        toggle.style.color = 'white';
        toggle.style.backgroundColor = '002e6a';
    });

    // Menu button in mobile view
    let menuBtn = document.querySelector('.menuBtn');
    let nav = document.querySelector('.nav');
    
    menuBtn.addEventListener('click', function(){
        if(menuBtn.innerHTML == '☰'){
            nav.style.display = 'block';
            menuBtn.innerHTML = '⨉';
            nav.style.position = 'fixed';
            
        }else{
            nav.style.display = 'none';
            menuBtn.innerHTML = '☰';
            
        }
    });

    
});

// Show nav if resize browser window in mobile view,
    // open and close menuBtn, then broaden window,
    // which makes nav hidden in broaden window
    function showNav(){
        let w = window.outerWidth;
        let nav = document.querySelector('.nav');
        if (w > 540 && nav.style.display == 'none'){
            nav.style.display = 'block';
            console.log(w);
        }
    }