const div = document.getElementById("snakeField");

div.addEventListener('mouseover', (event) => {
    event.target.style.background = "orange"
})

div.addEventListener('mouseout', (event) => {
    event.target.style.background = "lightblue"
    event.target.style.transition= '3s'
})







    


