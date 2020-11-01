'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // ROOT - LEFT - RIGHT
    preOrder() {
        const results = [];
        const _walk = (node) => {
            results.push(node.value);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        };

        _walk(this.root);
        return results;
    }
    //  LEFT- ROOT - RIGHT
    inOrder() {
        const results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            results.push(node.value);
            if (node.right) _walk(node.right);
        };

        _walk(this.root);
        return results;
    }
    // LEFT - RIGHT - ROOT
    postOrder() {
        const results = [];
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            results.push(node.value);
        };

        _walk(this.root);
        return results;
    }
}

class BinarySearchTree {
    constructor() {
    }
    add(val){
    }
    contains(val){
        let list = BinaryTree.inOrder();
        return list.contains(val)
    }
    findmaximumvalue(){
        // list = BinaryTree.inOrder();
        // check within the array
        let maxVal = (this.root).value;
        const _walk = (node) => {
            if (node.left) _walk(node.left);
            if (node.value > maxVal){maxVal = node.value}
            if (node.right) _walk(node.right);
        };

        _walk(this.root);
        return maxVal;
    }
}