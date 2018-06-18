/**
 * background -canvas
 */
import './canvas.scss';
import * as React from "react";
import { Shape } from "./shape";
import { Dot3d } from "./dot";

interface CanvasProps {
    class: string
}

export default class CanvasBackround extends React.Component<CanvasProps, {}> {
    private canvasCtx: CanvasRenderingContext2D;
    private shapes: any;
    private deg: number;
    private vertices: number;
    private numShapes: number;
    private controller: any;
    constructor(args: null) {
        super(args);
        this.init();
    };

    private init(): void {
        this.shapes = [];
        this.deg = 180;
        this.vertices = 3;
        this.numShapes = 720;
        this.controller = {
            speedX: 100,
            speedY: 200
        }
    }

    public componentDidMount(): void {
        let ctx = this.getCanvas2DContent();
        this.createCanvas(ctx);
        this.draw(ctx);
    };

    public action(): void {
        this.deg = (Math.random() + 1) * 100;
        this.destroy();
    }

    public mousreMove(evt: any): any {
        let canvasEl = this.getCanvasElement();
        let rect = canvasEl.getBoundingClientRect();
        this.controller.speedX = Math.round(evt.clientX - rect.left);
        this.controller.speedY = Math.round(evt.clientY - rect.top);
    }

    public createCanvas(ctx: any): void {
        let rad = Math.PI / this.deg;
        let increment = 2 * Math.PI / this.numShapes;
        let R = 200;
        let r = 50;

        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.7;
        ctx.lineJoin = "round";
        
        for (let beta = 0; beta <= 2 * Math.PI; beta += increment) {
            let x = R * Math.cos(beta),
                y = 0,
                z = R * Math.sin(beta);

            let delta = beta * 3;

            let dots = [];

            for (let angle = 0; angle < 2 * Math.PI; angle += 2 * Math.PI / this.vertices) {
                let cos = r * Math.cos(angle + delta);
                let sin = r * Math.sin(angle + delta);
                dots.push(
                    new Dot3d(
                        (R + cos) * Math.cos(beta),
                        R + sin,
                        (R + cos) * Math.sin(beta)
                    )
                );
            }

            this.shapes.push(new Shape(dots, beta / rad));
        }
    };

    public draw(ctx: any): void {
        let requestId = window.requestAnimationFrame(this.draw.bind(this, ctx));
        let [winWidth, winHeight] = this.getWinRact();
        ctx.clearRect(0, 0, winWidth, winHeight);

        this.shapes.sort(this.depth);

        let cx = 0;//(this.controller.speedY - winHeight / 1) * .00003;
        let cy = (this.controller.speedX - winWidth / 2) * 0.00003;
        this.shapes.map((shape: any) => {
            shape.update(cx, cy);
            shape.draw(ctx)
        });
    }

    public destroy(): void {
        let ctx = this.getCanvas2DContent();
        ctx.clearRect(0, 0, ...this.getWinRact());
        
        this.shapes = [];
        this.createCanvas(ctx);
    }

    public depth(triangleOne: any, triangleTwo: any): number {
        return triangleTwo.getDepth() - triangleOne.getDepth();
    }

    public getCanvasElement(): HTMLCanvasElement {
        return document.getElementById('bg-canvas') as HTMLCanvasElement;
    };

    public getCanvas2DContent(): any {
        if (this.canvasCtx) {
            return this.canvasCtx;
        }
        let canvas = this.getCanvasElement();
        let [winWidth, winHeight] = this.getWinRact();
        canvas.width = winWidth;
        canvas.height = winHeight;

        return this.canvasCtx = canvas.getContext('2d');
    }

    public getWinRact(): any {
        return [
            (document.documentElement.clientWidth ||
                document.body.clientWidth ||
                window.innerWidth),
            (document.documentElement.clientHeight ||
                document.body.clientHeight ||
                window.innerHeight)
        ]
    }

    public render() {
        return <canvas className={this.props.class} id='bg-canvas' onClick={this.action.bind(this)} onMouseMove={(e) => this.mousreMove(e)}></canvas>
    }
}