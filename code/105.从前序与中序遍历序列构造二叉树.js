/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map=new Map()
    for(let i=0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    function deep(pStart,pEnd,inStart,inEnd){
        if(pStart>pEnd) return null
        let rootval=preorder[pStart];
        let root=new TreeNode(rootval);
        let rootIndex=map.get(rootval);
        let leftNum=rootIndex-inStart
        root.left=deep(pStart+1,pStart+leftNum,inStart,rootIndex-1);
        root.right=deep(pStart+leftNum+1,pEnd,rootIndex+1,inEnd)
        return root
    }
    return deep(0,preorder.length-1,0,inorder.length-1)
};
// @lc code=end

