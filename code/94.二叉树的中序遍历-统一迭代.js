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
    let res=[];
    if(!root) return res;
    let stack=[root];
    while(stack.length){
        let node=stack.pop();
        if(!node){
            res.push(stack.pop().val)
        }else{
            node.right&&stack.push(node.right);
            stack.push(node);
            stack.push(null);
            node.left&&stack.push(node.left)
        }
    }
    return res
};
