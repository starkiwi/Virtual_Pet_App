// Recognise pet_image in HTML
const petImage = document.getElementById('pet_image');

// Assign image to be displayed based on selected pet
function selectPet(pet) {
    console.log(pet);
    if (pet === 'cat1')
        petImage.src = './Virtual_Pet_App/pet_images/cat1_image.png';
    else if (pet === 'cat2')
        petImage.src = './Virtual_Pet_App/pet_images/cat2_image.png';
    else if (pet === 'dog1')
        petImage.src = './Virtual_Pet_App/pet_images/dog1_image.png';
    else if (pet === 'dog2')
        petImage.src = './Virtual_Pet_App/pet_images/dog2_image.png';
}

