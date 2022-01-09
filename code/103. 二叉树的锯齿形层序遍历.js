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
 var zigzagLevelOrder = function(root) {
    let res=[];
    if(!root) return res;
    let queue=[root];
    let level=1;
    while(queue.length){
        let length=queue.length;
        let levelList=[];
        for(let i=0;i<length;i++){
            let node=queue.shift()
            level%2===0?levelList.unshift(node.val):levelList.push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right)
        }
        level++;
        res.push(levelList)
    }
    return res
};