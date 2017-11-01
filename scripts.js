var a=2,
    b=2,
    value=((a * a) - (2 * a * b) + (b * b));
//var value=(a-b); 
console.log(value);

if ( value > 0) {
  console.log('wynik dodatni');
//dla wyników ujemnych lub równych zero
} else if (value==0) {
  console.log('masz wynik zero');
} else  {
    console.log('wynik ujemny'); 
}  
