function makeTransaction(quantity, pricePerItem) {
    const totalCost = quantity * pricePerItem;
    return `You ordered ${quantity} droids worth ${totalCost} credits!`;
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));