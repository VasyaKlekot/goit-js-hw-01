function getElementWidth(content, padding, border) {
    const contentWight = parseFloat(content);
    const paddingWight = parseFloat(padding);
    const borderWight = parseFloat(border);

    return contentWight + paddingWight * 2 + borderWight * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200