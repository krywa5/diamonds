import { Common } from './Common.esm.js';
import { media } from './Media.esm.js';
import { game } from './Game.esm.js';

const GAME_SCREEN_ID = 'js-game-screen';
const LOAD_CURRENT_ID = 'js-loading-screen-current';
const LOAD_TOTAL_ID = 'js-loading-screen-total';

export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;


class Canvas extends Common {
    constructor() {
        super(GAME_SCREEN_ID);
        this.configureCanvas();
    }

    configureCanvas() {
        this.context = this.element.getContext('2d');
        this.context.canvas.width = CANVAS_WIDTH;
        this.context.canvas.height = CANVAS_HEIGHT;
        this.context.font = '20px Arial White';
        this.context.fillStyle = 'white';
    }

    drawGameOnCanvas(gameState) {
        this.drawBackground();
        this.drawPointsToWin(gameState.pointsToWin);
        this.drawPlayersPoints(gameState.getPlayerPoints());
        this.drawLeftMovement(gameState.getLeftMovement());
    }

    drawTextOnCanvas(text, posY) {
        this.context.fillText(`${text}`, 520, posY);
    }

    drawBackground() {
        this.context.drawImage(media.backgroundImage, 0, 0);
    }

    drawPointsToWin(pointsToWin) {
        this.drawTextOnCanvas(pointsToWin, 92)
    }

    drawPlayersPoints(playerPoints) {
        this.drawTextOnCanvas(playerPoints, 163);
    }

    drawLeftMovement(leftMovement) {
        this.drawTextOnCanvas(leftMovement, 234);
    }
}

export const canvas = new Canvas();