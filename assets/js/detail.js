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



