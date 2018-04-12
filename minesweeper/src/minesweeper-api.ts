type MinesweeperAPI = {
    create(options: Options) : Game
    reveal(prev: Game, xy: string) : Game
    flag(prev: Game, xy: string) : Game
};