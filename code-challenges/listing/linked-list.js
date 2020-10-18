'use strict'

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        const node = new Node(val)
        // If head is null, insert value
        if (!this.head) {
            this.head = node;
            return this.head
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node;
        return this.head;

    }
    includes(val) {
        let currentNode = this.head;
        if (currentNode.value === val) {
            return true;
        };
        while (currentNode.next) {
            currentNode = currentNode.next;
            if (currentNode.value === val)
                return true;
        }
        return false;
    }
    toString() {
        try {
            let currentNode = this.head;
            let result = ""
            result = `{${result}${currentNode.value}} -> `;
            while (currentNode.next) {
                currentNode = currentNode.next
                result = `${result}{${currentNode.value}} -> `;
            }
            result = `${result}NULL`;
            return result;
        }
        catch (err) { console.log('Empty list') }
    }
    append(val) {
        const node = new Node(val)
        // If head is null, insert value
        if (!this.head) {
            this.head = node;
            return this.head
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node;
        return this.head;

    }
    insertBefore(val, newVal) {
        const node = new Node(newVal)
        let currentNode = this.head;
        if (currentNode.value === val) {
            node.next = currentNode;
            this.head = node;
            return this.toString()
        }
        let nextNode;
        while (currentNode.next) {
            nextNode = currentNode.next;
            if (nextNode.value === val) {
                node.next = nextNode;
                currentNode.next = node;
                return this.toString()
            }
            currentNode = nextNode;
        }
        return false;
    }
    insertAfter(val, newVal) {
        const node = new Node(newVal);
        let currentNode = this.head;
        if (currentNode.value == val) {
            node.next = currentNode.next
            currentNode.next = node
            return this.toString()
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
            if (currentNode.value == val) {
                node.next = currentNode.next
                currentNode.next = node
                return this.toString()
            }
        }
    }

}

module.exports = LinkedList;