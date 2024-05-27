const addition = (x: number, y: number): number => {
    return x + y;
}
const result: number = addition(10, 20);
console.log(result);


// Objects typage

// Or type Character = {...}
interface DefaultCharacter {
    life: number;
}

// Or type Character = DefaultCharacter & {...}
interface Character extends DefaultCharacter {

    // ? = optional
    item?: string;
}

const damage = (characterToDamage: Character, amount: number): number => {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}

const result_life = damage({ life: 100 }, 12);
console.log(result);


export {};