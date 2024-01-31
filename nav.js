//reccuperer ler meunu
let meunu = document.getElementById('meunu')

//ajouter un evenement au clic
meunu.addEventListener('click', () => {
    meunu.classList.toggle('open')
})