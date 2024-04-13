let body = document.getElementById('body')
let login = document.getElementById('login')
let newuser = document.getElementById('new-user')
let alogin = document.getElementById('alogin')
let asinge = document.getElementById('asinge')

let lone = document.getElementById('lone')
let ltwo = document.getElementById('ltwo')
let welcoom = document.getElementById('welcoom')
let In = document.getElementById('in')
let out = document.getElementById('out')
let h3 = document.getElementById('h3')
let loding = document.getElementById('loding')

let UserName = document.getElementById('user-name')
let UserPassword = document.getElementById('user-password')
let btnlogin = document.getElementById('btn-login')
let fullName = document.getElementById('full-name')
let NewUserName = document.getElementById('new-user-name')
let NewUserPassword = document.getElementById('new-user-password')
let btnsinge = document.getElementById('btn-singe')
let h2 = document.getElementById('h2')
let h22 = document.getElementById('h22')

let icount = [];
let jcount = [];
let olduser =[];
let Newuser = [];




// newuser



let data = {
    fullName: 'fullNameVal',
    Newusername: 'NewUserNameVal',
    NewUserPassword: 'NewUserPasswordVal'
};

if(localStorage.new != null){
    Newuser = JSON.parse(localStorage.new)
}
else{
    Newuser = [data];
    localStorage.setItem('new', JSON.stringify(Newuser))
}

function labelViseblty(label,input){
    if(document.getElementById(input).value != null){
        document.getElementById(label).style.opacity = '0';
    }
    else{
        document.getElementById(label).style.opacity = '0.3';
    }
}

function toSingeUp(){
    login.style.left= '-580px';
    newuser.style.left = '15px';
    asinge.style.color = 'white';
    alogin.style.color = 'black';
}

function toLogin(){
    login.style.left = '0px';
    newuser.style.left = '580px';
    asinge.style.color = 'black';
    alogin.style.color = 'white';
}

function newuserdatainvalid() {
    let fullNameVal = document.getElementById('full-name').value.toLowerCase();
    let NewUserNameVal = document.getElementById('new-user-name').value.toLowerCase();
    let NewUserPasswordVal = document.getElementById('new-user-password').value.toLowerCase();
    let usernamelist = JSON.parse(localStorage.getItem('new'));
    let data = {
        fullName: fullNameVal,
        Newusername: NewUserNameVal,
        NewUserPassword: NewUserPasswordVal
    };
    let i = 0;
    if(fullNameVal != '' && NewUserNameVal != '' && NewUserPasswordVal != ''){

        if(NewUserNameVal.length<6){

            h2.style.opacity = '1';
            h2.style.background = 'rgb(198, 72, 0)';
            h2.innerHTML = 'Your User Name is short !';
            setTimeout(function(){h2.style.opacity = '0'},4000);
        }

        else if(NewUserPasswordVal.length<6){

            h2.style.opacity = '1';
            h2.style.background = 'rgb(198, 72, 0)';
            h2.innerHTML = 'Your Password is short !';
            setTimeout(function(){h2.style.opacity = '0'},4000);
        }

        else{
            theelse();
        }

    function theelse() {
        let found = false;
    
        for (let i = 0; i < usernamelist.length; i++) {
            if (usernamelist[i].Newusername.toLowerCase().trim() === NewUserName.value.toLowerCase().trim()) {
                h2.style.opacity = '1';
                h2.style.background = 'rgb(198, 72, 0)';
                h2.innerHTML = 'You already have an account!';
                setTimeout(function () {
                    h2.style.opacity = '0';
                }, 4000);
                found = true;
                icount.push(i)
                break;
            }
        }
    
        handleAfterLoop(found);
    }
    
    function handleAfterLoop(found) {
        if (!found) {
            Newuser.push(data);
            localStorage.setItem('new', JSON.stringify(Newuser));
            h2.style.opacity = '1';
            h2.style.background = 'green';
            h2.innerHTML = 'Sign up successful!';
            setTimeout(function () {
                h2.style.opacity = '0';
            }, 4000);
            fullName.style.pointerEvents = 'none';
            NewUserName.style.pointerEvents = 'none';
            NewUserPassword.style.pointerEvents = 'none';
            btnsinge.style.pointerEvents = 'none';
            body.style.cursor = 'wait';
            h2.style.transition = 'opacity .8s ease-in-out 2s';
            setTimeout(function () {
                fullName.value = '';
                NewUserName.value = '';
                NewUserPassword.value = '';
                location.reload();
            }, 4500);
        }
    }
    

    }
    else{
        h2.style.opacity = '1';
        h2.style.background = 'red';
        h2.innerHTML = 'You need to fill all fields !'
        setTimeout(function(){h2.style.opacity = '0'},4000)
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("user-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function togglePasswordVisibility2() {
    var passwordInput2 = document.getElementById("new-user-password");
    if (passwordInput2.type === "password") {
        passwordInput2.type = "text";
    } else {
        passwordInput2.type = "password";
    }
}

function test(){
let usernamelist = JSON.parse(localStorage.getItem('new'))
let i = 0;
for(i = 0 ;i<usernamelist.length;i++){
    if(usernamelist[i].Newusername.toLowerCase().trim() === NewUserName.value.toLowerCase().trim()){
        console.log('ah')
        break;
    }
    else{
        console.log('la')
    }
}
}






// olduser






function userback(){
    let usernamelist = JSON.parse(localStorage.getItem('new'));
    let j;
    let found;
  for(j = 0 ; j<usernamelist.length;j++){

    if(UserName.value != '' && UserPassword.value != ''){

        if(UserName.value.toLowerCase().trim() === usernamelist[j].Newusername.toLowerCase().trim()){
            console.log(usernamelist[j].Newusername.toLowerCase().trim())
            jcount.push(j)

            function checkpassword(){

                let usernamelist = JSON.parse(localStorage.getItem('new'));
                console.log(usernamelist[j].NewUserPassword.toLowerCase().trim())

                if(UserPassword.value.toLowerCase().trim() === usernamelist[j].NewUserPassword.toLowerCase().trim()){
                    welcoom.style.width = '95%';
                    h3.innerHTML += usernamelist[j].fullName.toUpperCase();
                    h3.style.color = 'green';
                    setTimeout(function(){
                        loding.style.display = 'none';
                        In.style.opacity = '1';
                        In.style.scale = '1';
                        h3.style.opacity = '1';
                    },4000);
                }

                else{
                    welcoom.style.width = '95%';
                    setTimeout(function(){
                        loding.style.display = 'none';
                        out.style.opacity = '1';
                        out.style.scale = '1';
                        h3.style.opacity = '1';
                        h3.innerHTML = `The Password is Incorect`;
                        h3.style.scale = '.7';
                    },3000)
                }
            }


            checkpassword()
            found = true;


        }

        else if(found === false){
            h22.style.opacity = '1';
            h22.style.background = 'red';
            h22.innerHTML = 'User Name Undifend !';
            setTimeout(function(){h22.style.opacity = '0'},4000)
        }
    }

    else{
        h22.style.opacity = '1';
        h22.style.background = 'red';
        h22.innerHTML = 'You need to fill all fields !';
        setTimeout(function(){h22.style.opacity = '0'},4000)
    }
  }
}
console.log(innerWidth)

