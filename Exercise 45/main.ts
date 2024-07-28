//Exercise:45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface car{
    manufacturer:string
    model:string
    [key: string]: any; // Index signature to allow additional properties
}
function createCar(manufacturer: string, model: string, ...options: [string,any][]): object {
    let car:car = {
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
