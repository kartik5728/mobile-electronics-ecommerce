
const phone = {
    _id: "p001",
    name: "Iphone 17 pro max",
    price: 221,
    discount: 12,
    tags: ["Hot", "Featured"],
    bestseller: true,
    specs: {
        stock: 12
    }
}



const displayDetails = (itemId, size) => {

    let phoneCopy = structuredClone(phone);

    if(phoneCopy[itemId]) {
        
    }
}

