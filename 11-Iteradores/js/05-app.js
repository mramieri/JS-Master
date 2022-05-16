//Al igual que el while, tenemos que inicializar en 0

let i = 1;

do {  


    if ( i % 15 === 0) {          
        console.log(` ${i} FIZZ BUZZ!!`);    
  
     } else if ( i % 3 === 0 ) {
        console.log(` ${i} FIZZ`);
  
     } else if ( i % 5 === 0 ) {
        console.log(` ${i} BUZZ`);
     } 

       i++;
} while ( i < 20 );