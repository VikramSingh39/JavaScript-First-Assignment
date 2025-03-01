/* Question 1.
   Character Case Checker – Ask the user for a single character.
   Check if it's uppercase, lowercase, or neither (not a letter). */


        const Character = document.querySelector('.Character');
        const character = prompt('Enter a single character:');
        if(character.length === 1){
            if(character >= "a" && character <= "z" )
            Character.innerText = "Small Letter"
            else if(character >= "A" && character <= "Z"){
                  Character.innerText = "Capital Letter"
            }
        }else{
            Character.textContent = "pleae enter valid single character only"
        }
   