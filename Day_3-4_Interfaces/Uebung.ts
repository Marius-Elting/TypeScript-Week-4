
interface Product {
    name: String;
    productId: number;
    imageId?: number;

}

interface Image {
    imageUrl: String;
    imageData: String;
    altText: String;
}

interface Products {
    [productId: number]: Product;
}

interface Images {
    [imageId: number]: Image;
}

const images: Images = {
    1: {
        imageUrl: "https://testImages.com/book",
        imageData: "This is a Book",
        altText: "Sorry could not load this book",
    },
    2: {
        imageUrl: "https://testImages.com/cd",
        imageData: "This is a CD",
        altText: "Sorry could not load this cd",
    },
    4: {
        imageUrl: "https://testImages.com/calculator",
        imageData: "This is a Calculator",
        altText: "Sorry could not laod this Calculator",
    },
};

const products: Products = {
    10: {
        name: "book",
        productId: 10,
        imageId: 1,
    },
    11: {
        name: "cd",
        productId: 11,
        imageId: 2,
    },
    12: {
        name: "laptop",
        productId: 12,
    },
    13: {
        name: "calculator",
        productId: 13,
        imageId: 4,
    },
};

// Übung 2

const generateProducts = (ids: number[]) => {
    const output = []
    for (let i in products) {
        console.log(i)
        if (ids.includes(Number(i))) {
            if (Object.keys(products[Number(i)]).includes("imageId")) {
                output.push(images[products[Number(i)].imageId])
            } else {
                output.push(products[Number(i)])
            }
        }
    }
    return output
}

generateProducts([11, 12])


// ÜBUNG  3


interface Order {
    Ordernumber: number;
    Amount: number;
    ProductIds: number[]
}

interface PayPal {
    email: String;
}

interface Creditcard {
    CCNDA: number
}

type CreditCardOrder = Creditcard & Order

type PayPalOrder = PayPal & Order

function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Contacting Credit Card Company for Order ", order);
}

function processPaypalOrder(order: PayPalOrder): void {
    console.log("Contacting PayPal for Order ", order);
}

function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
    return "ccn" in (order as CreditCardOrder);
};

const OrderLachs = (orders: Array<PayPalOrder | CreditCardOrder>) => {
    orders.forEach((order) => {
        if (isCreditCardOrder(order)) {
            processCreditCardOrder(order)
        } else {
            processPaypalOrder(order)
        }
    })

}


export { }