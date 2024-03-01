const data = [{id:3, name: "Abul", address: "kochu khet"}];
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id : 1, name: "lenove", price: 65000},
        {id: 2, name: 'apple leptop', price: 165000}
    ]
}
console.log(products["data"][1].price);


const user = {
    id: 5001,
    name: "Imran",
    address: {
        street: {
            first: "dhaka",
            second: "potibag er goli",
            third: "no dorai"
        },
        parmanent: "Khasbatta"
    }
}
console.log(user.address.street.first)


const user2 = {
    id: 5001,
    name: "Imran",
    address: {
        town: {
            city: "Joypurhat",
            country: "Bangladesh"
        },
        parmanent: "Khasbatta"
    }
}
console.log(user2.address.street.second);  // error diba. karon street namer kono object key paini. 
console.log(user2.address.street?.second);  // error na dia undefined diba. karon street er pore optional chain symboll diasi. ja street property thakle kaj korbe. ar na thakle error na dia undefined diba. jake bivinno condition dia check kora jabe.
