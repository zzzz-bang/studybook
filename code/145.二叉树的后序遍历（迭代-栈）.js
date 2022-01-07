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
 var postorderTraversal = function(root) {
    //迭代
    let res=[];
    if(!root) return res;
    let stack=[root],cur=null;
    while(stack.length){
        cur=stack.pop();
        res.push(cur.val)
        cur.left&&stack.push(cur.left)
        cur.right&&stack.push(cur.right)
    }
    return res.reverse()
};