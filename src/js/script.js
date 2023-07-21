let carros = [
{
    placa:"NYB7569",
    cor: "Vermelho",
    modelo:"Gol"
},
{
    placa:"NYB8028",
    cor:"Branco",
    modelo:"Fusca"
},
{
    placa:"ABC1234",
    cor:"Prata",
    modelo:"HB20"
}
];

let input = document.querySelector('#searchInput');
let resultado = document.querySelector('#resultado');
let btn = document.querySelector('#btn');
let form = document.querySelector('#form');

let carro;

function valideInput(){
  if(input.value.length > 6){
    btn.removeAttribute('disabled')
    return;
  }
  btn.setAttribute('disabled', '')
};
input.addEventListener('input', valideInput);

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
    btn.click();
  }
});

function consultar(){
  for(var i = 0; i < carros.length; i++) {
    if(carros[i].placa === input.value){
      carro = carros[i];
      resultado.innerHTML= `<div id="morador"> <p> Morador </p> </div> <div id="infos"> <p> Placa: ${carro.placa} <br>Modelo: ${carro.modelo} <br> Cor: ${carro.cor} </p> </div>`;
      document.querySelector('#resultado').style.display = "flex";
      break;
    }else{
      document.querySelector('#resultado').style.display = "flex";
      resultado.innerHTML = `<div id="nao-morador"> <p> Não é um morador </p> </div>`;
    }
  } 
  document.querySelector('#searchInput').value = '';
}