let who = ['mi perro', 'Mi polola', 'el zeus', 'Mi mama'];
let action = ['comio', 'pirde', 'cruzo', 'rompio'];
let what = ['mi tarea', 'las llaves', 'la calle'];
let when = ['antes de clases', 'todo el tiempo', 'solo', 'durante el almuerzo', 'despues del cine'];

function excuses( who, action, what, when){
    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length);
    return who[quien] + " " + action[accion] + " " + what[que]+ " " + when[cuando];
}

document.querySelector('#excuse').innerHTML = excuses(who, action, what, when);