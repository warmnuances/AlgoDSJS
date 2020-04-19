const BST = require('./BST');
const Graph = require('./graph');
const Trie = require('./Trie');



// function printBST(){
//   /** Driver Code **/
//   const bst = new BST();


//   bst.add(9);
//   bst.add(4);
//   bst.add(17);
//   bst.add(3);
//   bst.add(6);
//   bst.add(22);
//   bst.add(5);
//   bst.add(7);
//   bst.add(20);
//   bst.add(24);
//   bst.add(21);
//   bst.add(19);
//   bst.add(18);
//   bst.add(23);

//   console.log("Root ",bst.root);
//   console.log("Min: ",bst.findMin().data);
//   console.log("Max:",bst.findMax().data);
//   console.log("Find 50(Not in Tree) : ",bst.find(50));
//   console.log("Find 22(In Tree): ",bst.find(22));
//   bst.remove(22);
//   console.log("Remove 22(Not in Tree): ",bst.find(22));
//   console.log("Min Height of Tree: ",bst.findMinHeight());
//   console.log("Max Height of Tree: ",bst.findMaxHeight());

//   console.log("-----------------------------------------")
//   console.log("Print Tree inOrder (LNR): ",bst.inOrder());
//   console.log("Print Tree preOrder (NLR): ",bst.preOrder());
//   console.log("Print Tree postOrder (RNL): ",bst.postOrder());
//   console.log("Print Tree levelOrder (BFS): ", bst.levelOrder());


//   console.log("DELETE", bst.remove(18))
// }


function printGraph(){
  // const graph = new Graph();
  // graph.addVertex('0')
  // graph.addVertex('1')
  // graph.addVertex('2')
  // graph.addVertex('3')
  // graph.addVertex('4')

  // graph.addEdge('0', '1')
  // graph.addEdge('0', '3')
  // graph.addEdge('0', '4')
  // graph.addEdge('1', '2')
  // graph.addEdge('1', '4')
  // graph.addEdge('3', '1')
  // graph.addEdge('3', '4')
  // graph.addEdge('4', '2')

  // console.log(graph);
  // console.log("-------------- PRINT ALL PATHS ------------");
  // console.log(graph.dfs());
}



function printTrie(){
  const trie = new Trie();

  trie.insert('ball'); 
  trie.insert('bat'); 
  trie.insert('doll'); 
  trie.insert('dork'); 
  trie.insert('do'); 
  trie.insert('dorm')
  trie.insert('send')
  trie.insert('sense')
 

  console.log("Search: 'do' -> ", trie.search('do'))
  console.log("Search: 'dod' -> ", trie.search('dod'))
  console.log("StartWith: 'ba' -> ", trie.startsWith('ba'))
  console.log("StartWith: 'a' -> ", trie.startsWith('aa'))

  console.log("---------Finding Longest Common Prefix-------------")

  const trie2 = new Trie();
  trie2.insert('apple'); 
  trie2.insert('ape'); 
  trie2.insert('april'); 

  console.log(trie2.longestCommonPrefix())

}


printTrie();