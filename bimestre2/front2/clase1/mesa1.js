arrayEntrada = [1, 2, 4, 8];

// Manera completa
arrayEntrada.reduce((acum, elemento) => {
    console.log(`${acum} + ${elemento}`);
    acum += elemento;
    return acum;
},0);

console.log('\n');

let suma = 0;
arrayEntrada.forEach(item => {
      if (item !== 1){      
         console.log(`${suma} + ${item}`)
         suma += item; 
     }else{
        suma += item; 
     }
});

console.log('\n');

arrayEntrada.reduce((acum ,element)=>{
    if (element !== 1){      
        console.log(`${acum} + ${element}`)
        acum += element; 
    }else{
       acum += element; 
    }
    return acum;
},0);

console.log( prompt("buenass") );

