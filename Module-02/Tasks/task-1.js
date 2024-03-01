// task-1: console log the secondary school location of Shophia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary: [
                    { school_name: "ABC secondary school" },
                    { location: "St Lorence" }
                ]
            },
        ]
    }
}

const secondarySchool = data.Sophia["study"][1].secondary[1].location;
console.log(secondarySchool);




// task-2: console.log output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

const petersBurg = students[2222]["address"]["city"];
console.log(petersBurg);

const herry = students[3333].name;
console.log(herry)



// task-3: access and then show habluder adda
// show output beginner

let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
const habluderAdda = data2.data[0]["bookDetails"]["name"];
console.log(habluderAdda);

const beginner = data2.data[1]["bookCategory"];
console.log(beginner);