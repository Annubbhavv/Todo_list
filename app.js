let input = document.querySelector(".inp");
let button = document.querySelector(".bt");
let ol = document.querySelector("ol");
let remove = document.querySelector(".r");
let reset = document.querySelector(".bt1");

button.addEventListener("click",function(){
    let li = document.createElement("li");
    if(input.value != ""){
        li.innerText = input.value;
    }else{
        li.innerText = "invalid task";
    }
    li.classList.add("li");

    let btn = document.createElement("button");
    btn.classList.add("r");
    btn.classList.add("i");

    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-trash");

    btn.appendChild(i);
    li.appendChild(btn);
    ol.appendChild(li);
    input.value = "";
})


ol.addEventListener("click",function(event){
    if(event.target.nodeName == "I"){
        let l = event.target.parentElement;
        l.parentElement.remove();
    }
});

reset.addEventListener("click",function(){
    let lis = document.querySelectorAll("li");
    for(li of lis){
        li.remove();
    }
})