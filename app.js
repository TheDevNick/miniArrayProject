let orders = ['supreme', 'sausage', 'pepperoni'];




document.querySelector('.btn-1').addEventListener('click', function() {
  if (orders[0]) {
    console.log('you ordered a supreme pizza!');
    document.getElementById('displayOrder').textContent = 'You ordered a '+ orders[0]  + ' pizza!'
  } 
});

document.querySelector('.btn-2').addEventListener('click', function() {
  if (orders[1]) {
    console.log('you ordered a sausage pizza!');
    document.getElementById('displayOrder').textContent = 'You ordered a '+ orders[1]  + '  pizza!'
  }
});

document.querySelector('.btn-3').addEventListener('click', function() {
  if (orders[2]) {
    console.log('you ordered a pepperoni pizza!');
    document.getElementById('displayOrder').textContent = 'You ordered a '+ orders[2]  + '  pizza!'
  }
});

