class TrieNode {
    constructor() {
    this.children = {}
    this.endWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

Trie.prototype.insert = function(word) {
    let current = this.root
    for(let cha of word) {
        if(!current.children[cha]) {
             current.children[cha] = new TrieNode()
        } 
        current = current.children[cha]
    }
    current.endWord = true
};

Trie.prototype.search = function(word) {
    let current = this.root
    for(let cha of word) {
        if(!current.children[cha]) {
            return false
        }
        current = current.children[cha]
    }
    return (current.endWord == true) ? true : false
};

Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    for(let cha of prefix) {
        if(!current.children[cha]) {
            return false
        }
        current = current.children[cha]
    }
    return true
};
