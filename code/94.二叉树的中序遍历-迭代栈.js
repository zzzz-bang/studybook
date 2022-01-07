/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    //迭代
    let res=[]
    if(!root) return res;
    let stack=[],cur=root;
    while(stack.length||cur){
        if(cur){
            stack.push(cur);
            cur=cur.left
        }else{
            cur=stack.pop();
            res.push(cur.val)
            cur=cur.right
        }
    }
   return res
};
