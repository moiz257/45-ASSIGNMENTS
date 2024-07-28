"use strict";
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model
    };
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Call the function with required information and two additional name-value pairs
let car = createCar('Toyota', 'Camry', ['color', 'red'], ['optionalFeature', 'sunroof']);
// Print the object to ensure all information is stored correctly
console.log(car);
