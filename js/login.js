var email = document.getElementById('form2Example11')
var password = document.getElementById('form2Example22')
var btn = document.querySelector('.my-btn')
var a = document.getElementById('go-to-home-page')

var emailValid = /^[a-zA-Z0-9]+(@gmail.com)$/
var passwordValid = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/

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

password.onchange = function(){
    console.log(passwordValid.test(password.value))
}

btn.onclick = function(e){ 
    if(email.value == '' || password.value == ''){
        toast({
            title:'Error',
            message :'Bạn chưa nhập đầy đủ form ',
            type:'error',
            duration: 3000,
        })
        a.setAttribute('href','#')
    }
    else{
        if(emailValid.test(email.value) == true){
            if(passwordValid.test(password.value) == true){
                a.setAttribute('href','home.html')
            }
            else{
                toast({
                    title:'Error',
                    message :'Mật khẩu không đúng dịnh dạng',
                    type:'error',
                    duration: 3000,
                })
            }
        }
        else{
            toast({
                title:'Error',
                message :'Bạn phải nhập email của mình',
                type:'error',
                duration: 3000,
            })
        }
    }
}   

