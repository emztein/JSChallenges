/* //crear una funcion que retorne una promesa, esa promesa, va a ejecutar una logica .. 
y esa promesa se va a resolver dos segundos despues de haber sido invocada.
//el parametro que reciba debe resolverla
//mifuncion(5) --> return promesa a los dos segundos, resuelve con ese 5
//concepto tradicional de promesas
//y luego conasyncawait */


///practice with callbacks
/* function compareNumberWithCallback(callback, errorCallback, number) {
    const numberToCompare = 5
    if (number === numberToCompare) {
        callback({ number })
    } else {
        errorCallback({ number: number, message: ' number is different' })
    }
}

compareNumberWithCallback((resolveValue) => console.log(resolveValue.number),
    (error) => {
        console.log(error.number + error.message)
    }, 6) */

// practice with promises

/* function compareNumber(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberToCompare = 5
            number === numberToCompare ? resolve(number) : reject('number is different')
        }, 3000)
    })
    return promise
}

compareNumber(6).then((resolveValue) => {
    console.log(resolveValue)
}).catch((resolveValue) => console.log(resolveValue))
 */


//practice with async await

/* const compareNumberPromise = (number) => {
    const numberToCompare = 5
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            number === numberToCompare ? resolve(number) : reject('number is different')
        }, 3000)
    })
    return promise
}

async function makeRequest() {
    try {
        const response = await compareNumberPromise(5)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

makeRequest()
 */


//other examples with promises, promises.all, promises.race

/* const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((responses) => console.log(responses))

Promise.race([recordVideoTwo, recordVideoThree, recordVideoOne]).then((response) => console.log(response)) */