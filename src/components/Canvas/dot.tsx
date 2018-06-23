export class Dot3d {
    private space2d: any;
    private space3d: any;
    private scaleX: any;
    private scaleY: any;
    private visible: any;
    private floor: number;
    constructor(x: any, y: any, z: any) {
        this.space2d = { x: 0, y: 0 };
        this.space3d = { x, y, z };
        this.scaleX = 1;
        this.scaleY = 1;
        this.visible = true;
        this.floor = 600;
        this.setPerspective();
    }

    public rotateX(angle: any): void {
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        let space3dY = this.space3d.y * cos - this.space3d.z * sin;
        let space3dZ = this.space3d.z * cos + this.space3d.y * sin;
        this.space3d.y = space3dY;
        this.space3d.z = space3dZ;
    }

    public rotateY(angle: any): void {
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        let space3dX = this.space3d.x * cos - this.space3d.z * sin;
        let space3dZ = this.space3d.z * cos + this.space3d.x * sin;
        this.space3d.x = space3dX;
        this.space3d.z = space3dZ;
    }

    public getWinRact(): any {
        return [
            (document.documentElement.clientWidth ||
                    document.body.clientWidth ||
                    window.innerWidth) / 2,
            150
            // (document.documentElement.clientHeight ||
            //         document.body.clientHeight ||
            //         window.innerHeight) / 5
        ]
    }

    public setPerspective(): void {
        let floor = this.floor,
            space3d = this.space3d;
        if (this.space3d.z > -floor) {
            let [posX, posY] = this.getWinRact();
            let scale = floor / (floor + space3d.z);
            this.scaleX = this.scaleY = scale;
            this.space2d.x = posX + space3d.x * scale;
            this.space2d.y = posY + space3d.y * scale;
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    public update(rax: any, ray: any): void {
        this.rotateX(rax);
        this.rotateY(ray);
        this.setPerspective();
    }
}