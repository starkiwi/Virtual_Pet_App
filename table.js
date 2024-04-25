// Access constants
const table = document.getElementById("activePets");
const pets = JSON.parse(localStorage.getItem("LocalPets"));
const delAll = document.getElementById('all');

// Load (or don't load) table
loadTable(pets);


delAll.addEventListener('click', function () {
    localStorage.clear();
    document.getElementById("petTable").style.display = 'none';
    document.getElementById("none").style.display = 'block';
});


// Function to load table with data from pets array
function loadTable(pets) {
    // Don't load table if no pets
    if (pets === null || pets.length === 0) {
        document.getElementById("petTable").style.display = 'none';
        document.getElementById("none").style.display = 'block';
    }

    //0: Image
    //1: Name

    pets.forEach( pet => {
        let row = table.insertRow();

        let image = row.insertCell(0);
        image.style.width = "20%";
        image.style.padding = "1em";
        let pic = document.createElement('img');
        pic.style.width = "100%";
        if (pet.image === 'cat1')
            pic.src = '../pet_images/cat1_image.png';

        else if (pet.image === 'cat2')
            pic.src = '../pet_images/cat2_image.png';

        else if (pet.image === 'dog1')
            pic.src = '../pet_images/dog1_image.png';

        else if (pet.image === 'dog2')
            pic.src = '../pet_images/dog2_image.png';
        image.appendChild(pic);

        let name = row.insertCell(1);
        name.innerHTML = pet.name;

        let myButton = row.insertCell(2);
        myButton.style.padding = '0';
        myButton.style.width = "15%";
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deletePet';
        deleteButton.value = pets.indexOf(pet);
        deleteButton.onclick = function () {
            delPet(deleteButton.value);
        };
        myButton.appendChild(deleteButton);
    })
}


// Function to delete specific pet
function delPet(petind) {
    table.innerHTML = "";
    pets.splice(petind, 1);
    if (pets.length === 0) {
        localStorage.clear();
        document.getElementById("petTable").style.display = 'none';
        document.getElementById("none").style.display = 'block';
    }
    localStorage.setItem('LocalPets', JSON.stringify(pets));
    loadTable(pets);
}
