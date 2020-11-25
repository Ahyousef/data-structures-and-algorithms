import ll from "../listing/linked-list"

class HashTable {
    constructor(size){
this.size = size;
this.storage = new Array(size)
    }
    hash(key){
        let sum = key.toString().split('').reduce((value,letter)=>{
            return value + letter.charCodeAt(0);},0);
        return (sum*23) % this.size;
        }
    add(key,val){
        let index = this.hash(key);
        if (!this.storage[index]){
            const LinkedList = new ll();
            LinkedList.append({[key]:val});
            this.storage[index] = LinkedList
        }
        else{
            this.storage[index].append({[key]:val});
        }
    }
    get(key){
        let index = this.hash(key);
        if (!this.storage[index]){
            return null
        }
        let currentNode = this.storage[index].head;
        while (currentNode.value){
            if (currentNode.value[key]){
                return currentNode.value[key];
            }
            currentNode = currentNode.next;
            if (!currentNode){
                return null
            }
        }
    }
    contain(key){
        let index = this.hash(key);
        if (!this.storage[index]){
            return false
        }
        else{
            let currentNode=this.storage[index].head;
            while (currentNode.value){
                if (currentNode.value[key]){
                    return true
                }
                currentNode = currentNode.next;
            }
            return false
        }
    }
    }