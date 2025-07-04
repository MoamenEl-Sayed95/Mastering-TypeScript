function getRandomElement=<T,>(list: T[]): T => {
    const randIxd = Math.floor(Math.random() * list.length);
    return list[randIxd];
}