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
}

module.exports= LinkedList;