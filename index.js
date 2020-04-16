
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
          console.log("Enter");
          node = null;
          return;
      }
      //Case 1: 1 Children
      // Delete current node and replace with the 1 child
      else if(node.right !== null){
        let temp = node;
        node = node.right;
        temp = null;
        return node;
      }
      else if(node.left !== null){
        let temp = node;
        node = node.left;
        temp = null;
        return node;
      }
      //Case 2: 2 children
      // Find a Node with no children and replace
      // Replace with Min in right or Max in left
      else{
        //Min in right

        let temp = this.findMin(node.right);
        node.data = temp.data
        temp = null

        // this.remove(temp.data, node);

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

    /** Return the smaller one**/
    return (left < right)? left+1: right+1  
  }

  findMaxHeight(node){
    /** If node is not specified = node is undefined **/
    node === undefined? node = this.root : node = node;

    
    
    // Reach Max height;
    if (node == null) {
        return -1;
    }
    else{
      let left = this.findMaxHeight(node.left);

      let right = this.findMaxHeight(node.right);

       /** Return the larger one**/
      return (left >  right)? left+1: right+1  
    }
  }
  /** Stack for Javascript FIFO
   *  @param push
   *  @param pop
   * **/

  // LNR left->node->right (DFS)
  inOrder(){
    /** If tree does not exist -> return null**/
    let stack = [];

    if(this.root === null){
      return null;
    }
    else{
      inOrderUnit(this.root,stack);
    }
  
    /** Helper Function**/
    function inOrderUnit(node){
      //visit left
      // if(node.left)
      if(node != null){
        //push all the left to stack then current thn right
        inOrderUnit(node.left);
        stack.push(node.data);
        inOrderUnit(node.right)
      }

    }
    return stack;
  }

  // Node->left->right (DFS)
  preOrder(node){
     /** If tree does not exist -> return null**/
    let stack = [];

    if(this.root === null){
      return null;
    }
    else{
      preOrderUnit(this.root,stack);
    }
  
    /** Helper Function**/
    function preOrderUnit(node){
      //visit left
      // if(node.left)
      if(node != null){
        stack.push(node.data);
        preOrderUnit(node.left);
        preOrderUnit(node.right);
      }

    }
    return stack;
  }

  // right->node->left (DFS)
  postOrder(node){
     let stack = [];

    if(this.root === null){
      return null;
    }
    else{
      postOrderUnit(this.root,stack);
    }
  
    /** Helper Function**/
    function postOrderUnit(node){
      //visit left
      // if(node.left)
      if(node != null){
        postOrderUnit(node.right);
        stack.push(node.data);
        postOrderUnit(node.left);
      }

    }
    return stack;
  }
  // BFS Have to use a queue
  /** Queue Data type LiFo
   *  @param push() || unshift(data)
   *  @param shift(data) || pop()
   * **/
  levelOrder(node){
     let queue = [];
     let result = [];

    if(this.root === null){
      return null;
    }
    else{
      queue.push(this.root);
      levelOrderUnit(this.root);
    }
    return result;

    function levelOrderUnit(node){
      
      while(queue.length != 0){
        let level = [];
        //Queue.length represents current queue size
        let noOfElementsInLevel = queue.length;
        
      

        //I will push a node which has left and right and put into queue

        while(noOfElementsInLevel != 0){
          //Get the current Node and return all the Nodes that are directly connected to it
          let curr = queue.shift();
          level.push(curr.data);


          if(curr.left !== undefined && curr.left !== null){
            queue.push(curr.left);
            
          }
          if(curr.right !== undefined && curr.right !== null){
            queue.push(curr.right);
          }


          noOfElementsInLevel--;

        }
        result.push(level);

      }
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
console.log("Max Height of Tree: ",bst.findMaxHeight());

console.log("-----------------------------------------")
console.log("Print Tree inOrder (LNR): ",bst.inOrder());
console.log("Print Tree preOrder (NLR): ",bst.preOrder());
console.log("Print Tree postOrder (RNL): ",bst.postOrder());
console.log("Print Tree levelOrder (BFS): ", bst.levelOrder());


console.log("DELETE", bst.remove(18))