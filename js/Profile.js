//Slide
let previous=document.getElementById('btn-previous')
let next=document.getElementById('btn-next')
let row=document.getElementsByClassName('contain')
let a=0;
previous.addEventListener('click',function(){
    a+=517;
    for(let i=0;i<row.length;i++)
    {
        row[i].style.transform='translateX('+a+'px)';
    }
    if(a==0)
    {
        previous.style.display="none";
    }
    else if(next.style.display="none"){
        next.style.display="flex";
    }
})
next.addEventListener('click',function(){
    a-=517;
    for(let j=0;j<row.length;j++)
    {
        row[j].style.transform='translateX('+a+'px)';
    }
    if(a==-1034)
    {
        next.style.display="none";
    }
    else if(previous.style.display="none"){
        previous.style.display="flex";
    }
})
//End slide


