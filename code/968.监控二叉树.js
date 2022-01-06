/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
    let dfs=(root)=>{
        if(!root){
            return [Math.floor(Number.MAX_SAFE_INTEGER/2),0,0]
        }
        let [la,lb,lc]=dfs(root.left);
        let [ra,rb,rc]=dfs(root.right);
        let a=lc+rc+1;
        let b=Math.min(a,Math.min(la+rb,lb+ra));
        let c=Math.min(a,lb+rb)
        return [a,b,c]
    }
    return dfs(root)[1]
};
// @lc code=end

