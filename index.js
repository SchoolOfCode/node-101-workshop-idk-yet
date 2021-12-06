let myCollection = [{
        name: "School of Code mug",
        count: 1,
        whatILike: "It has my cute pixel character on it!",
    },
    {
        name: "School of Code hat",
        count: 2,
        whatILike: "An often overlooked fashion accessory",
    },
    {
        name: "School of Code pillow",
        count: 1,
        whatILike: "Eat. Sleep. Code. Repeat :)",
    },
];

// console.log(myCollection);

function describeItem(item) {
    item.forEach((element) => {
        if (element.count > 1) {
            console.log(
                `I have ${element.count} ${element.name}s. Here's what I like about them: ${element.whatILike}.`
            );
        } else {
            console.log(
                `I have a ${element.name}. Here's what I like about it: ${element.whatILike}`
            );
        }
    });
}

// describeItem(myCollection);

// const stupid = [a, b, c, d, e];

function describeCollection(cookie) {
    cookie.forEach((element) => {
        describeItem(myCollection);
    });
}
describeCollection(myCollection);
// describeCollection(stupid);

// function epicTeam() {
//     const favPlayer = "omnom";
//     const somethingElse = "lol";
//     console.log("kinda Epic");
// }
// function epicTeam2(pens, paper) {
//     console.log(`${pens} are better than ${paper}`);
// }

// epicTeam2();
// epicTeam();