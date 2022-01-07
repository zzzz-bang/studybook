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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res=[];
    if(!root) return res;
    let stack=[root];
    while(stack.length){
        let leverList=[];
        let length=stack.length
        for(let i=0;i<length;i++){
            let node=stack.shift()
            leverList.push(node.val);
            node.left&&stack.push(node.left);
            node.right&&stack.push(node.right)
        }
        res.push(leverList)
    }
    return res
};