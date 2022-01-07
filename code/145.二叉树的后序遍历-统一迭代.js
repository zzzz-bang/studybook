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
    //使用栈统一迭代法
    let res=[]
    if(!root) return res;
    let stack=[root];
    while(stack.length){
        let node=stack.pop();
        if(!node){
            res.push(stack.pop().val)
        }else{
            stack.push(node);
            stack.push(null);
            node.right&&stack.push(node.right);
            node.left&&stack.push(node.left)
        }
    }
    return res
};
