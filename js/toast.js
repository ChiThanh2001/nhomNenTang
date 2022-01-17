// function toast({
//     title = '',
//     message = '',
//     type = '',
//     duration = ''
// }){
//     const main = document.getElementById('alert')
//     if(main){
//         const toast = document.createElement('div')

//         const autoremove = setTimeout(function(){
//             main.removeChild(toast)
//         },duration+1000)

//         toast.onclick = function(e){
//             if(e.target.closest('.alert-close')){
//                 main.removeChild(toast)
//                 clearTimeout(autoremove)
//             }               
//         }

//         const icons = {
//             success : 'fa fa-check-circle',
//             info : 'fa fa-info-circle',
//             warning : 'fa fa-exclamation-circle',
//             error : 'fa fa-exclamation-circle'
//         }
//         const icon = icons[type]
//         const delay = (duration/1000).toFixed(2)

//         toast.classList.add('alert',`alert-${type}`)
//         toast.style.animation = `slideInLeft ease 0.3s,fadeOut linear 1s ${delay}s forwards`
//         toast.innerHTML =
//         `
//             <div class="alert-icon">
//                 <i class="${icon}" aria-hidden="true"></i>
//             </div>
    
//             <div class="alert-body">
//                 <h3 class="alert-title">${title}</h3>
//                 <p class="alert-msg">${message}</p>
//             </div>
    
//             <div class="alert-close">
//                 <i class="fa fa-times" aria-hidden="true"></i>
//             </div>
//         `

//         main.appendChild(toast)

//     }
// }

// function successbtn(){
//     toast({
//     title:'Success',
//     message :'Thành công',
//     type:'success',
//     duration: 3000,
// })

// }

// function errorbtn(){
//     toast({
//     title:'Success',
//     message :'error',
//     type:'error',
//     duration: 1000
// })

// }