interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

class Cart {
    private items: CartItem[] = [];

    addProduct(product: Product): void {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ product, quantity: 1 });
        }
    }

    removeProduct(id: number): void {
        this.items = this.items.filter(item => item.product.id !== id);
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    displayCart(): void {
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - $${item.product.price} x ${item.quantity}`);
        });
        console.log(`Total: $${this.calculateTotal()}`);
    }
}

const cart = new Cart();

const product1: Product = { id: 1, name: "Laptop", price: 1000, category: "Electronics" };
const product2: Product = { id: 2, name: "Headphones", price: 200, category: "Accessories" };
const product3: Product = { id: 1, name: "Laptop", price: 1000, category: "Electronics" };

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

cart.displayCart();

cart.removeProduct(2);
cart.displayCart();
