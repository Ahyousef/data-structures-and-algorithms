'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.top) {
            newNode.next = null;
        }
        else {
            newNode.next = this.top;
        }
        this.top = newNode;
        return this.top
    }
    pop() {
        let currentNode = this.top;
        if (!currentNode) {
            return "null";
        }
        else {
            let previousNode = currentNode;
            currentNode = currentNode.next;
            previoutNode.next = null;
            return previoutNode.value;
        }
    }
    isEmpty() {
        let currentNode = this.top;
        if (currentNode) {
            return false;
        } else {
            return true;
        }
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
        }
        else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        return newNode;
    }
    dequeue() {
        if (!this.front && !this.rear) {
            return "null";
        }
        else if (this.rear == this.front) {
            let val = this.rear.value;
            this.rear = null;
            this.front = null;
            return val;
        }
        else {
            let previous = this.front;
            this.front = this.front.next;
            previous.next = null;
            return previous.value;
        }
    }
    isEmpty() {
        if (this.front || this.rear) {
            return false;
        } else {
            return true;
        }
    }
}


class PseudoQueue {
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        
    }
    dequeue(){

    }
}