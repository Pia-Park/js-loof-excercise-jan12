let input = prompt('What would you like to do?', '');

//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];



//start with a while loop that checks for quit input
while(input.toLowerCase() !== 'q'){
    //if else conditions
    if(input === '' || input === null){
        alert("Please Enter the list!");
        input = prompt('What would you like to do?', '');
        if(input !== '' || input !== null || input.toLowerCase() !== 'q'){
            todos.push(input);
            console.log('Your list is added!')
            console.log("===Here is youre to do list!===")
            todos.forEach(list =>{
                console.log(list);
            });
            console.log("===============================")
            break;
        } else {
            todos.push(input);
            console.log('Your list is added!')
            console.log("===Here is youre to do list!===")
            todos.forEach(list =>{
                console.log(list);
            });
            console.log("===============================")
            break;
        }
    } else if (input !== '' || input !== null || input.toLowerCase() !== 'q'){
        todos.push(input);
        console.log('Your list is added!')
        console.log("===Here is youre to do list!===")
            todos.forEach(list =>{
                console.log(list);
            });
        console.log("===============================")
        break;
    }
}

console.log('OK QUIT THE APP');