import { Entity, Matrix, Quaternion, Vector3 } from "oasis-engine";
import { CUBE_LEVEL, CUBE_SIZE, ROTATION_SPEED } from "./constants";

function near(a: number, b: number): boolean {
    return Math.abs(a - b) < 0.0001;
}

export enum DIR {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    FRONT = 'FRONT',
    BACK = 'BACK',
}

class ROTATION {
    static X = new Vector3(1, 0, 0);
    static DX = new Vector3(-1, 0, 0);
    static Y = new Vector3(0, 1, 0);
    static DY = new Vector3(0, -1, 0);
    static Z = new Vector3(0, 0, 1);
    static DZ = new Vector3(0, 0, -1);
}

// move Action
export class Move {
    entity: Entity;
    point: Vector3;
    startPos: Vector3;
    endPos: Vector3;
    rotation: Vector3;
    dir: DIR;

    start = false;
    angle = 0;
    cubes: Entity[];
    rotationQuaternions: Quaternion[];
    positions: Vector3[];


    get radians() {
        return this.angle * Math.PI / 180;
    }

    updateDir() {
        const { point } = this;
        const maxDist = CUBE_LEVEL * CUBE_SIZE / 2;
        const delta = 0.001;
        const dx = Math.abs(Math.abs(point.x) - maxDist);
        const dy = Math.abs(Math.abs(point.y) - maxDist);
        const dz = Math.abs(Math.abs(point.z) - maxDist);
        if (dx < delta) {
            if (point.x > 0) {
                return DIR.RIGHT;
            } else {
                return DIR.LEFT;
            }
        } else if (dy < delta) {
            if (point.y > 0) {
                return DIR.UP;
            } else {
                return DIR.DOWN;
            }
        } else if (dz < delta) {
            if (point.z > 0) {
                return DIR.BACK;
            }
        }
        return DIR.FRONT;
    }

    updateRotation(): Vector3 {
        const { x, y, z } = this.endPos.clone().subtract(this.startPos);
        switch (this.dir) {
            case DIR.UP:
                if (Math.abs(x) > Math.abs(z)) {
                    if (x > 0) {
                        return ROTATION.DZ;
                    } else {
                        return ROTATION.Z;
                    }
                } else {
                    if (z > 0) {
                        return ROTATION.X;
                    } else {
                        return ROTATION.DX;
                    }
                }
            case DIR.DOWN:
                if (Math.abs(x) > Math.abs(z)) {
                    if (x > 0) {
                        return ROTATION.Z;
                    } else {
                        return ROTATION.DZ;
                    }
                } else {
                    if (z > 0) {
                        return ROTATION.DX;
                    } else {
                        return ROTATION.X;
                    }
                }
            case DIR.LEFT:
                if (Math.abs(y) > Math.abs(z)) {
                    if (y > 0) {
                        return ROTATION.DZ;
                    } else {
                        return ROTATION.Z;
                    }
                } else {
                    if (z > 0) {
                        return ROTATION.Y;
                    } else {
                        return ROTATION.DY;
                    }
                }
            case DIR.RIGHT:
                if (Math.abs(y) > Math.abs(z)) {
                    if (y > 0) {
                        return ROTATION.Z;
                    } else {
                        return ROTATION.DZ;
                    }
                } else {
                    if (z > 0) {
                        return ROTATION.DY;
                    } else {
                        return ROTATION.Y;
                    }
                }
            case DIR.FRONT:
                if (Math.abs(x) > Math.abs(y)) {
                    if (x > 0) {
                        return ROTATION.DY;
                    } else {
                        return ROTATION.Y;
                    }
                } else {
                    if (y > 0) {
                        return ROTATION.X;
                    } else {
                        return ROTATION.DX;
                    }
                }
            case DIR.BACK:
                if (Math.abs(x) > Math.abs(y)) {
                    if (x > 0) {
                        return ROTATION.Y;
                    } else {
                        return ROTATION.DY;
                    }
                } else {
                    if (y > 0) {
                        return ROTATION.DX;
                    } else {
                        return ROTATION.X;
                    }
                }
        }
    }

    startMove(cubes: Entity[]) {
        this.dir = this.updateDir();
        this.rotation = this.updateRotation();
        const entity = this.entity;
        this.entity.transform.setPosition
        this.cubes = cubes.filter(v => {
            if (this.rotation === ROTATION.X || this.rotation === ROTATION.DX) {
                return near(v.transform.position.x, entity.transform.position.x);
            } else if (this.rotation === ROTATION.Y || this.rotation === ROTATION.DY) {
                return near(v.transform.position.y, entity.transform.position.y);
            }
            return near(v.transform.position.z, entity.transform.position.z);
        });

        this.rotationQuaternions = this.cubes.map(v => v.transform.rotationQuaternion.clone());
        this.positions = this.cubes.map(v => v.transform.position.clone());
        this.start = true;
    }

    update() {
        this.angle += ROTATION_SPEED;
        if (this.angle > 90) {
            this.angle = 90;
            this.start = false;

        }
        this.cubes.forEach((cube, index) => {
            const matrix = new Matrix;
            const position = this.positions[index].clone();
            const quaternion = this.rotationQuaternions[index].clone();

            const { x, y, z } = position;
            matrix.translate(new Vector3(-x, -y, -z))
            matrix.rotateAxisAngle(this.rotation, this.radians);
            matrix.translate(new Vector3(x, y, z));
            cube.transform.position = position.transformNormal(matrix);

            const q = new Quaternion;
            q.rotateAxisAngle(this.rotation, this.radians);
            cube.transform.rotationQuaternion = q.multiply(quaternion);
        });
    }
}
