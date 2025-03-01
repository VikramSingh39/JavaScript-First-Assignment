/* Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max(). */

   
  
            let largest = document.querySelector('.largest');

       let num_1 = parseInt(prompt("Enter The First Number"));
       let num_2 = parseInt(prompt("Enter The Second Number"));
       let num_3 = parseInt(prompt("Enter the Third Number"));
        
       if(num_1 >= num_2 && num_1 >= num_3){
            largest.innerText = "First number is largest"
       }else if(num_2 >= num_3){
            largest.innerText = "Second number is largest"
       }else{
            largest.innerText = "Third number is largest"
       }
    