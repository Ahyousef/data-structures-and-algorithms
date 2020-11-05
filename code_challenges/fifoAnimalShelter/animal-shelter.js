'use strict'


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

class dog {
    constructor() {
    }
}
class cat {
    constructor() {
    }
}
class AnimalShelter {
    constructor() {
        this.catQueue = new Queue();
        this.dogQueue = new Queue();
    }
    enqueue(animal) {
        if (animal instanceof cat) {
            this.catQueueueue.enqueue(animal);
        } else if (animal instanceof dog) {
            this.dogQueue.enqueue(animal);
        }
    }
    dequeue(pref) {
        if (pref === "cat") {
            if (this.catQueue.isEmpty()) {
                return null
            }
            return this.catQueue.dequeue();
        } else if (pref === "dog") {
            if (this.dogQueue.isEmpty()) {
                return null
            }
            return this.dogQueue.dequeue();
        } else {
            return null;
        }
    }
}
