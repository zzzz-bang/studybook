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
 var averageOfLevels = function(root) {
    let res=[];
    if(!root) return res;
    let queue=[root];
    while(queue.length){
        let length=queue.length;
        let num=0;
        for(let i=0;i<length;i++){
            let node=queue.shift();
            num+=Number(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        res.push((num/length))
    }
    return res
};