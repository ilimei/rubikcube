import {
	BlinnPhongMaterial,
	Camera,
	MeshRenderer,
	Vector3,
	WebGLEngine,
	Ray,
	Vector2,
	Layer,
	HitResult,
	BoxCollider,
	Entity,
	Engine,
} from "oasis-engine";
import { OrbitControl } from "@oasis-engine/controls";
import { createCube } from "./cube";
import CubeScript from "./script";
import { CUBE_SIZE, CUBE_STROKE, CUBE_LEVEL } from "./constants";
import { xyzHelper } from './xyzHelper';

// @ts-ignore
window.Vector3 = Vector3;

export function createRuickCube(rootEntity: Entity, engine: Engine) {
	const isEven = CUBE_LEVEL % 2 === 0;
	let start = - Math.floor(CUBE_LEVEL / 2);
	let end = Math.ceil(CUBE_LEVEL / 2);
	let offset = 0;
	if (isEven) {
		start += 1;
		end += 1;
		offset = -0.5;
	}
	for (let i = start; i < end; i++) {
		for (let j = start; j < end; j++) {
			for (let k = start; k < end; k++) {
				const cubeEntity = rootEntity.createChild("cube");
				const cubePos = cubeEntity.transform.position;
				cubePos.setValue((i + offset) * CUBE_SIZE, (j + offset) * CUBE_SIZE, (k + offset) * CUBE_SIZE);
				cubeEntity.transform.position = cubePos;

				const boxCollider = cubeEntity.addComponent(BoxCollider);
				boxCollider.setBoxCenterSize(new Vector3(), new Vector3(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE));
				const renderer = cubeEntity.addComponent(MeshRenderer);
				const mtl = new BlinnPhongMaterial(engine);
				renderer.mesh = createCube(engine, CUBE_SIZE / 2, CUBE_STROKE);
				renderer.setMaterial(mtl);
			}
		}
	}
}

export function createOasis() {
	const engine = new WebGLEngine("canvas");
	engine.canvas.resizeByClientSize();
	const scene = engine.sceneManager.activeScene;
	const rootEntity = scene.createRootEntity();
	const cubeScript = rootEntity.addComponent(CubeScript);

	// init camera
	const cameraEntity = rootEntity.createChild("camera");
	const camera = cameraEntity.addComponent(Camera);
	cubeScript.control = cameraEntity.addComponent(OrbitControl);
	cubeScript.control.enablePan = false;
	const pos = cameraEntity.transform.position;
	pos.setValue(10, 10, 10);
	cameraEntity.transform.position = pos;
	cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

	// init light
	scene.ambientLight.diffuseSolidColor.setValue(1, 1, 1, 1);
	scene.ambientLight.diffuseIntensity = 1.2;

	xyzHelper(engine, rootEntity);

	createRuickCube(rootEntity, engine);

	const ray = new Ray();
	const ratio = window.devicePixelRatio;

	// 鼠标点击触发拾取
	function handleMouseDown(e) {
		let x = e.offsetX;
		let y = e.offsetY;
		if (e.touches && e.touches.length > 0) {
			x = e.touches[0].pageX;
			y = e.touches[0].pageY;
		}
		camera.screenPointToRay(new Vector2(x, y).scale(ratio), ray);
		const hit = new HitResult();
		const result = engine.physicsManager.raycast(ray, Number.MAX_VALUE, Layer.Everything, hit);
		if (result) {
			cubeScript.click(hit.collider.entity, hit.point, ray.direction.clone());
		}
	}
	// 鼠标抬起
	function handleMouseUp(e) {
		let x = e.offsetX;
		let y = e.offsetY;
		if (e.changedTouches && e.changedTouches.length > 0) {
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}
		camera.screenPointToRay(new Vector2(x, y).scale(ratio), ray);
		cubeScript.mouseup(ray.direction.clone());
	}


	document.getElementById("canvas").addEventListener("mousedown", handleMouseDown);
	document.getElementById("canvas").addEventListener("mouseup", handleMouseUp);
	document.getElementById("canvas").addEventListener("touchstart", handleMouseDown);
	document.getElementById("canvas").addEventListener("touchend", handleMouseUp);

	engine.run();
}
