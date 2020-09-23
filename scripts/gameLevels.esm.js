import { DIAMOND_SIZE } from './Diamond.esm.js';

export const EMPTY_BLOCK = 99;

export const GAME_BOARD_X_OFFSET = 40; //px
export const GAME_BOARD_Y_OFFSET = 20; //px

export const gameLevels = [
    {
        level: 1,
        numberOfMovements: 30,
        pointsToWin: 7000,
        board: [
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 1, kind: 1, },
            { x: 1 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 1, kind: 1, },
            { x: 2 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 1, kind: 0, },
            { x: 3 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 1, kind: 3, },
            { x: 4 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 1, kind: 4, },
            { x: 5 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 1, kind: 5, },
            { x: 6 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 1, kind: 5, },
            { x: 7 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 1, kind: 3, },
            { x: 0 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 2, kind: 0, },
            { x: 1 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 2, kind: 0, },
            { x: 2 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 2, kind: 1, },
            { x: 3 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 2, kind: 0, },
            { x: 4 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 2, kind: 0, },
            { x: 5 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 2, kind: 1, },
            { x: 6 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 2, kind: 1, },
            { x: 7 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 2, kind: 2, },
            { x: 0 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 3, kind: 0, },
            { x: 1 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 3, kind: 4, },
            { x: 2 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 3, kind: 4, },
            { x: 3 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 3, kind: 5, },
            { x: 4 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 3, kind: 5, },
            { x: 5 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 3, kind: 2, },
            { x: 6 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 3, kind: 2, },
            { x: 7 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 3, kind: 5, },
            { x: 0 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 4, kind: 4, },
            { x: 1 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 4, kind: 3, },
            { x: 2 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 4, kind: 3, },
            { x: 3 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 4, kind: 2, },
            { x: 4 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 4, kind: 2, },
            { x: 5 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 4, kind: 1, },
            { x: 6 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 4, kind: 1, },
            { x: 7 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 4, kind: 0, },
            { x: 0 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 5, kind: 1, },
            { x: 1 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 5, kind: 3, },
            { x: 2 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 5, kind: 5, },
            { x: 3 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 5, kind: 2, },
            { x: 4 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 5, kind: 4, },
            { x: 5 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 5, kind: 5, },
            { x: 6 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 5, kind: 0, },
            { x: 7 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 5, kind: 1, },
            { x: 0 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 6, kind: 4, },
            { x: 1 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 6, kind: 5, },
            { x: 2 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 6, kind: 3, },
            { x: 3 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 6, kind: 0, },
            { x: 4 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 6, kind: 5, },
            { x: 5 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 6, kind: 4, },
            { x: 6 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 6, kind: 3, },
            { x: 7 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 6, kind: 2, },
            { x: 0 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 7, kind: 0, },
            { x: 1 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 7, kind: 1, },
            { x: 2 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 7, kind: 2, },
            { x: 3 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 7, kind: 3, },
            { x: 4 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 7, kind: 4, },
            { x: 5 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 7, kind: 5, },
            { x: 6 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 7, kind: 3, },
            { x: 7 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 7, kind: 1, },
            { x: 0 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 8, kind: 5, },
            { x: 1 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 8, kind: 1, },
            { x: 2 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 8, kind: 5, },
            { x: 3 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 8, kind: 2, },
            { x: 4 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 8, kind: 3, },
            { x: 5 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 8, kind: 4, },
            { x: 6 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 8, kind: 5, },
            { x: 7 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 8, kind: 1, },
        ]
    },
    {
        level: 2,
        numberOfMovements: 21,
        pointsToWin: 5500,
        board: [
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 0, kind: EMPTY_BLOCK, },
            { x: 0 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 1, kind: 0, },
            { x: 1 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 1, kind: 5, },
            { x: 2 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 1, kind: 2, },
            { x: 3 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 1, kind: 3, },
            { x: 4 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 1, kind: 5, },
            { x: 5 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 1, kind: 0, },
            { x: 6 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 1, kind: 5, },
            { x: 7 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 1, kind: 1, },
            { x: 0 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 2, kind: 1, },
            { x: 1 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 2, kind: 0, },
            { x: 2 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 2, kind: 1, },
            { x: 3 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 2, kind: 0, },
            { x: 4 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 2, kind: 3, },
            { x: 5 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 2, kind: 5, },
            { x: 6 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 2, kind: 3, },
            { x: 7 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 2, kind: 5, },
            { x: 0 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 3, kind: 2, },
            { x: 1 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 3, kind: 1, },
            { x: 2 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 3, kind: 0, },
            { x: 3 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 3, kind: 5, },
            { x: 4 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 3, kind: 5, },
            { x: 5 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 3, kind: 2, },
            { x: 6 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 3, kind: 2, },
            { x: 7 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 3, kind: 5, },
            { x: 0 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 4, kind: 3, },
            { x: 1 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 4, kind: 2, },
            { x: 2 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 4, kind: 1, },
            { x: 3 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 4, kind: 0, },
            { x: 4 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 4, kind: 2, },
            { x: 5 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 4, kind: 1, },
            { x: 6 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 4, kind: 1, },
            { x: 7 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 4, kind: 0, },
            { x: 0 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 5, kind: 4, },
            { x: 1 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 5, kind: 3, },
            { x: 2 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 5, kind: 2, },
            { x: 3 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 5, kind: 1, },
            { x: 4 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 5, kind: 0, },
            { x: 5 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 5, kind: 5, },
            { x: 6 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 5, kind: 0, },
            { x: 7 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 5, kind: 1, },
            { x: 0 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 6, kind: 5, },
            { x: 1 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 6, kind: 4, },
            { x: 2 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 6, kind: 3, },
            { x: 3 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 6, kind: 2, },
            { x: 4 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 6, kind: 1, },
            { x: 5 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 6, kind: 0, },
            { x: 6 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 6, kind: 3, },
            { x: 7 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 6, kind: 2, },
            { x: 0 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 7, kind: 0, },
            { x: 1 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 7, kind: 5, },
            { x: 2 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 7, kind: 4, },
            { x: 3 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 7, kind: 3, },
            { x: 4 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 7, kind: 2, },
            { x: 5 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 7, kind: 1, },
            { x: 6 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 7, kind: 0, },
            { x: 7 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 7, kind: 1, },
            { x: 0 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 0, column: 8, kind: 1, },
            { x: 1 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 1, column: 8, kind: 0, },
            { x: 2 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 2, column: 8, kind: 5, },
            { x: 3 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 3, column: 8, kind: 4, },
            { x: 4 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 4, column: 8, kind: 3, },
            { x: 5 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 5, column: 8, kind: 2, },
            { x: 6 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 6, column: 8, kind: 1, },
            { x: 7 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row: 7, column: 8, kind: 0, },
        ],
    },
    {
        level: 3,
    },
];