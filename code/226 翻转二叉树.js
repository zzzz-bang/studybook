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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return null
    change(root);
    root.left&&invertTree(root.left);
    root.right&&invertTree(root.right)
    return root
};

function change(root){
    let temp=root.left;
    root.left=root.right;
    root.right=temp
}