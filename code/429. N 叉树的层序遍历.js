/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res=[];
    if(!root) return res;
    let queue=[root];
    while(queue.length){
        let length=queue.length;
        let levelList=[];
        for(let i=0;i<length;i++){
            let node=queue.shift();
            levelList.push(node.val);
            for(let j=0;j<node.children.length;j++){
                queue.push(node.children[j])
            }
        }
        res.push(levelList)
    }
    return res
};