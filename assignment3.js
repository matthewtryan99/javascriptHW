// let ary = [-1,5,6,2,-8,10,12,16];
// let posAry = ary.filter(function(element){
//     return element > 0;
// })

// console.log(posAry);

// let evenAry = ary.filter(function(element){
//     return (element % 2) == 0;
// })

// console.log(evenAry);

// let squareAry = ary.map(function(element){
//     return element ** 2;
// })

// console.log(squareAry);

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } 
    ];

    // let newCities = cities.filter(function(element){
    //     return element.temperature < 70.0;
    // })

    // console.log(newCities);

    let cityNames = cities.map(function(element){
        return element.name;
    })

    console.log(cityNames);