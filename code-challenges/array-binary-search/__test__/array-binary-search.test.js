const BinarySearch = require( '../array-binary-search');

let arrayOfThousand = []
for(let i = 0; i <= 1000; i++){
    arrayOfThousand[i] = i;
}

describe('BinarySearch',()=>{
    it('Returns index of val in array',()=>{
        expect(BinarySearch([1,2,3,4,5],4)).toEqual(3)
    })
    it('Returns index of val in big arrays',()=>{
        expect(BinarySearch(arrayOfThousand,400)).toEqual(400)
    })
    it('Returns -1 if val is not in array',()=>{
        expect(BinarySearch([1,2,3,4,5],100)).toEqual(-1)
    })
})