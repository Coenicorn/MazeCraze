import { Renderer } from "./rendering/renderer.js";
class Game extends Renderer {
    fps;
    running;
    currentDirection;
    player;
    camera;
    theme;
    constructor() {
        super();
        this.running = false;
    }
    async init() {
        await this.loadAssets([
            "cracked"
        ]);
        this.running = true;
        this.loop();
    }
    loop() {
        let last = Date.now();
        let now = 0;
        let lag = 0;
        this.fps = 1000 / 60;
        function run() {
            now = Date.now();
            lag = now - last;
            last = now;
            // ideally uses deltatime, but that's not really important if it's singleplayer
            while (lag > 0) {
                this.update();
                lag -= this.fps;
            }
            this.render(this.context);
            if (this.running)
                requestAnimationFrame(run.bind(this));
        }
        // bind it to the Game object to use 'this'
        requestAnimationFrame(run.bind(this));
    }
    update() {
    }
    render(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.Pic(this.player.sprite), this.camera.x, this.camera.y);
    }
    addEventListeners() {
    }
}
export { Game };
//# sourceMappingURL=game.js.map