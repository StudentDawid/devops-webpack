import ToDo from "./todo";
import '../scss/main.scss';

function logSomething(text) {
    console.log(`Hello ${text}`);
}

const name = 'Podyplomowe';
logSomething(name);

const todo = new ToDo();