var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('名前を入力して下さい');
  para.textContent = 'Player 1: ' + name;
}