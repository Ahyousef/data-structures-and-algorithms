import BinaryTree from "../binaryTree/tree"
let testone = new BinaryTree()
let testtwo = new BinaryTree()
function tree_intersection(btone,bttwo){
    let arrayone=btone.preOrder();
    let arraytwo=bttwo.preOrder();
    return arrayone.filter((value)=> arraytwo.includes(value))

}