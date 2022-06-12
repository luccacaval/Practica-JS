let form = document.forms.calculator;
let inicio = diagram.rows[1].cells[0]
let final = diagram.rows[1].cells[1]
form.money.oninput = calcular;
form.months.onchange = calcular;
form.interest.oninput = calcular;
inicio.innerHTML= form.money.value
let initial = form.money.value
let interest = form.interest.value / 100
let years = form.months.value / 12
let result = Math.round(initial * (1 + interest) ** years);
final.innerHTML = result
let height = result / form.money.value * 100 + 'px';
document.getElementById('height-after').style.height = height;    


function calcular() {
  inicio.innerHTML= form.money.value
  initial = form.money.value
  interest = form.interest.value / 100
  years = form.months.value / 12
  result = Math.round(initial * (1 + interest) ** years);
  final.innerHTML = result
  let height = result / form.money.value * 100 + 'px';
  document.getElementById('height-after').style.height = height;    
}