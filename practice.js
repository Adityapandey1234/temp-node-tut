//GLOBALS - No WINdOW !!!!

//_dirname - path to current directory
//-filename - filename
//require- function to use modules(commonjs)
//module - info about current module(file)
//process -  info about env where the progra is being

//Commonjs, every file is module(By default)
//Modules- Encapsulated code (only share minimum)

const sushma = "sushma";
const mamta = 'mamta bainerji';
const  sayHi = (name)=>{
  console.log(`hii ${name} how are you`);
}

sayHi("aditya");

sayHi(mamta);

sayHi(sushma);
