const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const delectButton = document.createElement('button');
button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
      li.textContent = input.value;
      delectButton.textContent = 'X';
      li.append(delectButton);
  }
  delectButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
  input.value = '';
});
    
});
