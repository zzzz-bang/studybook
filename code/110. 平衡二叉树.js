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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    function getHeight(node){
        if(!node) return 0;
        let leftHeight=getHeight(node.left);
        let rightHeight=getHeight(node.right);
        if(leftHeight===-1) return -1;
        if(rightHeight===-1) return -1;
        return (Math.abs(leftHeight-rightHeight)>1)?-1:1+Math.max(leftHeight,rightHeight)
    }
   return !(getHeight(root)===-1)
};