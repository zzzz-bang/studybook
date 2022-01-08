/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
        let length=stack.length;
        let leverList=[];
        for( let i=0;i<length;i++){
            let node=stack.shift();
            leverList.push(node.val);
            node.left&&stack.push(node.left);
            node.right&&stack.push(node.right)
        }
        res.push(leverList)
    }
    return res
};
