import {
    Entity,
    Script,
    Vector3
} from 'oasis-engine'
import { OrbitControl } from "@oasis-engine/controls";
import { Move } from './move';


export default class CubeScript extends Script {

    cubes: Entity[] = [];
    _control: OrbitControl;
    currentMove: Move;

    set control(control: OrbitControl) {
        this._control = control;
    }

    get control() {
        return this._control;
    }

    onStart() {
        this.cubes = this.entity.children.filter(v => v.name === 'cube');
    }

    onUpdate() {
        if (this.currentMove && this.currentMove.start) {
            this.currentMove.update();
        }
    }

    click(entity: Entity, point: Vector3, rayDirection: Vector3) {
        if (this.currentMove?.start) return;
        this.currentMove = new Move;
        this.currentMove.entity = entity;
        this.currentMove.point = point;
        this.currentMove.startPos = rayDirection;
        // lock camera
        this.control.enableRotate = false;
    }

    mouseup(rayDirection: Vector3) {
        if (!this.control.enableRotate && !this.currentMove?.start) {
            this.currentMove.endPos = rayDirection;
            this.currentMove.startMove(this.cubes);
        }
        // unlock camera
        this.control.enableRotate = true;
    }
}
