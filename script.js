let button = document.querySelector('.button');
let music = document.querySelector('audio');

let MostrarTexto = () => {
    document.querySelector('section').classList.toggle('ativade')
    document.querySelector('section').style.opacity = '1'
    let alturaScroll = document.querySelector('section').scrollHeight;

    music.play()
    music.volume = 0.1;

    window.scrollTo({
        top: alturaScroll,
        behavior: 'smooth'
    })
}

button.addEventListener('click', MostrarTexto)


let ScrollUp = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

let btnScrollUp = () => {
    if (window.scrollY == 0) {
        document.querySelector('.button-hearth-btn').style.display = 'none';
        document.querySelector('section').style.opacity = '0'
    } else {
        document.querySelector('.button-hearth-btn').style.display = 'block'
    }
}
window.addEventListener('scroll', btnScrollUp)

document.querySelector('.button-hearth-btn').addEventListener('click', ScrollUp);






