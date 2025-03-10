// Destructuring
var array = [11,22,33,44];
var [x,y]=array; //x=11; y=22
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);



// object
 const person = {
    name: "Hai Son",
    age: 20,
    city: "Ha Noi"
 };

 console.log(person.name);//✅ Hai Son
 console.log(person.age);// ✅ 20

 const {name,city} = person;
 console.log(name); //✅ Hai Son
 // console.log(age); //✅ 20
 console.log(city); //✅ Ha Noi
