/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    let list=[]
    function bfs(root){
        if(!root) return;
        list.push(root.val);
        for(let i=0;i<root.children.length;i++){
            bfs(root.children[i])
        }
    }
    bfs(root)
    return list
};
// @lc code=end

