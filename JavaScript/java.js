var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// print John's age
console.log(users[1].age);

// print the name of the first object
console.log(users[0].name);

// print the name and age of each user using a for loop
for (var i = 0; i < users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}


var numPurchase = 0;
for (var donut in glazedDonuts){
  console.log(glazedDonuts[donut].type);
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase++;
  }
  else {
    console.log('not this donut...');
   }
}
console.log(numPurchase);