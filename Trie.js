class Node{
  constructor(){
    this.keys = new Map();
    this.end = false;
  }
  setEnd(){
    this.end = true;
  }
  isEnd(){
    return this.end;
  }
}
class Trie{
  constructor(){
    this.root = new Node();
  }
  // For every char in String, if char does not exist in node create a new node
  insert(string,node){
    node = node || this.root;

    //Base case -> Reach the end of the word
    if(string.length === 0){
      node.setEnd();
      return;
    }
    //Conditions => add character to node
    // if the node does not have the character add
    else if(!node.keys.has(string[0])){
      node.keys.set(string[0],new Node());
      return this.insert(string.substr(1), node.keys.get(string[0]));
    }
    else{
      // if the node does have the character add
      return this.insert(string.substr(1), node.keys.get(string[0]));
    }
    
  }
  //Check word if in Trie
  search(string,node){
    node = node || this.root;

    if(node === null) return false;
    if(string.length === 0 && node.isEnd()){
      return true;
    }
    else{
        //Character exists
      if(node.keys.get(string[0])){
        return this.search(string.substr(1), node.keys.get(string[0]))
      }
      else{
        return false;
      }
    }
  }
  //Check if there is a substring in Trie
  //Check if char exists in key
  //Use substring -> substring returns "" if string does not exist
  startsWith(string,node){
    node = node || this.root
    //base case 
    if(string.length === 0){
      return true;
    }

    if(node.keys.get(string[0])){
      return this.startsWith(string.substr(1),node.keys.get(string[0]));
    }
    else{
      return false
    }
  }
  //e.g. Input: {"apple", "ape", "april"}

}

module.exports = Trie