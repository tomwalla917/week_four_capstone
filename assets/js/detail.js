// on character page load, get the selected character
window.addEventListener('load', function () {
    //get the character info from seshstorage
    const selectedCharacter = JSON.parse(this.sessionStorage.getItem('selectedCharacter'));
    const characterIndex = this.sessionStorage.getItem('selectedCharacterIndex');

    if (selectedCharacter) {
        document.getElementById('characterName').textContent = selectedCharacter.name;
        document.getElementById('characterType').textContent = selectedCharacter.type;
        document.getElementById('characterDesc').textContent = selectedCharacter.description;
        document.getElementById('characterImg').src = selectedCharacter.imgUrl;

        console.log('Selected Character', selectedCharacter);
        console.log('Character index', characterIndex);
    }
    else {
        window.location.href = 'index.html';
    }

    addEventListener('click', function (item) {
        item.preventDefault();
    })

    // Load existing selections from sessionStorage or start with empty array
    let list = JSON.parse(sessionStorage.getItem('selectedItems')) || [];

    const selectItem = document.getElementById('item');
    const list_item = document.getElementById('selectedItemList');
    console.log('list_item:', list_item);
    if (!list_item) {
        console.error('Could not find element with ID selectedItemList');
    }

    // Restore previously selected items to the DOM
    list.forEach(function(itemText) {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list_item.appendChild(listItem);
    });

    selectItem.addEventListener('change', function (e) {
        console.log('Event change triggered');
        const selectedValue = e.target.value;
        const selectedText = e.target.options[e.target.selectedIndex].text;

        if (selectedValue && selectedValue != "") {
            console.log('Creating list item');
            const listItem = document.createElement('li');
            listItem.textContent = selectedText;
            console.log('appending to list');
            list_item.appendChild(listItem);
            
            // Add to array and save to sessionStorage
            list.push(selectedText);
            sessionStorage.setItem('selectedItems', JSON.stringify(list));
            console.log('Saved to sessionStorage:', list);
        }

        selectItem.selectedIndex = 0;
    });
});