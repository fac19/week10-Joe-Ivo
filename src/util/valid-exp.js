function validExp(tokenObj) {
    const now = new Date()  
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)  
    return secondsSinceEpoch <= tokenObj.exp
}

function relativeToAbsoluteTime () {
    const now = new Date()  
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)
    return secondsSinceEpoch + 3600; 
}

export {validExp, relativeToAbsoluteTime}