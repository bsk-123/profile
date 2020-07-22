document.querySelector(".opt").addEventListener("click",function(event){
    console.log(event.target)
    var t = event.target
    console.log(t.innerText)
    if(t.innerText.trim()=="About"){
    console.log("if")
    document.querySelector(".about").style.display="inline-block";
    document.querySelector(".posts").style.display="none";
    document.querySelector(".bara").style.display="block";
    document.querySelector(".barp").style.display="none";
    }else{
        console.log("else")
    document.querySelector(".about").style.display="none";
    document.querySelector(".posts").style.display="inline-block";
    document.querySelector(".bara").style.display="none";
    document.querySelector(".barp").style.display="block";
    }
})
