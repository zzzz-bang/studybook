/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let max=1n,list=[[0n,root]];
    while(list.length){
        let width=list[list.length-1][0]-list[0][0]+1n;
        if(width>max) max=width;
        let temp=[];
        for(let [index,node] of list){
            node.left&&temp.push([index*2n,node.left]);
            node.right&&temp.push([index*2n+1n,node.right])
        }
        list=temp
    }
    return max
};
// @lc code=end

