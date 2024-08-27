var count = 0;
setInterval(() => {
    const mainMenu = document.getElementById('mainMenu');
    const footerMenu = document.getElementById('footerMenu');

    if (window.innerWidth >= 768) {
        count = 0;
    mainMenu.classList.add('open');
    footerMenu.classList.add('open');
    }
    else{
        count++;
        if(count === 1){
            mainMenu.classList.remove('open');
            footerMenu.classList.remove('open');   
        }
    }
    width = window.innerWidth
}, 500);
function toggleFooterMenu() {
    const arrow = document.getElementById("arrow");
    const footerMenu = document.getElementById('footerMenu');
    if (window.innerWidth <= 768) {
        footerMenu.classList.toggle('open');
        if (arrow.innerHTML.includes('fa-chevron-up')) {
            arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
        } else {
            arrow.innerHTML = '<i class="fas fa-chevron-up"></i>';
        }
    }
}

function toggleMainMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const arrow = document.getElementById("arrow1");
    if (window.innerWidth <= 768) {
        mainMenu.classList.toggle('open');
        if (arrow.innerHTML.includes('fa-chevron-up')) {
            arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
        } else {
            arrow.innerHTML = '<i class="fas fa-chevron-up"></i>';
        }
    }
}

(function() {
    const mainMenu = document.getElementById('mainMenu');
    const footerMenu = document.getElementById('footerMenu');
    if (window.innerWidth >= 768) {
        
    mainMenu.classList.toggle('open');
    footerMenu.classList.toggle('open');
    }
})();
