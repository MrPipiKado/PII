function clear_textarea(){
    let textarea = document.getElementById('textarea')
    textarea.value = ''
}

function submit_form(){
    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let gender = document.getElementsByName('gender');;
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let age = document.getElementById('age').value

    validation(firstName, lastName, gender, email, phone, age)

    //let msg = `${firstName}, ${lastName}, ${gender}, ${email}, ${phone}, ${age}`
    //window.alert(msg)

    let data = {
        'firstName': firstName,
        'lastName': lastName,
        'gender': gender,
        'email' : email,
        'phone' : phone,
        'age': age
    }

    let dataToBeSent = JSON.stringify(data)
    console.log(dataToBeSent)
}


function validation(firstName, lastName, gender, email, phone, age){
let message = ""
if (firstName.length === 0){
    message += "First name can't be empty!\n"
}
if (! (/[A-Za-z ]{1,50}/.test(firstName))){
    message += "First name must contain only uppercase and lowercase english letter and be no longer" +
" than 50 symbols\n"
}
if (lastName.length === 0){
    message += "Last name can't be empty!\n"
}
if (! (/[A-Za-z ]{1,50}/.test(lastName))){
    message += "Last name must contain only uppercase and lowercase english letters and be no longer" +
" than 50 symbols\n"
}

if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    message += "Please Select Your Gender\n";
}

if (age === '0'){
    message += "The age isn't chosen!\n"
}

const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!re_email.test(String(email).toLowerCase())){
    message += "Invalid email!\n"
}

const re_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
if(!re_phone.test(String(phone).toLowerCase())){
    message += "Invalid phone!\n"
}

if(message)
    window.alert(message)
}

let timerElement = document.getElementById('timer')
let timerSeconds = 0
createChart()

function onStartClicked(){
    setInterval(timer, 1000)
}

function timer(){
    timerSeconds += 1
    timerElement.innerHTML = getTimeString(timerSeconds)
}

function getTimeString(time){
    let seconds = time % 60
    let minutes = Math.floor(time / 60)

    if (seconds < 10){
        seconds = `0${seconds}`
    } else {
        seconds = `${seconds}`
    }

    if (minutes < 10){
        minutes = `0${minutes}`
    } else {
        minutes = `${minutes}`
    }

    return `${minutes} : ${seconds}`
}

function createChart(){
    let ctx = document.getElementById('myChart').getContext('2d');
    ctx.width = 800
    ctx.height = 600
    let chessNames = ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King']
    let chess = getChessCounts()
    let chessCounts = []

    for(let i = 0; i < chess.length; i++){
        chessCounts.push(chess[i]["count"])
    }

    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: chessNames,
            datasets: [{
                label: 'Chess figures and their counts on the field',
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
                data: chessCounts
            }]
        },

        options: {}
    });
}

function getChessCounts(){
    let chessLetters = ['p', 'b', 'n', 'r', 'q', 'k']
    let chess = []
    for (let i = 0; i < chessLetters.length; i++){
        chess.push({
            letter: chessLetters[i],
            count: 0
        })
    }

    let images = document.getElementsByTagName('img')
    for (let i = 0; i < images.length; i++){
        let src = images[i].getAttribute('src')
        let letter = src[8]
        chess.find(function (element){
            return element['letter'] === letter
        }).count += 1
    }

    return chess
}