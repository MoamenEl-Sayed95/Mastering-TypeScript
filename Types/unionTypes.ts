let age: number | string = 21;
age = 23;
age = '24';

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
    console.log(`Your are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
    }
    return price * tax;


}

// const nums: number[] = [1, 2, 3, 4]
// const stuff: any[] = [1, 2, 3, 4, true, 'asdas', {}]

// cosnt stuff: (number | string)[] = [1, 2, 3, 'das']
// cosnt stuff: number[] | string[] =['asd', 'asd', 1]

const coords: (Point | Loc)[] = []
coords.push({ lat: 321.213, long: 23.334 })
coords.push({ x: 213, y: 43 })

let zero: 0 = 0;
let mood: "Happy" | 'Sad' | "Happy";
mood = 'Sad';
type DayOfWeek = "Monday" | 'Tuesday' | 'Wednesday' | "Thursday" |
    'Friday' | "Saturday" | "Sunday";

// let today: DayOfWeek = 'weds';

export { };