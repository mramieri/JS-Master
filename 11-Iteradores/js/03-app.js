//Fizz buzz. numeros del 1 al 100

//multiplos de 3: 3, 6 , 9, FIZZ

//multiplos de 5: 5, 10, 15, BUZZ

//multiplos de 3 y de 5, 15, 30, 45, FIZZ BUZZ


for ( let i = 1; i < 100; i++ ) {
   if ( i % 15 === 0) {                //Esta es la condicion menos comun, la que sucederá menos veces. Entonces la pongo primera!!
      console.log(` ${i} FIZZ BUZZ!!`);   // Otra forma de hacer lo mismo: i % 3 === 0 && i % 5 === 0 Tmb era una opcion

   } else if ( i % 3 === 0 ) {
      console.log(` ${i} FIZZ`);

   } else if ( i % 5 === 0 ) {
      console.log(` ${i} BUZZ`);
   } 
}
   