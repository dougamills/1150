/*
SWITCH STATEMENTS
*/

let friend = 'Kenn';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdogh bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard');
        break;
    case 'Aleck':
        console.log('hey alecx, how many magic cards do you own?');
        break;
    default:
        console.log(`i'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yepp is not a string or number');
}

