// input project

const btn = document.getElementById('btn');
let inputName = document.getElementById('name');
let inputSername = document.getElementById('sername');
let inputYear = document.getElementById('year');
let pName = document.getElementById('p_name');
let pSername = document.getElementById('p_sername');
let pYear = document.getElementById('p_year');

btn.onclick = () => {
    pName.innerHTML = inputName.value;
    pSername.innerHTML = inputSername.value;
    pYear.innerHTML = inputYear.value;
}