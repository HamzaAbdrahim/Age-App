//first step is get the input fromthe user

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("years");
let click = document.querySelector('.icon');
let field = document.querySelectorAll('.filed')
//second step is check if the form is empty

click.addEventListener('click',test);

let data = new Date ();
let Yr  =  data.getFullYear();
function test() {
    if (day.value === '') {
        day.parentElement.classList.add('erore');
        field[0].style.opacity = '1';
    }  else if (day.value > 31 || day.value < 1) {
        field[0].innerHTML = 'Must Be a vaild Day';
        field[0].style.opacity = '1';
        day.parentElement.classList.add('erore');
    }  else {
        day.parentElement.classList.remove('erore');
        field[0].style.opacity = '0';
    } 

    
    if (month.value === '') {
        month.parentElement.classList.add('erore');
        field[1].style.opacity = '1';
    } else if (month.value < 1 || month.value > 12) {
        field[1].innerHTML = 'Must Be a vaild Month';
        field[1].style.opacity = '1';
        month.parentElement.classList.add('erore');
    } else {
        month.parentElement.classList.remove('erore');
        field[1].style.opacity = '0';
    } 


    if (year.value === '') {
        year.parentElement.classList.add('erore');
        field[2].style.opacity = '1';
    } else if (year.value > Yr) {
        field[2].innerHTML = 'Must Be in The Past';
        field[2].style.opacity = '1';
        year.parentElement.classList.add('erore');
    } else {
        year.parentElement.classList.remove('erore');
        field[2].style.opacity = '0';
    }
    
    //check the vaild day
    let day_value  = parseInt(day.value) ;
    let month_value  =parseInt(month.value - 1);
    let year_value  = parseInt(year.value);

    let data_value = new Date (year_value,month_value,day_value);
    
    let difrent  = data_value.getTime() - data.getTime();
    let sec  = difrent / 1000
    let min = sec / 60;
    let Hr = min / 60;
    let dy = Hr / 24;
    
    if (data_value.getFullYear() === year_value && data_value.getMonth() === month_value && data_value.getDate() === day_value ) {
        //add animaition to button
    click.classList.add('animaition');
    setTimeout(function () {
        click.classList.remove('animaition');
        window.location.reload()
    },8000)
    day.value = ''
    month.value = ''
    year.value = ''
    document.querySelector('.time-Yr').innerHTML = Math.floor(-dy / 365);
    document.querySelector('.time-Mth').innerHTML = Math.floor((-dy % 365) / 30);
    document.querySelector('.time-Mint').innerHTML = Math.floor((-dy % 365) % 30);
    } 
    else {
        field[0].innerHTML = 'Must Be a vaild date';
        field[0].style.opacity = '1';
        day.parentElement.classList.add('erore');
        month.parentElement.classList.add('erore');
        year.parentElement.classList.add('erore');
    }

}
