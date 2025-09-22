// on character page load, get the selected character
window.addEventListener('load', function(){
    //get the character info from seshstorage
    const selectedCharacter = JSON.parse(this.sessionStorage.getItem('selectedCharacter'));
    const characterIndex = this.sessionStorage.getItem('selectedCharacterIndex');

    if (selectedCharacter){
        document.getElementById('characterName').textContent = selectedCharacter.name;
        document.getElementById('characterType').textContent = selectedCharacter.type;        
        document.getElementById('characterDesc').textContent = selectedCharacter.description;
        document.getElementById('characterImg').src = selectedCharacter.imgUrl;

        console.log('Selected Character', selectedCharacter);
        console.log('Character index', characterIndex);
    }
    else{
        window.location.href = 'index.html';
    }

    addEventListener('click', function(item){
        item.preventDefault();
        
    })

});



const selectItem = document.getElementById('item');
const list = window.getElementById('selectedItemList');
console.log('list element found', list); //debugging to see if i am locating list in DOM 

selectItem.addEventListener('change', function (e){
    console.log('Event change triggered'); //debug to see if this event is called
    const selectedValue = e.target.value;
    const selectedText = e.target.options[e.target.selectedIndex].text;

    if (selectedValue && selectedValue != ""){
        console.log('Creating list item'); // debug 
        const listItem = document.createElement('li');
        listItem.textContent = selectedText;
        console.log('appending to list') //debug
        list.appendChild;

        selectedItem.selectedIndex =0;
    }
})
