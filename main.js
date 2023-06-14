


const url =" https://islomapi.uz/api/present/week?region=";
const form = document.getElementById("form");
const region = document.getElementById("region");
const card = document.getElementById("card");
// const times = document.getElementById("times");


const getUser= async (region) => {
    const res = await fetch(url+region);
    const resData = await res.json();
    console.log(resData);
    createCard(resData)
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Ramazan =region.value;
    if (Ramazan){
        getUser(Ramazan)
        region.value="";
    }
})




let createCard = (Ramazan)=> {
    let cardHTML=""
    Ramazan.forEach(value => {
        cardHTML+=`<div class="cards">
        <div class="card3">
        <p class="regions">${value.region}</p>
        <p class="day">${value.weekday}</p>
        <p class="times">saxarlik: ${value.times["tong_saharlik"]}</p>
        <p class="times">iftorlik: ${value.times["shom_iftor"]}</p>
        <p class="date">${value.date}</p>
        
        </div>`
    })
    card.innerHTML=cardHTML;
}
getUser()


