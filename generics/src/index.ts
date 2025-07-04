// // const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "Hacked!";

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// function identity(item:any):any{
//     return item;
// }
interface Cat {
    name: string,
    breed: string
}

function identity<T>(item: T): T {
    return item;
}

// identity<number>(7);
// identity<string>("hello");
// identity<Cat>()

function getRandomElement<T>(list: T[]): T {
    const randIxd = Math.floor(Math.random() * list.length);
    return list[randIxd];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);

getRandomElement([1, 2, 3, 4]);
// [4, 5, 6, 7]
// [true, false, true]
// [{}, {}, {}]