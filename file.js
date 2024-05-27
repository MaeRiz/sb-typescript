const addition = (x, y) => {
    return x + y;
};
const result = addition(10, 20);
console.log(result);
const damage = (characterToDamage, amount) => {
    characterToDamage.life -= amount;
    return characterToDamage.life;
};
const result_life = damage({ life: 100 }, 12);
console.log(result);
export {};
