//let's go button

var btn_LetGo = document.querySelector('.btn-letgo')
var wrap_content = document.querySelector('.wrap-content')

var welcome = document.querySelector('.my-row-border')
btn_LetGo.onclick = function(){
    toast({
        title:'Welcome to Twitter',
        message :'Chào mừng bạn đến với Twitter<br>have fun everyone 🥳 🥳',
        type:'success',
        duration: 3000,
    })
    
    wrap_content.setAttribute('id' , 'block')
    welcome.setAttribute('id', 'none')
}

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

function successbtn(){
    toast({
    title:'Success',
    message :'Thành công',
    type:'success',
    duration: 3000,
})

}

function errorbtn(){
    toast({
    title:'Success',
    message :'error',
    type:'error',
    duration: 1000
})
}

//status message
var status_input = document.querySelector('.my-input') //lấy input
var btn_tweet = document.querySelector('.my-btn') //lấy button
btn_tweet.onclick = function(){
    if(status_input.value == ''){
        toast({
            title:'Error',
            message :'Bạn chưa nhập gì để đăng Tweet, Hãy nhập gì đó đi',
            type:'error',
            duration: 3000
        })
    }

    else{
        toast({
            title:'Success',
            message :'Bài Tweet của bạn đã được đăng 🥳',
            type:'success',
            duration: 3000,
        })
    }
}

