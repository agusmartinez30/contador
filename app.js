const container = document.querySelector('.container');
const btnDown = document.querySelector('.btn-danger')

const span = document.getElementById('span');

let contador = 0;

container.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('btn-info'));
    if(e.target.classList.contains('btn-info')){
        contador++;
        span.textContent = contador;
    }
    if(e.target.classList.contains('btn-danger')){
        contador--;
        span.textContent = contador;
    }
    
    // contador++;
    // span.textContent = contador;
})

// btnDown.addEventListener('click', () => {
//     contador--;
//     span.textContent = contador;
// })