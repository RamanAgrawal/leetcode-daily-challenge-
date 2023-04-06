/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rowLen = grid.length
    const colLen = grid[0].length

    // visit first col and last col
    for(let i=0;i<rowLen;i++){
        for(let j=0;j<colLen;j++){
            if((i==0 || j == 0 || i == rowLen-1 || j == colLen-1) && grid[i][j] === 0){
                bfsUtils(i, j, rowLen, colLen, grid)
            }
        }
    }
    let closedIslanndCount = 0
    //now calculate closed island
    
    for(let i=0; i<rowLen; i++){
        for(let j=0; j <colLen; j++){
            if(grid[i][j] === 0){
                bfsUtils(i, j, rowLen, colLen, grid)
                closedIslanndCount++;
            }
        }
    }
    return closedIslanndCount
};



const bfsUtils = (sr, sc, rowLen, colLen, grid) => {
    const queue = new Queue()
    
    queue.enqueue([sr, sc])
    
    grid[sr][sc] = 1

    const rowList = [1,0,0,-1]
    const colList = [0,1,-1,0]


    while(!queue.isEmpty()){
        const [row, col] = queue.dequeue()

        for(let i=0; i<4; i++){
            const deltaRow = row+rowList[i];
            const deltaCol = col+colList[i];

            // invalid index
            if(deltaRow < 0 || deltaCol<0) continue;
            if(deltaRow >= rowLen || deltaCol>=colLen) continue;

            // same as previous index
            if(deltaRow === row && deltaCol === col) continue;

            // water not land so we cannot travel
            if(grid[deltaRow][deltaCol] === 1) continue;
            
            // marking current cell as visited
            grid[deltaRow][deltaCol] = 1

            // pushing into queue so we can further explore all path
            queue.enqueue([deltaRow, deltaCol])

        }
    }

}
