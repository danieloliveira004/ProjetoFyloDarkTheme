const button = document.querySelector('#button');
const input = document.querySelector('#email');
const msgErro = document.querySelector('#msg');

button.addEventListener('click', () => {
  const email = input.value;
  email == "" ? Erro(): input.value = "";
});

function Erro() {
  msgErro.classList.toggle('active');
}