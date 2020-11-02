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
        if (!this.top) {
            return "null";
        }
        else {
            let previousNode = this.top;
            this.top = this.top.next;
            previousNode.next = null;
            return previousNode.value;
        }
    }
    peek() {
        if (!this.top) {
            return "empty"
        }
        else {
            return this.top.value
        }
    }
    isEmpty() {
        if (this.top) {
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
            this.front = null;
            this.rear = null;
            return val;
        }
        else {
            let previous = this.front;
            this.front = this.front.next;
            previous.next = null;
            return previous.value;
        }
    }
    peek() {
        if (!this.front && !this.read) {
            return 'null';
        }
        else {
            return this.front.value
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

// Brand new queue class that will internally use 2 stack objects as the input

class PseudoQueue {
    constructor() {
        // Use existing stack class
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }
    enqueue(val) {
        // push val to the queue using first stack 
        return this.firstStack.push(val);
    }
    dequeue() {
        // To dequeue, we move all the elements to the second Stack,
        // pop the top then move them back to the first stack
        let el;
        while (el != 'null') {
            el = this.firstStack.pop(); // use the method that i created, once empty the el becomes 'null'
            if (el != 'null') {
                this.secondStack.push(el);
            }
        }

        let popEl = this.secondStack.pop();

        // after popping the top, return the rest to the first storage;
        // Basically the opposite of the first while loop
        while (el != 'null') {
            el = this.secondStack.pop(); // use the method that i created, once empty the el becomes 'null'
            if (el != 'null') {
                this.firstStack.push(el);
            }
        }
        return `dequeued` 
    }
}