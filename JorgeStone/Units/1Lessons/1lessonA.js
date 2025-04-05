let input1 = document.getElementById('input1')
let check1 = document.getElementById('check1')
let image1 = document.getElementById('image1')

let input2 = document.getElementById('input2')
let check2 = document.getElementById('check2')
let image2 = document.getElementById('image2')

let input3 = document.getElementById('input3')
let check3 = document.getElementById('check3')
let image3 = document.getElementById('image3')

let input4 = document.getElementById('input4')
let check4 = document.getElementById('check4')
let image4 = document.getElementById('image4')


let rightSound = document.getElementById('rightSound')
let score = document.getElementById('score')
let value = score.innerHTML

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'am') {
        rightSound.play()
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        image1.style.visibility = 'visible'
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'is') {
        input1.style.color = 'red'
        value--
        document.getElementById('score').innerHTML = value
    }
})

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are') {
        input1.style.color = 'red'
        value--
        document.getElementById('score').innerHTML = value
    }
})


//LINE 2
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'am') {
        rightSound.play()
        input2.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        image1.style.visibility = 'hidden'
        image2.style.visibility = 'visible'
        input2.disabled = true
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'is') {
        input2.style.color = 'red'
        value--
        document.getElementById('score').innerHTML = value
    }
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'are') {
        input2.style.color = 'red'
        value--
        document.getElementById('score').innerHTML = value
    }
})


