let ans = 0;

var dfs = (root,left,steps) => {
    if(root == undefined){
        return 
    }

    ans = Math.max(ans,steps)

    if(left){
        dfs(root.left, !left, steps+1)
        dfs(root.right, left, 1)
    }
    else{
        dfs(root.left, left, 1)
        dfs(root.right, !left, steps+1)
    }
}

var longestZigZag = function(root) {
    ans = 0

    dfs(root,true,0)
    dfs(root,false,0)

    return ans;
};
