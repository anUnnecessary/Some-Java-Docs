const names = ['abul', 'sabul', 'dabul', 'kabul', 'dabul', 'abul', 'sabul', 'dabul', 'kabul', 'dabul']

function removeDuplicateNames(number) {
    const unique = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicateNames(names);
console.log(uniqueNames);