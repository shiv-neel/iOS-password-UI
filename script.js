const nine = document.getElementById('9')
const eight = document.getElementById('8')
const seven = document.getElementById('7')
const six = document.getElementById('6')
const five = document.getElementById('5')
const four = document.getElementById('4')
const three = document.getElementById('3')
const two = document.getElementById('2')
const one = document.getElementById('1')
const zero = document.getElementById('zero')
const delbtn = document.getElementById('del')
const resetbtn = document.getElementById('clr')

const input = document.getElementById('pin')
const pad = document.getElementById('pad')

const circle1 = document.getElementById('circle1')
const circle2 = document.getElementById('circle2')
const circle3 = document.getElementById('circle3')
const circle4 = document.getElementById('circle4')
const circle5 = document.getElementById('circle5')
const circle6 = document.getElementById('circle6')

const circles = [circle1, circle2, circle3, circle4, circle5, circle6]
let curCircle = 0
let password = ''


const addNumber = (num) => {
    
    if (password.length < 6) {
        password += num
        console.log(password)
        circles[curCircle].innerHTML = "<i class='fas fa-circle'></i>"
        curCircle += 1
    }
    if (password.length === 6) {
        if (password === '162330') {
            setTimeout(() => {
                alert('correct')
                for (let i = 0; i < 6; i++) {
                    circles[i].innerHTML = '◯'            
                }
        }, 100)
        }
        else {
            setTimeout(() => {
                for (let i = 0; i < 6; i++) {
                    circles[i].innerHTML = '◯'            
                }
        }, 100) 
            anime({
                targets: input,
                keyframes: [
                    {translateX: -10},
                    {translateX: 10},
                    {translateX: -10},
                    {translateX: 10},
                    {translateX: -10},
                    {translateX: 0}
                    
                ],
                duration: 500,
                easing: 'easeInOutSine'
            })
            
        }
        curCircle = 0
        password = ''
    }

    
}

const backspace = () => {
    input.value = input.value.slice(0,-1)
}
const reset = () => {
    input.value = ''
}
