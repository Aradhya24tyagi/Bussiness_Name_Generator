/*
create a bussiness name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Name:
Bros
Limited
Hub
*/
let obj1 = {
    1: "Engine",
    2: "Amazing",
    3: "Fire"
}
let obj2 = {
    1: "Crazy",
    2: "Foods",
    3: "Garments"
}
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let min=1;
let max=3;

let a=Math.floor(Math.random() * (max - min + 1)) + min;
let b=Math.floor(Math.random() * (max - min + 1)) + min;
let c=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a)
console.log(b)
console.log(c)

let div=document.createElement("div");
div.innerHTML=`the random bussiness name is ${obj1[a]} ${obj2[b]} ${obj3[c]}`;
div.setAttribute("class","created")
document.body.append(div);