const images = ['😁','😁','😂','😂','😍','😍','😈','😈','❤️','❤️','💋','💋','🖐️','🖐️','😘','😘']

const sortImages = images.sort(()=> (Math.random() > .5) ? 2 : -1)

for (let i = 0; i < images.length; i++) {
    let box = document.createElement('div')
        box.className = 'item'
        box.innerHTML = sortImages[i]
        box.onclick = function() {
            this.classList.add('boxOpen')
            setTimeout(function(){
                if(document.querySelectorAll('.boxOpen').length > 1) {
                    if(document.querySelectorAll('.boxOpen')[0].innerHTML == 
                    document.querySelectorAll('.boxOpen')[1].innerHTML) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                        if(document.querySelectorAll('.boxMatch').length == images.length) {
                            document.querySelector('.banner').style.display = 'flex'
                        } 
                    } else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    }
                }
            },500)
        }
        document.querySelector('.cards').appendChild(box)
}

const btn = document.querySelector('.reset')
btn.addEventListener('click', ()=> {
    window.location.reload()
})

const bannerBtn = document.querySelector('.close')
bannerBtn.addEventListener('click', ()=> {
    window.location.reload()
})
