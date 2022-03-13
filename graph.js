const box = document.getElementById('box')
const html = document.getElementById('html')
const img = document.getElementById('imghtml')

const box2 = document.getElementById('box2')
const css = document.getElementById('css')
const imgcss = document.getElementById('imgcss')

const box3 = document.getElementById('box3')
const js = document.getElementById('js')
const imgjs = document.getElementById('imgjs')

const box4 = document.getElementById('box4')
const php = document.getElementById('php')
const imgphp = document.getElementById('imgphp')


html.addEventListener('mouseover', () => {
    img.style.display = "none"
    box.style.display = "flex"
})


html.addEventListener('mouseout', () => {
    img.style.display = "flex"
    box.style.display = "none"
})



php.addEventListener('mouseover', () => {
    imgphp.style.display = "none"
    box4.style.display = "flex"
})


php.addEventListener('mouseout', () => {
    imgphp.style.display = "flex"
    box4.style.display = "none"
})



css.addEventListener('mouseover', () => {
    imgcss.style.display = "none"
    box2.style.display = "flex"
})

css.addEventListener('mouseout', () => {
    imgcss.style.display = "flex"
    box2.style.display = "none"
})


js.addEventListener('mouseover', () => {
    imgjs.style.display = "none"
    box3.style.display = "flex"
})

js.addEventListener('mouseout', () => {
    imgjs.style.display = "flex"
    box3.style.display = "none"
})


