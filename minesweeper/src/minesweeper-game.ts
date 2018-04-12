// The state of the game (`Started` or a resolution)
export enum GameStatus {
    Started = 0,
    Won,
    Lost,
}
// The state of a single cell
export enum CellStatus {
    Unknown = 0,
    Revealed,
    Flagged,
    Exploded,
}

export type Cell = {
    status: CellStatus,
    revealedCount: number
};

export type Options = {
    mineCount: number,
    width: number,
    height: number
};

type Board = {
    // `minesByXy` indexes where each mine is hidden
    minesByXy: { [xy: string] : true }
    // Index cells for convenience
    cellsByXy: { [xy: string] : Cell }
    // Keep a list of each cell's neighbors
    neighborsByXy: { [xy:string] : string[] }
};

// A `Game` is formed from the intersection of its `Options`, `Board`, `status` and a move counter
export type Game = Options & Board & {
    status: GameStatus,
    moveCount: number
};