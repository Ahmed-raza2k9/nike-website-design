let main = document.querySelector('.main-website-content');
let skeleton = document.querySelector('.skeleton-container');

window.addEventListener('load', () => {
    setTimeout(() => {
        skeleton.style.display = 'none';
        main.style.display = 'block';
    }, 2000);
})

let jacketBtns = document.querySelectorAll('.size-circle');
let heroImg = document.getElementById('hero-img');
let orangeBg = 'radial-gradient(circle at 50% 50%, rgb(250, 127, 70) 0%, rgb(237, 93, 9) 55%, rgb(200, 75, 4) 100%)';
let blackBg = 'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 0%, rgb(26, 25, 25) 55%, rgb(0, 0, 0) 100%)';
let whiteBg = 'radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 0%, rgb(214, 212, 212) 55%, rgb(255, 255, 255) 100%)';
let nikeWordmark = document.querySelector('.nike-wordmark');
let qt = document.querySelector('.qt');
let nikeIcon = document.querySelector('.nike-swoosh-icon');
let allText = document.querySelectorAll('.text-all');
let watermarkbg = document.querySelector('.watermark-bg');
jacketBtns.forEach(item => {
    item.addEventListener('click', () => {
        jacketBtns.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
        let image = item.firstElementChild;
        let imagePath = image.getAttribute('src');
        heroImg.src = imagePath;
        console.log(imagePath);
        if (imagePath.includes('orange')) {
            document.body.style.background = orangeBg;
            nikeWordmark.style.color = 'white';
            nikeIcon.style.fill = 'white';
            allText.forEach(i => {
                i.style.color = 'white';
            })
            qt.style.background = 'rgba(255, 255, 255, 0.12)'
        }
        else if (imagePath.includes('black')) {
            document.body.style.background = blackBg;
            nikeWordmark.style.color = 'white';
            nikeIcon.style.fill = 'white';
            allText.forEach(i => {
                i.style.color = 'white';
            })
            watermarkbg.style.color = 'rgba(61, 59, 59, 0.7)';
            qt.style.background = 'rgba(255, 255, 255, 0.12)'



        }
        else {
            document.body.style.background = whiteBg;
            nikeWordmark.style.color = 'black';
            nikeIcon.style.fill = 'black';
            allText.forEach(i => {
                i.style.color = 'rgba(0, 0, 0, 0.7)';
            });
            qt.style.background = 'rgba(0, 0, 0, 0.12)';


        }

    });
});