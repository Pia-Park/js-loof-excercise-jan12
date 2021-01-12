let input = prompt('What would you like to do?', '');

//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];



//start with a while loop that checks for quit input
while(input.toLowerCase() !== 'q'){
    //if else conditions
    if(input === '' || input === null){
        alert("Please Enter the list!");
        input = prompt('What would you like to do?', '');
    } else if(input.toLowerCase() === 'new'){
        input = prompt('Enter the list you want to add', '');
        todos.push(input);
        console.log('Your list is added!');
        input = prompt('What would you like to do?', '');
    } else if(input.toLowerCase() === 'list'){
        console.log("===Here is youre to do list!===")
        todos.forEach(list =>{
            console.log(todos.indexOf(list) + " " + list);
        });
        console.log("===============================")
        input = prompt('What would you like to do?', '');
    } else if(input.toLowerCase() === 'delete'){
        let deleteList = prompt('Enter the number of list that you want to delete.', '');
        todos.splice(todos.indexOf(deleteList), 1);
        console.log("your list is deleted!");
        input = prompt('What would you like to do?', '');
    }

}

console.log('OK QUIT THE APP');


// switch(input){
//     case "new" : 
//     todos.push(input);
//     console.log('Your list is added!')
//     break;
    
//     case "list" : 
//     console.log("===Here is youre to do list!===")
//     todos.forEach(list =>{
//         console.log(todos.indexOf(list) + " " + list);
//     });
//     console.log("===============================")
//     break;

//     case "delete" : 
//     let deleteList = prompt('Enter the number of list that you want to delete.');
//     for(let i = 0; i < todos.length; i++){
//         if(deleteList === i){
//             todos.reduce(i);
//             console.log("your list is deleted");
//         } else {
//             alert("Enter the correct number!");
//             deleteList = prompt('Enter the number of list that you want to delete.');
//         }
//     }

// }
// } else {
// todos.push(input);
// console.log('Your list is added!')
// console.log("===Here is youre to do list!===")
// todos.forEach(list =>{
//     console.log(list);
// });
// console.log("===============================")
// break;
// }
// } 