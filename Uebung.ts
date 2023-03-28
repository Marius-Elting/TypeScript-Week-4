// import * as readline from "readline"


// ÜBUNG 1

type moves = "moveLeft" | "moveRight" | "moveUp" | "moveDown"


// ÜBUNG 2


const performAction = (input: moves) => {
    return `Es wurde die Aktion ${input} ausgeführt`
}

performAction("moveRight")

// ÜBUNG 3
type position = [number, number]
const currentPosition: position = [0, 0]

const performRealAction = (currentPosition: position, input: moves): position => {
    switch (input) {
        case "moveLeft":
            break
        case "moveRight":
            break
        case "moveUp":
            break
        case "moveDown":
            break
    }
    if (input === "moveDown" && currentPosition[1] < 7) {
        currentPosition[1] += 1
    } else if (input === "moveLeft" && currentPosition[0] > 0) {
        currentPosition[0] -= 1
    } else if (input === "moveRight" && currentPosition[0] < 7) {
        currentPosition[0] += 1
    } else if (input === "moveUp" && currentPosition[1] > 0) {
        currentPosition[1] -= 1
    } else {
        return currentPosition
    }
    return currentPosition
}
performRealAction(currentPosition, "moveUp")
performRealAction(currentPosition, "moveRight")
performRealAction(currentPosition, "moveRight")
performRealAction(currentPosition, "moveRight")
performRealAction(currentPosition, "moveRight")


// ÜBUNG 4

// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

type fieldType = "empty" | "wall" | "treasure"

const playingField: fieldType[][] = [
    ["empty", "empty", "empty", "empty", "empty", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "treasure", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall"],
    ["empty", "wall", "wall", "wall", "wall", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
];

let finished: boolean = false


// function runGame(
//     startingPosition: position,
//     playingField: fieldType[][]
// ): void {
//     console.log("Current Positon: " + startingPosition);
//     console.log(
//         "Gebe einen der folgenden Befehle ein: links, rechts, oben, unten"
//     );
//     let currentPosition = startingPosition;
//     rl.question("Richtung: ", (answer) => {
//         switch (answer) {
//             case "links":
//                 break
//             case "rechts":
//                 break
//             case "oben":
//                 break
//             case "unten":
//                 break
//         }
//         if (answer === "unten" && currentPosition[1] < 7) {
//             currentPosition[1] += 1
//         } else if (answer === "links" && currentPosition[0] > 0) {
//             currentPosition[0] -= 1
//         } else if (answer === "rechts" && currentPosition[0] < 7) {
//             currentPosition[0] += 1
//         } else if (answer === "oben" && currentPosition[1] > 0) {
//             currentPosition[1] -= 1
//         } else {
//             currentPosition
//         }
//         runGame(currentPosition, playingField);
//     });
// }


// runGame([0, 0], playingField)


const body: HTMLElement = document.getElementById("body");
const outputP: HTMLElement = document.getElementById("output")
const writeInHTML = (curPos: position) => {
    for (let i in playingField) {
        for (let j in playingField[i]) {
            const div: HTMLElement = document.createElement("div");
            const className: string = `Row${i}`;
            if (playingField[i][j] === "wall") {
                // div.classList.add("wall")
            } else if (playingField[i][j] === "treasure") {
                div.classList.add("treasure")
            }
            if (curPos[1] === Number(i) && curPos[0] === Number(j)) {
                div.classList.add("player")
            }
            div.classList.add(className)
            div.classList.add("kiste")
            body.appendChild(div);
        }
    }
};

let playerPosition: position = [0, 0]


const checkPos = (pos: position) => {
    console.log(playingField[pos[1]][pos[0]])
    if (playingField[pos[1]][pos[0]] === "wall") {
        return "error"
    } else if (playingField[pos[1]][pos[0]] === "treasure") {
        return "winner"
    } else {
        return pos
    }
}

const removeField = () => {
    const kisten: Array<any> = Array.from(document.getElementsByClassName("kiste"))
    kisten.forEach(kiste => {
        body.removeChild(kiste)
    })
}

document.addEventListener("keypress", (e) => {
    console.log("LACHS", playerPosition)

    const curPoss: position = [...playerPosition]
    let way: string = ""
    switch (e.key) {
        case "a": way = "links"
            break;
        case "d": way = "rechts"
            break;
        case "w": way = "oben"
            break;
        case "s": way = "unten"
            break;
    }
    if (way === "unten" && curPoss[1] < 7) {
        curPoss[1] += 1;
    }
    else if (way === "links" && curPoss[0] > 0) {
        curPoss[0] -= 1;
    }
    else if (way === "rechts" && curPoss[0] < 7) {
        curPoss[0] += 1;
    }
    else if (way === "oben" && curPoss[1] > 0) {
        curPoss[1] -= 1;
    }
    else {
        curPoss;
    }
    const result: string | number[] = checkPos(curPoss)
    let msg: string;
    if (result === "error") {
        msg = "There is some big in the way"
        outputP.innerHTML = msg
        return
    } else if (result === "winner") {
        msg = "Winner Winner Chicken Dinner"
        outputP.innerHTML = msg
        playerPosition = [0, 0]
        removeField()
        alert("Winner Winner Chicken Dinner")
        writeInHTML([0, 0])
    } else {
        msg = "New move to the " + way
        outputP.innerHTML = msg
        playerPosition = curPoss
        removeField()
        writeInHTML(playerPosition);
    }
})


writeInHTML(playerPosition);


export { }