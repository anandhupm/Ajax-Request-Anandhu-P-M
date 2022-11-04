// console.log("Hello from node app");
var passenger = {
    name : "passenger 1",
    email :  'passenger1@mail.com',
    age : 45,
    phone : [12345,1234567]

};
var data = JSON.stringify(passenger);// to convert to string
console.log(data);
var text = JSON.parse(data);
console.log(text);// to conver back