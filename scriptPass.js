const array = [
    "pepik.ahoj123",
    "jana.pizza23",
    "karel.kočka34",
    "eva.1234567",
    ""
]

function loginFunction() {
      
    const loginUsername = document.getElementById("username").value
    const loginPassword = document.getElementById("password").value

    const loginData = loginUsername + "." + loginPassword

    for(let i = 0; i < array.length; i++){

        if( loginData == array[i]){
            document.getElementById("output").innerHTML = "přihlásil jste se!"
            console.log("přihlásil jste se")
            window.location.href = 'http://127.0.0.1:5500/Programování/19-Login/loggedIn.html';
            break
        }else if(i == array.length - 1){
            document.getElementById("output").innerHTML = "špatné heslo nebo jméno"
            console.log("nn")
        }
    }

}

function putIntoArray(){

    const user = document.getElementById("registrationUser").value
    const pass = document.getElementById("registrationPass").value
    const passCheck = document.getElementById("registrationPassTwo").value

    const registrationData = user + "." + pass

    var count=array.length;
    for(var i=0;i<count;i++)
    {
        if( registrationData == array[i] && pass == passCheck ){
            document.getElementById("registrationOutput").innerHTML = "Tento uživatel už je přihlášen"
            break
        }else{
            document.getElementById("registrationOutput").innerHTML = "Byl jste úspěšně registrován!"
            array.push(user,".",pass)
        }
    }
    

}