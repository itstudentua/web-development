function toggleMenu() {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector('#mobile__menu');
    const body = document.querySelector('body');

    const toggleMenuSwithcer = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('hidden');
        menu.classList.toggle('block');
        body.classList.toggle('overflow-hidden')
    };

    burger.addEventListener('click', () => {
        toggleMenuSwithcer();
    });

    menu.addEventListener('click', () => {
        toggleMenuSwithcer();
    });



    window.addEventListener('resize', () => {
        if (window.innerWidth > 525) {
            menu.classList.add('hidden');
            menu.classList.remove('block');
            burger.classList.remove('active');
            body.classList.remove('overflow-hidden');
        }
    })
}

toggleMenu();
