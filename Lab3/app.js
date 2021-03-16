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

    validation(firstName, lastName)

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


function validation(firstName, lastName, gender){
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
    message = "Please Select Your Gender";
}

window.alert(message)
}