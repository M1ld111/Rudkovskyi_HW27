const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const btns = document.querySelectorAll('.btn');

const slider = document.querySelector('.images');
const sliderArr = [...slider.children];
const last = sliderArr.length - 1;
btns.forEach(button => {
    button.addEventListener('click', () => {
        const typeBnt = button.classList.contains('next')? 1 : -1;
        const visibleImg = slider.querySelector('.visible');
        let i = sliderArr.indexOf(visibleImg)
        let newI = i + typeBnt;

        slider.children[i].classList.toggle('visible');
        slider.children[newI].classList.toggle('visible');

        if (sliderArr[0].classList.contains('visible')) {
            prevBtn.classList.remove('visible')
        } else {
            prevBtn.classList.add('visible')
        }

        if (sliderArr[last].classList.contains('visible')) {
            nextBtn.classList.remove('visible')
        } else {
            nextBtn.classList.add('visible')
        }
    })
    
});