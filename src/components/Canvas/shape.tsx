export class Shape { 
    private beta: any;
    private points: any;
    private stroke: string;
    private ctx: any;
    constructor(points: any, beta: any) {
        this.points = points;
        this.beta = beta;
        this.stroke = "hsl(" + beta + ", 90%, 65%)";
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.points[0].space2d.x, this.points[0].space2d.y);

        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].space2d.x, this.points[i].space2d.y);
        }

        ctx.closePath();
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    public update(ax: any, ay: any): void {
        this.points.map((dot: any) => {
            dot.update(ax, ay);
        });
    }

    public getDepth(): number {
        return Math.min(
            this.points[0].space3d.z,
            this.points[1].space3d.z,
            this.points[2].space3d.z
        );
    }
}