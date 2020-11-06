'use strict'

function multiBracketValidation (input){
    let roundOpen = input.match(/\(/g)
    let roundClosed = input.match(/\)/g)
    let squareOpen = input.match(/\[/g)
    let squareClosed = input.match(/\]/g)
    let curlyOpen = input.match(/\{/g)
    let curlyClosed = input.match(/\}/g)
    if (roundOpen){
        roundOpen = roundOpen.length
    }
    if (roundClosed){
        roundClosed = roundClosed.length
    }
    if (squareOpen){
        squareOpen = squareOpen.length
    }
    if (squareClosed){
        squareClosed = squareClosed.length
    }
    if (curlyOpen){
        curlyOpen = curlyOpen.length
    }
    if (curlyClosed){
        curlyClosed = curlyClosed.length
    }
    if ((roundOpen != roundClosed) || (squareOpen != squareClosed)
    || (curlyOpen != curlyClosed)) {
        return false
    }
    return true
}