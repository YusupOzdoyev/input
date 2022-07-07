const btn = document.getElementById('btn');

btn.onclick = () => {
    let inputName = document.getElementById('name').value;
    document.getElementById('p_name').innerHTML = inputName;

    let inputSername = document.getElementById('sername').value;
    document.getElementById('p_sername').innerHTML = inputSername;

    let inputYear = document.getElementById('year').value;
    document.getElementById('p_year').innerHTML = inputYear;
}