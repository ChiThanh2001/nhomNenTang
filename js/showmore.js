var showmore = document.querySelector(".showmore")

var center_col = document.querySelector(".my-center-col")

showmore.onclick = function(e){
    center_col.classList.toggle("showmore-content")
}

