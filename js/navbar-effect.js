window.onscroll = (e) => {
    const scroll = window.scrollY;

    const header = document.querySelector('#nav-alternative')

    if(scroll > 100) {
        header.classList.add('bgcolor');
    }

    else{
        header.classList.remove('bgcolor');
    }
}
