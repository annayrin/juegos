// const matrix = [
//     [0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0],
// ];


// const matrix = [
//     [0, 1, 0, 1, 0, 1],
//     [1, 1, 0, 1, 0, 1],
//     [0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1],
//
// ];


// const matrix = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0, 1],
//     [0, 1, 0, 1, 0, 1],
//     [0, 1, 0, 1, 0, 1],
//     [0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1],
//
// ];


// const matrix = [
//     [1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0],
//     [1, 0, 1, 1, 1, 1],
//     [1, 0, 1, 0, 0, 0],
//     [1, 0, 1, 0, 1, 1],
//     [1, 0, 1, 0, 1, 0],
// ];

// for (let i = 0; i < matrix.length; i++) {
//     indexes.push([])
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 1) {
//
//             indexes[i].push(j)
//         }
//     }
// }
// console.log(indexes)


// [1, 2],
// [2],
// [1, 4],
// [2],
// [1, 4],
// [2],


//the good one

// let isles = 0;

// for (let a = 0; a < matrix.length; a++) {
//
//     for (let b = 0; b <= matrix[a].length - 1; b++) {
//
//         if (a !== matrix.length - 1) {
//             if (b !== matrix[a].length - 1) {
//                 if (matrix[a][b] === 1 && matrix[a][b + 1] !== 1 && matrix[a + 1][b] !== 1) {
//                     ++isles;
//                 }
//             } else {
//                 if (matrix[a][b] === 1 && matrix[a][b - 1] !== 1 && matrix[a + 1][b] !== 1) {
//                     ++isles;
//                 }
//             }
//         } else {
//             if (b === matrix[a].length - 1) {
//                 if (matrix[a][b] === 1) {
//                     ++isles;
//                 }
//             } else {
//                 if (matrix[a][b] === 1 && matrix[a][b + 1] !== 1) {
//                     ++isles;
//                 }
//             }
//         }
//     }
// }
//
// let row = 0;

// for (let a = 0; a < matrix.length; a++) {
//
//     for (let b = 0; b <= matrix[a].length - 1; b++) {
//         if()
//
//     }
// }


// console.log(isles)
// console.log(count)


const matrix = [
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],

]


const first = [1, 1]

const end = [6, 6]

let checked = {}



function way(end, matrix, start) {
    let array = []

    let arr = start

    for (let i = 0; i < arr.length; i++) {

        let item = arr[i]
        // if (!checked.some(a => a[0] === item[0] && a[1] === item[1])) {
        if ( checked[`${item[0]}x${item[1]}`] !== 2 ) {

            if (item[0] !== matrix.length-1 && matrix[item[0] + 1][item[1]] !== 1 && matrix[item[0] + 1][item[1]] !== undefined) {
                array.push([item[0] + 1, item[1]])
            }
            if (item[0] !== 0 && matrix[item[0] - 1][item[1]] !== 1 && matrix[item[0] - 1][item[1]] !== undefined) {
                array.push([item[0] - 1, item[1]])
            }
            if (item[1] !== matrix[i].length-1 && matrix[item[0]][item[1] + 1] !== 1 && matrix[item[0]][item[1] + 1] !== undefined) {
                array.push([item[0], item[1] + 1])
            }
            if (item[1] !== 0 && matrix[item[0]][item[1] - 1] !== 1 && matrix[item[0]][item[1] - 1] !== undefined) {
                array.push([item[0], item[1] - 1])
            }


        }
        checked[`${item[0]}x${item[1]}`] = 2

    }

    if (array.some(item => item[0] === end[0] && item[1] === end[1])) {
        console.log( "true")
    } else if (array.length === 0) {
        console.log( "false")
    } else {
        way(end, matrix, array)
    }


}

way(end, matrix, [first])

