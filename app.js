const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let books = ["war and peace", "the Bible", "pride and prejudice", "the Adventure"];

var recursive = function () {
    readline1.question(`MENU:\nPRESS1->show all books\npress2->Add a new book\npress3->quit\n`, (input) => {

        if (input == 1) {

            console.log("...............book name........................")
            books.forEach((el) => {
                console.log(el);
            })
            console.log("..................................................")

            recursive();


        }
        else if (input == 2) {
            readline1.question(`enter book name`, (names) => {
                books.push(names);
                console.log("successfully added")
                recursive();
            })

        }
        else if (input == 3) {
            readline1.question("Are you sure you want to quit - press Y to quit:", (names) => {
                if (names == "Y") {
                    readline1.close()
                }
            })

        }
        else if (input != 1 || input != 2 || input != 3) {
            console.log("You have selected an invalid entry so please press 1, 2 or 3")
            recursive();
        }

    });


}
recursive();
readline1.on("close", function () {
    console.log("Bye BYe!")
})