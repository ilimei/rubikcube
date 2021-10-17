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
} from "oasis-engine";
import { OrbitControl } from "@oasis-engine/controls";
import { createCube } from "./cube";
import CubeScript from "./script";
import { CUBE_SIZE, CUBE_STROKE } from "./constants";

// @ts-ignore
window.Vector3 = Vector3;

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

	const cubeSize = CUBE_SIZE;

	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			for (let k = -1; k < 2; k++) {
				const cubeEntity = rootEntity.createChild("cube");
				const cubePos = cubeEntity.transform.position;
				cubePos.setValue(i * cubeSize, j * cubeSize, k * cubeSize);
				cubeEntity.transform.position = cubePos;

				const boxCollider = cubeEntity.addComponent(BoxCollider);
				boxCollider.setBoxCenterSize(new Vector3(), new Vector3(cubeSize, cubeSize, cubeSize));
				const renderer = cubeEntity.addComponent(MeshRenderer);
				const mtl = new BlinnPhongMaterial(engine);
				renderer.mesh = createCube(engine, cubeSize / 2, CUBE_STROKE);
				renderer.setMaterial(mtl);
			}
		}
	}

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
