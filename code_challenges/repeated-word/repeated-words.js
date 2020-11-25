let testString = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
import HashTable from "../hashtables/hashtable"

/* const repeatedWords = function(string){
    const regex = /[!"#$%&'()*+,-./’:;<=>?@[\]^_`{|}~]/g;
    let results = string.replace(regex,'').split(' ')
    for (let index = 0; index < results.length; index++) {
        for (let i = 1+index; i < results.length; i++) {
            if (results[i]== results[index]){
                return results[i]
            }
        }
        
    }
    return false
}
*/

const repeatedWords = function (string) {
    const regex = /[!"#$%&'()*+,-./’:;<=>?@[\]^_`{|}~]/g;
    let results = string.toLowerCase().replace(regex, '').split(' ')
    let hashTable = new HashTable(1024);
    results.forEach(element => {
        let bucket = hashTable.add(element, element);
        if (bucket.size > 1) {
            return str[i]
        };
    });
    return false
}
