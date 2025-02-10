export const knightMoves = (start, end) => {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start);
    

    function validMove(x, y){
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    while(queue.length){
        let [[x, y], path] = queue.shift();
        if (x == end[0] && y == end[1]){
            console.log("Path found! Moves:", path.length - 1);
            return path;
        }

        for (let [dx, dy] of moves){
            let newX = x + dx;
            let newY = y + dy;
            let newPos = [newX, newY];

            if (validMove(newX, newY) && !visited.has(newPos)){
                visited.add(newPos);
                queue.push([newPos, path.concat([newPos])]);
            }
        }
    }
}