function validExp(tokenObj) {
    const now = new Date()  
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)  
    return secondsSinceEpoch <= tokenObj.exp
}

export default validExp