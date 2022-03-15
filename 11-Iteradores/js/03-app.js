//El ejercicio de Fizz Buzz - 100 Numeros

//3, 6, 9, 12 vamos a imprimir Fizz
//5, 10, 15, 20 vamos a imprimir buzz
//15, 30, 45 van a imprimir FIZZ BUZZ!

//con i% puedo poner 'el modulo de'
// ARRIBA DE TODO SE TIENE QUE PONER lo que primero se ejecute, la condicion menos comun. x eso pongo fizz buzz.

for (let i = 1; i < 100; i++ ) {
   if ( i % 15 === 0)  {
      console.log( `${i} FIZZ BUZZ!!` );

   } else if( i % 3 === 0 ) {
      console.log(`${i} fizz`)

   } else if ( i % 5 === 0 ) {
      console.log( `${i} buzz` );

   } 
}