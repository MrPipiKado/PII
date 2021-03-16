function clear_textarea(){
    let textarea = document.getElementById('textarea')
    textarea.value = ''
}

function submit_form(){
    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let age = document.getElementById('age').value

    let msg = `${firstName}, ${lastName}, ${gender}, ${email}, ${phone}, ${age}`
    window.alert(msg)

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