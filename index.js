
let input = prompt("Введіть ціле число N:");


function isValidInteger(value) {
    
    if (value === null || value.trim() === "") {
        return false;
    }
    
    return /^\d+$/.test(value.trim());
}


if (!isValidInteger(input)) {
    console.error("Помилка");
} else {
    
    const N = parseInt(input.trim(), 10);

    
    console.log(`Всі цілі числа, квадрат яких не перевищує ${N}:`);
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        } else {
            break; 
        }
    }
}