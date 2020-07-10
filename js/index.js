// Your code goes here

//1
const navBlue = document.getElementsByClassName('nav-link')
navBlue.addEventListener('mouseover', () => {
    navBlue.style.color = "lightblue"
}) 

//2
const largeTitle = document.getElementsByTagName('title')
largeTitle.addEventListener('load', () => {
    largeTitle.style.transform = "scale(2.0)"
    largeTitle.style.transition = "all 0.3"
})

//3
const body = document.querySelector('body')
window.addEventListener('resize', () => {
   body.style.backgroundColor = "yellow"
})

//4
const images = document.getElementsByTagName('img')
images.addEventListener('click', () => {
images.style.transform("scale(0.5)")
})

//5
body.addEventListener('dblclick', (event) => {
    body.style.backgroundColor = "papayawhip"
})


//6
images.addEventListener('mouseenter', () => {
    images.style.border = "3px solid black"
})

//7
const Header = document.querySelector('header')
Header.addEventListener('keydown', () => {
Header.style.color = "orange"
})


//8
Header.addEventListener('click', () => {
    Header.style.backgroundColor = "violet"
})

//9
window.addEventListener('load', () => {
    console.log("The window is fully loaded.")
})


//10
const paragraph = document.getElementsByTagName('p')
paragraph.addEventListener('scroll', () => {
    paragraph.style.border = "1px dotted yellow"
})



console.log("hello");