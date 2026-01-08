const products = {
    1: 'Laptop',
    2: 'Telefoon',
    3: 'Tablet'
};

export function getProductName(productId) {
    return products[productId] || 'Onbekend product';
}