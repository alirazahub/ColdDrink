let sliderIndex = 1;
let slider = document.getElementById('slider');
let slides = slider.getElementsByClassName('slides');
let slideControl = document.getElementById('slide-control')
let slideControlItem = document.
   getElementsByClassName('slide-control-item')

slider.style.marginTop = '-' + sliderIndex + '00vh'
slideControlItem[sliderIndex].classList.add('active')

chooseProduct = (index) =>{
    if(index === sliderIndex) return

    sliderIndex = index

    // let currentSlideControl = slideControl.querySelector('.slide-control-item.active')
    // currentSlideControl.classList.remove('active')
    // let currSlide = slider.querySelector('.slide.active')
    // currSlide.classList.remove('active')

    slider.style.marginTop = '-' + sliderIndex + '00vh'
    slideControlItem[sliderIndex].classList.add('active')
}

Array.from(slideControlItem).forEach((el,index) =>{
    el.onclick = function(){
        chooseProduct(index)
    }
})