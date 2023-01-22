const buttons = document.querySelectorAll(".slider__top > button")
const radioButtons = document.querySelectorAll(".slider__points > input")
let animationDrawing = false

radioButtons.forEach(button =>{
    button.addEventListener("click", () => {
        if(!animationDrawing){
            let newIndex = [...radioButtons].indexOf(button)
        
            const slides = button
            .closest("[data-slider]")
            .querySelector("[data-slides]")
            let current = slides.querySelector("[data-current]")
            const currentIndex = [...slides.children].indexOf(current)
            let newSlide = slides.children[newIndex]
            const offset = newIndex > currentIndex ? 1 : -1

            let pos = 0
            let slideTo = () =>{
                animationDrawing = true
                requestID = requestAnimationFrame(slideTo)
                if (pos < 100){
                    pos+=2
                    current.style.left = -offset*pos +'%'
                    newSlide.style.left = offset*100 - offset*pos +'%'
                }else{
                    cancelAnimationFrame(requestID)
                    animationDrawing = false
                }
            }
            requestAnimationFrame(slideTo)
            newSlide.dataset.current = true
            delete current.dataset.current
        }
    })
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(!animationDrawing){
            const offset = button.matches(".slider__button-right") ? 1 : -1
            const slides = button
            .closest("[data-slider]")
            .querySelector("[data-slides]")
            const current = slides.querySelector("[data-current]")
            
            let newIndex = [...slides.children].indexOf(current) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

        
            const newSlide = slides.children[newIndex]

            let pos = 0
            let slideTo = () =>{
                animationDrawing = true
                requestID = requestAnimationFrame(slideTo)
                if (pos < 100){
                    pos+=2
                    current.style.left = -offset*pos +'%'
                    newSlide.style.left = offset*100 - offset*pos +'%'
                }else{
                    cancelAnimationFrame(requestID)
                    animationDrawing = false
                }
            }    
            requestAnimationFrame(slideTo)
        
            rB = [...radioButtons]
            rB[newIndex].checked = true
            
            newSlide.dataset.current = true
            delete current.dataset.current
        }
    })
})

