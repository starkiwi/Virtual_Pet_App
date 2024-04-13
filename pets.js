// Get array from localstorage
let pets = JSON.parse(localStorage.getItem('LocalPets')) || [];


// Pet object creation from form
const addPet = (ev)=>{
    ev.preventDefault();
    let pet = {
        id: Date.now(),
        name: document.getElementById('petname').value,
        image: document.querySelector('input[name="image"]:checked').value
    }
    pets.push(pet);
    localStorage.setItem('LocalPets', JSON.stringify(pets));
    document.forms[0].reset();
}


// Event listeners
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("submit").addEventListener('click', addPet);
    document.getElementById("submit").addEventListener('click', ()=> {
        document.getElementById("create").style.display = 'none';
        document.getElementById("submitted").style.display = 'block';
    })
});