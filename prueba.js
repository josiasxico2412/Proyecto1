
//objetos para dar el orden de llaves y valores
const KeysAndValues = (obj) => {
    let a = Object.keys(obj);
    let b = Object.values(obj);
    let c = [a, b];
    return c;
}

//lo que va a mostar en la consola del HTML
console.log(KeysAndValues({a: 1, b: 2, c: 3}));
console.log(KeysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(KeysAndValues({key1: true, key2: false, key3: undefined}));
