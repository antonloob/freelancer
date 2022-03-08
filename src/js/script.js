(function() {
    let btn = document.querySelector(".nav__toggle");
    let nav = document.querySelector(".header__nav");
    let link = document.querySelectorAll(".header__link");
    let header = document.querySelector(".header");
    let unav = document.querySelector(".header__user-nav");

    

    

    btn.addEventListener('click', function() {
        nav.classList.toggle('active');
		for(let item of link) {
            item.classList.toggle('active');
        }
    })

    window.addEventListener("scroll", function() {
        let scroll = window.scrollY;
        if(scroll >= 850) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
    
}())