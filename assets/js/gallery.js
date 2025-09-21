// Get the form and gallery
const form = document.getElementById('gallery');
const gallery = document.getElementById('characterCard'); // Where cards will be displayed

// When form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the form data
    const character = {
        type: document.getElementById('type').value,
        name: document.getElementById('name').value,
        description: document.getElementById('desc').value,
        imgUrl: document.getElementById('imgUrl').value
    };
    
    // Save to localStorage
    sessionStorage.setItem('currentCharacter', JSON.stringify(character));
    
    // Create the character card div
    const cardDiv = document.createElement('div');
    cardDiv.className = 'characterCard';
    cardDiv.innerHTML = `
        <img src="${character.imgUrl}" alt="${character.name}" />
        <h2>${character.name}</h2>
        <div class="type">${character.type}</div>
        <div class="desc">${character.description}</div>
    `;

    cardDiv.addEventListener('click', function(){
        sessionStorage.setItem('selectedCharacter', JSON.stringify(character));
        window.location.href = 'detail.html';
    })
    
    // Append the card to the gallery
    gallery.appendChild(cardDiv);
    
    // Clear the form
    form.reset();
});

