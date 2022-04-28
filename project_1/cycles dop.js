"user strict";
//вложенные циклы...

for( let i = 0; i < 3; i++) {
    console.log(i);
    for( let j = 0; j < 3; j++) {
        console.log(j);
}
}
// задача триугольник

let result = '';
const x = 9;
for(let i = 1; i < x; i++) {

        for(let j = 0; j < i; j++) {
            result +='*';
        }
    result +='\n';
}
console.log(result);


// остановка вложенного цыкла

first: for( let i = 0; i < 3; i++) {
    console.log('First level:', i );

    for( let j = 0; j < 3; j++) {
        console.log('Second level:', j );

        for( let k = 0; k < 3; k++) {
            if(k === 2) {break first;} //метка first://  
                  
        
        console.log('Third level:', k);
    }
}
}