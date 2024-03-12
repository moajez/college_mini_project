// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isWord = false;
//     }
//     }
    
//     class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }
    
//     insert(word) {
//         let node = this.root;
//         for (let i = 0; i < word.length; i++) {
//         if (!node.children[word[i]]) {
//             node.children[word[i]] = new TrieNode();
//         }
//         node = node.children[word[i]];
//         }
//         node.isWord = true;
//     }
    
//     suggestHelper(root, list, curr) {
//         if (root.isWord) {
//         list.push(curr);
//         }
//         if (!Object.keys(root.children).length) {
//         return;
//         }
//         for (let child in root.children) {
//         this.suggestHelper(root.children[child], list, curr + child);
//         }
//     }
    
//     suggest(prefix) {
//         let node = this.root;
//         let curr = "";
//         for (let i = 0; i < prefix.length; i++) {
//         if (!node.children[prefix[i]]) {
//             return [];
//         }
//         node = node.children[prefix[i]];
//         curr += prefix[i];
//         }
//         let list = [];
//         this.suggestHelper(node, list, curr);
//         return list;
//     }
//     }
    
//     let words = ["hello", "dog", "hell", "cat", "a", "hel","help","helps","helping"];
//     let trie = new Trie();
//     words.forEach((word) => trie.insert(word));
//     // console.log(trie.suggest("hel"));

//     let prefix = prompt("Please enter a prefix:");
//     let suggestions = trie.suggest(prefix);
//     console.log(suggestions);