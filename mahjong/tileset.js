const MahjongTile = require('../dataTypes/mahjong_tile');
const TileTypes = require('../dataTypes/tile_types');
function generateTileset() {
    const tileList = []

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j < 9; j++) {
            if(i === 0 && j === 5) {
                tileList.push(new MahjongTile(TileTypes.Character, 5, `../assets/Man5-Dora`, false, true))
                tileList.push(new MahjongTile(TileTypes.Coin, 5, `../assets/Pin5-Dora`, false, true))
                tileList.push(new MahjongTile(TileTypes.Bamboo, 5, `../assets/Sou5-Dora`, false, true))
            } else{
                tileList.push(new MahjongTile(TileTypes.Character, j, `../assets/Man${j}`))
                tileList.push(new MahjongTile(TileTypes.Coin, j, `../assets/Pin${j}`))
                tileList.push(new MahjongTile(TileTypes.Bamboo, j, `../assets/Sou${j}`))
            }
        }
        tileList.push(new MahjongTile(TileTypes.Wind, 10, `../assets/North`, true))
        tileList.push(new MahjongTile(TileTypes.Wind, 11, `../assets/South`, true))
        tileList.push(new MahjongTile(TileTypes.Wind, 12, `../assets/East`, true))
        tileList.push(new MahjongTile(TileTypes.Wind, 13, `../assets/West`, true))
        tileList.push(new MahjongTile(TileTypes.Dragon, 14, `../assets/Red`, true))
        tileList.push(new MahjongTile(TileTypes.Dragon, 15, `../assets/Green`, true))
        tileList.push(new MahjongTile(TileTypes.Dragon, 16, `../assets/White`, true))
    }

    return tileList;
}
module.exports = generateTileset;