// input project

const btn = document.getElementById('btn');
let inputName = document.getElementById('name');
let inputSername = document.getElementById('sername');
let inputYear = document.getElementById('year');
let inputSex = document.getElementById('sex');
let pName = document.getElementById('p_name');
let pSername = document.getElementById('p_sername');
let pYear = document.getElementById('p_year');
let pSex = document.getElementById('p_sex');

btn.onclick = () => {
    pName.innerHTML = inputName.value;
    pSername.innerHTML = inputSername.value;
    pYear.innerHTML = inputYear.value;
    pSex.innerHTML = inputSex.value;
}