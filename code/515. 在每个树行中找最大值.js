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
 var largestValues = function(root) {
    let res=[];
    if(!root) return res;
    let queue=[root];
    while(queue.length){
        let maxlist=[];
        let length=queue.length;
        while(length--){
            let node=queue.shift();
            maxlist.push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right)
        }
        res.push(Math.max(...maxlist))
    }
    return res
};