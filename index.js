
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
  findMin(node){
    node = node || this.root
    while(node.left !== null) {
      node = node.left;
    }
    return node;
  }

  /** Traverse to the right till its null**/
  findMax(node){
    node = node || this.root
    while(node.right !== null) {
      node = node.right;
    }
    return node;
  }

  /** Return Current Node that matches data **/
  find(data,node){
    node = node || this.root;
    while(node.data !== data){
      
      if(data > node.data){
        node = node.right
      }
      else if(data < node.data){
        node = node.left
      }
      
      if(node === null) return null;
    }
    return node

  }
  remove(data,node){
    // let node = this.root;
    node = node || this.root


    if(node === null) return;

    if(data < node.data){
      this.remove(data,node.left);
    }
    else if(data > node.data){
      this.remove(data,node.right);
    }
    else{
      // Node to Delete has been found
      //Case 0: no children ->
      if(node.left === null && node.right === null){
          node = null;
          return;
      }
      //Case 1: 1 Children
      // Delete current node and replace with the 1 child
      else if(node.left === null && node.right !== null){
        let temp = node;
        node = node.right;
        temp = null;
        return node;
      }
      else if(node.right === null && node.left !== null){
        let temp = node;
        node = node.left;
        temp = null;
        return node;
      }
      //Case 2: 2 children
      // Find a Node with no children and replace
      // Replace with Min in right or Max in left
      else{
        //Max in left
        let temp = this.findMax(node.left);
        node.data = temp.data
        return node;
      }
    }
  }
  findMinHeight(node) {
    /** If node is not specified = node is undefined **/
    node === undefined? node = this.root: node = node;

    if (node == null) {
        return 0;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
  
    return (left < right)? left+1: right+1  
  }

  findMaxHeight(node){
    /** If node is not specified = node is undefined **/
    node === undefined? node = this.root : node = node;
    
    // Reach Max height;
    if (node == null) {
        return 0;
    }
    else{
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
    
      return (left < right)? left+1: right+1  
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
bst.add(24);
bst.add(21);
bst.add(19);
bst.add(18);
bst.add(23);

console.log("Root ",bst.root);
console.log("Min: ",bst.findMin().data);
console.log("Max:",bst.findMax().data);
console.log("Find 50(Not in Tree) : ",bst.find(50));
console.log("Find 22(In Tree): ",bst.find(22));
bst.remove(22);
console.log("Remove 22(Not in Tree): ",bst.find(22));
console.log("Min Height of Tree: ",bst.findMinHeight());