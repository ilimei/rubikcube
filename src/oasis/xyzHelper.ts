import {
    Buffer, BlinnPhongMaterial, BufferBindFlag,
    BufferMesh, BufferUsage, Engine, Entity, MeshRenderer,
    IndexFormat, VertexElement, VertexElementFormat, MeshTopology
} from "@oasis-engine/core";


function createXyzMesh(engine: Engine, length: number) {
    const geometry = new BufferMesh(engine, "CustomCubeGeometry");

    const vertices: Float32Array = new Float32Array([
        0, 0, 0, 0, length, 0, length, 0, 0, 0, 0, length, 0, -length, 0, -length, 0, 0, 0, 0, -length,
    ]);
    const indices: Uint16Array = new Uint16Array([
        0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6
    ]);

    // Create gpu vertex buffer and index buffer.
    const vertexBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, vertices, BufferUsage.Static);
    const indexBuffer = new Buffer(engine, BufferBindFlag.IndexBuffer, indices, BufferUsage.Static);

    // Bind buffer
    geometry.setVertexBufferBinding(vertexBuffer, 12);
    geometry.setIndexBufferBinding(indexBuffer, IndexFormat.UInt16);

    // Add vertexElement
    geometry.setVertexElements([
        new VertexElement("POSITION", 0, VertexElementFormat.Vector3, 0),
    ]);

    // Add one sub geometry.
    geometry.addSubMesh(0, indices.length, MeshTopology.Lines);

    return geometry;
}

export function xyzHelper(engine: Engine, rootEntity: Entity) {
    const xyzHelperEntity = rootEntity.createChild('xyzHelper');
    const renderer = xyzHelperEntity.addComponent(MeshRenderer);
    const mtl = new BlinnPhongMaterial(engine);
    renderer.mesh = createXyzMesh(engine, 20);
    renderer.setMaterial(mtl);
}
