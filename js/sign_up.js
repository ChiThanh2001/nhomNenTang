//toast

function toast({
    title = '',
    message = '',
    type = '',
    duration = ''
}){
    const main = document.getElementById('alert')
    if(main){
        const toast = document.createElement('div')

        const autoremove = setTimeout(function(){
            main.removeChild(toast)
        },duration+1000)

        toast.onclick = function(e){
            if(e.target.closest('.alert-close')){
                main.removeChild(toast)
                clearTimeout(autoremove)
            }               
        }

        const icons = {
            success : 'fa fa-check-circle',
            info : 'fa fa-info-circle',
            warning : 'fa fa-exclamation-circle',
            error : 'fa fa-exclamation-circle'
        }
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2)

        toast.classList.add('alert',`alert-${type}`)
        toast.style.animation = `slideInLeft ease 0.3s,fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML =
        `
            <div class="alert-icon">
                <i class="${icon}" aria-hidden="true"></i>
            </div>
    
            <div class="alert-body">
                <h3 class="alert-title">${title}</h3>
                <p class="alert-msg">${message}</p>
            </div>
    
            <div class="alert-close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        `

        main.appendChild(toast)

    }
}

//biểu thức chính quy

var email = document.getElementById('email')
var password = document. getElementById('password')
var submit = document.getElementById('submit')
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var phoneNumber = document.getElementById('phoneNumber')
var go_to_login = document.getElementById('go-to-login')
console.log(go_to_login)

var emailValid = /^[a-zA-Z0-9]+(@gmail.com)$/
var passwordValid = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/
var phoneValid = /^[0-9]{10}/

submit.onclick = function(e){
    e.preventDefault()
    var emailValue = email.value
    var passwordValue = password.value
    var phoneValue = phoneNumber.value

    if(emailValid.test(emailValue) == true){
        if(passwordValid.test(passwordValue) == true){
            if(phoneValid.test(phoneValue) == true){
                toast({
                    title:'Success',
                    message :'Bạn đã đăng kí thành công',
                    type:'success',
                    duration: 3000
                })

                go_to_login.textContent = "Đến trang đăng nhập";
            }
            else{
                toast({
                    title:'Error',
                    message :'Bạn chưa nhập đúng định dạng form',
                    type:'error',
                    duration: 3000
                })
            }
        }
        else{
            toast({
                title:'Error',
                message :'Bạn chưa nhập đúng định dạng form',
                type:'error',
                duration: 3000
            })
        }
    }
    else{
        toast({
            title:'Error',
            message :'Bạn chưa nhập đúng định dạng form',
            type:'error',
            duration: 3000
        })
    }
}