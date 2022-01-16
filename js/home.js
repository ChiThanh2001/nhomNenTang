var btn_LetGo = document.querySelector('.btn-letgo')
var wrap_content = document.querySelector('.wrap-content')
console.log(wrap_content)
var welcome = document.querySelector('.my-row-border')
btn_LetGo.onclick = function(){
    wrap_content.setAttribute('id' , 'block')
    welcome.setAttribute('id', 'none')
}