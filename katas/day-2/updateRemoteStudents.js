function updateRemoteStudents(arr) {
    const copyArray = [...arr]
    for(let i = 0; i < copyArray.length; i++) {
        const keyToAdd = 'location';
        const keyValue = 'remote';
        if(!(keyToAdd in copyArray[i])){
            copyArray[i][keyToAdd] = keyValue
        }
        
    }
    return copyArray;
}

module.exports = updateRemoteStudents;
