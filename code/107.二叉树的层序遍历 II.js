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
 var levelOrderBottom = function(root) {
    let res=[];
    if(!root) return res;
    let queue=[root];
    while(queue.length){
        let length=queue.length;
        let leverList=[];
        for(let i=0;i<length;i++){
            let node=queue.shift();
            leverList.push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right)
        }
        res.unshift(leverList)
    }
    return res
};