
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BST {
  constructor(){
    this.root = null;
  }

  add(data){
    const node = this.root;
    
    if (node === null) {
      this.root = new Node(data);
      return;
    }
    else{
      this.searchTree(this.root,data);
    }
  }
  searchTree(node,data){
    /** Check if Left / right
     *  if Left/Right === null -> create a new Node
     * **/
    if(data > node.data){
      if(node.right === null){
        node.right = new Node(data);
        return;
      }
      else if(node.right !== null){
        this.searchTree(node.right,data)
      }
    }
    else if(data < node.data){
      if(node.left === null){
        node.left = new Node(data);
        return;
      }
      else if(node.left !== null){
        this.searchTree(node.left,data)
      }
    }
    else{
      return null
    }
  }

  /** Traverse to the left till its null**/
  findMin(){
    let cursor = this.root;
    while(cursor.left !== null) {
      cursor = cursor.left;
    }
    return cursor.data;
  }

  /** Traverse to the right till its null**/
  findMax(){
    let cursor = this.root;
    while(cursor.right !== null) {
      cursor = cursor.right;
    }
    return cursor.data;
  }

  find(data){
    let node = this.root;
    if(data > node){
      node = node.right;
    }
    else if(data < node){
      node = node.left
    }
    else{
      return null;
    }
    
  }

}


/** Driver Code **/
const bst = new BST();



bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log("Root ",bst.root);
console.log("Min: ",bst.findMin());
console.log("Max:",bst.findMax());
console.log("Find 7: ",bst.searchTree(7));