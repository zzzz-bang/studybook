/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    if(!root) return null;
    let target=0
    function dfs(root){
        if(!root) return null;
        dfs(root.right)
        if(!--k) target=root.val
        dfs(root.left)
    }
    dfs(root)
    return target
};