var maxDepth = function(root) {
    let depth = 0
    depthTraverse(root)
    function depthTraverse(root,nodeDepth = 1){
         if (!root){
            return
        }
        
        if (nodeDepth>depth){
            depth=nodeDepth
        }
      
        
        depthTraverse(root.left,nodeDepth+1)
        depthTraverse(root.right,nodeDepth+1)
    }
    
    return depth
    
};
