// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);               //these are simple to compare 
// console.log(2 != 1);

                          // but prob arise here when we compare diff datatypes

// console.log("2" > 1);    here js auto converted "2" => 2 so output: true 
// console.log("02" > 1);

console.log(null > 0);     //equity check == and comparisons >,<,>=,<= work differently
console.log(null == 0);    //comparisons convert null to number, treating it as 0.
console.log(null >= 0);    //thats why null>=0 is true and null>0 is false.
                           
          //same confusion with undefined
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict check => it check not only value but datatype also.

console.log("2" === 2);


//thats why we mostly avoid these types of compares of keeping our code clean. These are the language inconsistency