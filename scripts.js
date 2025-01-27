let prevButton = document.getElementById('prev')
let number = document.getElementById('number')
let nextButton = document.getElementById('next')
let conteiner = document.querySelector('.conteiner')
let item = conteiner.querySelectorAll('.list .item')
let indicator = document.querySelectorAll('.conteiner .indicators')
let dots = document.querySelectorAll('.conteiner .indicators ul li')


let active = 0
let firstPosition = 0
let lastPosition = item.length -1


/*

let li1 = document.querySelector('header nav ul .li1')
let li2= document.querySelector('header nav ul .li2')
let li3 = document.querySelector('header nav ul .li3')



li1.onclick =()=>{
    console.log('li1')
}

li2.onclick =()=>{
    console.log('li2')
}

li3.onclick =()=>{
    console.log('li3')

}
*/


nextButton.onclick = () => {
    let itemOld = conteiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active +1 > lastPosition ? firstPosition : active + 1
    item[active].classList.add('active')


    let dotOld = document.querySelector('.conteiner .indicators ul li.active')
    dotOld.classList.remove('active')
    dots[active].classList.add('active')


     document.querySelector('.conteiner .indicators .number .num').innerHTML= `0`+(active+1)

}



   



prevButton.onclick = () => {
    let itemOld = conteiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    item[active].classList.add('active')

}