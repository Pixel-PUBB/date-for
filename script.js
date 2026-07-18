let data = {
    day:"",
    first:"",
    place:"",
    extra:"",
    time:""
};


// Эхлэлээс дараагийн хэсэг рүү
function next(id){

    document.getElementById("app").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");

}


// сонголт хадгалах
function choose(type,value){

    data[type]=value;


    // аль хэсгийг дараагийнх руу шилжүүлэх
    if(type==="day"){
        show("activity");
    }

    if(type==="first"){
        show("place");
    }


    if(type==="place"){

        if(value==="🎬 Кино"){
            show("movie");
        }
        else{
            show("park");
        }

    }


    if(type==="extra"){
        show("time");
    }


    if(type==="time"){

        document.getElementById("showDay").innerHTML=data.day;
        document.getElementById("showTime").innerHTML=data.time;
        document.getElementById("showFirst").innerHTML=data.first;
        document.getElementById("showPlace").innerHTML=data.place;
        document.getElementById("showExtra").innerHTML=data.extra;


        show("ticket");

        confetti();

    }

}



// дэлгэц солих
function show(id){

    let boxes=document.querySelectorAll(".box");

    boxes.forEach(box=>{
        box.classList.add("hidden");
    });


    document.getElementById(id).classList.remove("hidden");

}



// Үгүй товч зугтах
function moveNo(){

    let btn=document.getElementById("no");

    let x=Math.random()*250-125;
    let y=Math.random()*200-100;


    btn.style.transform=
    `translate(${x}px,${y}px)`;

}



// хөгжим
let playing=false;

function musicToggle(){

    let song=document.getElementById("song");


    if(!playing){

        song.play();
        playing=true;

    }

    else{

        song.pause();
        playing=false;

    }

}



// жижиг confetti эффект
function confetti(){

    let arr=["💖","✨","💕","🌸","❤️"];

    for(let i=0;i<30;i++){

        let e=document.createElement("div");

        e.innerHTML=
        arr[Math.floor(Math.random()*arr.length)];


        e.style.position="fixed";
        e.style.left=Math.random()*100+"vw";
        e.style.top="-20px";
        e.style.fontSize="25px";
        e.style.animation=
        "fall 3s linear";


        document.body.appendChild(e);


        setTimeout(()=>{
            e.remove();
        },3000);

    }

}