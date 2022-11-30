// const plus = (x, y) => {
//     return x + y
// }

// const minus = (x, y) => {
//     return x - y
// }

export const plus = (x, y) => {
    return x + y
}

export const plusAsync = (x, y) => {
    debugger
    console.log(x, y)
    setTimeout(function () {
        console.log(x, y)
        return x + y
    }, 1000)
    
}

export const minus = (x, y) => {
    return x - y
}


// module.exports= {
//     plus,//plus:plus
//     minus:minus
// } // old

// export {
//     plus,
//     minus,
// }

export default {
    plus,//should be default
    minus,//should be default
}