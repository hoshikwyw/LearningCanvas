let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

// c.fillRect(x , y ,width , height)

c.fillRect(100, 100, 100, 100)
c.fillRect(200, 300, 100, 100)
c.fillRect(400, 200, 100, 100)