function navigateTo(pageId, bgImage){
    let background = document.querySelector('.background');
    let activePage = document.querySelector('.page.active');
    let newPage = document.getElementById(pageId);
    let pages = document.querySelectorAll('.page-container');

    if(activePage === newPage) return;
    if(activePage){
        activePage.classList.remove('active');
        setTimeout(() => {
            activePage.style.display = "none";
        }, 500);
    }
    if(newPage){
        newPage.style.display = "flex";
        setTimeout(() => {
            newPage.classList.add('active');
        }, 500);
    }
    background.style.opacity = "0";
    setTimeout(() => {
        background.src = bgImage;
        background.style.opacity = "1";
    }, 500);
}