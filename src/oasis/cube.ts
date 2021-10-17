import {
    Buffer,
    BufferBindFlag,
    BufferMesh,
    BufferUsage,
    IndexFormat,
    VertexElement,
    Engine,
    Color,
    VertexElementFormat,
    MeshTopology,
} from "oasis-engine";

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return new Color(
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
        1.0,
    );
}

const colorList = [
    hexToRgb('#C41E3A'),
    hexToRgb('#009E60'),
    hexToRgb('#0051BA'),
    hexToRgb('#FF5800'),
    hexToRgb('#FFD500'),
    hexToRgb('#FFFFFF')
];

export function createCube(engine: Engine, size: number, strokeSize: number) {
    const geometry = new BufferMesh(engine, "CustomCubeGeometry");
    const smallSize = size - strokeSize;

    // prettier-ignore
    // Create vertices data.
    const vertices: Float32Array = new Float32Array([
        // Up
        -smallSize, size, -smallSize, 0, 1, 0, smallSize, size, -smallSize, 0, 1, 0, smallSize, size, smallSize, 0, 1, 0, -smallSize, size, smallSize, 0, 1, 0,
        // Down
        -smallSize, -size, -smallSize, 0, -1, 0, smallSize, -size, -smallSize, 0, -1, 0, smallSize, -size, smallSize, 0, -1, 0, -smallSize, -size, smallSize, 0, -1, 0,
        // Left
        -size, smallSize, -smallSize, -1, 0, 0, -size, smallSize, smallSize, -1, 0, 0, -size, -smallSize, smallSize, -1, 0, 0, -size, -smallSize, -smallSize, -1, 0, 0,
        // Right
        size, smallSize, -smallSize, 1, 0, 0, size, smallSize, smallSize, 1, 0, 0, size, -smallSize, smallSize, 1, 0, 0, size, -smallSize, -smallSize, 1, 0, 0,
        // Front
        -smallSize, smallSize, size, 0, 0, 1, smallSize, smallSize, size, 0, 0, 1, smallSize, -smallSize, size, 0, 0, 1, -smallSize, -smallSize, size, 0, 0, 1,
        // Back
        -smallSize, smallSize, -size, 0, 0, -1, smallSize, smallSize, -size, 0, 0, -1, smallSize, -smallSize, -size, 0, 0, -1, -smallSize, -smallSize, -size, 0, 0, -1,
        // 八个角
        // up left back
        -smallSize, size, -smallSize, -1, 1, -1, -size, smallSize, -smallSize, -1, 1, -1, -smallSize, smallSize, -size, -1, 1, -1,
        // down left back
        -smallSize, -size, -smallSize, -1, -1, -1, -size, -smallSize, -smallSize, -1, -1, -1, -smallSize, -smallSize, -size, -1, -1, -1,
        // up right back  
        smallSize, size, -smallSize, 1, 1, -1, size, smallSize, -smallSize, 1, 1, -1, smallSize, smallSize, -size, 1, 1, -1,
        // down right back  
        smallSize, -size, -smallSize, 1, -1, -1, size, -smallSize, -smallSize, 1, -1, -1, smallSize, -smallSize, -size, 1, -1, -1,
        // up left front
        -smallSize, size, smallSize, -1, 1, 1, -size, smallSize, smallSize, -1, 1, 1, -smallSize, smallSize, size, -1, 1, 1,
        // down left front
        -smallSize, -size, smallSize, -1, -1, 1, -size, -smallSize, smallSize, -1, -1, 1, -smallSize, -smallSize, size, -1, -1, 1,
        // up right front  
        smallSize, size, smallSize, 1, 1, 1, size, smallSize, smallSize, 1, 1, 1, smallSize, smallSize, size, 1, 1, 1,
        // down right front  
        smallSize, -size, smallSize, 1, -1, 1, size, -smallSize, smallSize, 1, -1, 1, smallSize, -smallSize, size, 1, -1, 1,
        // 12个棱
        // up left
        -smallSize, size, -smallSize, -1, 1, 0, -smallSize, size, smallSize, -1, 1, 0, -size, smallSize, -smallSize, -1, 1, 0, -size, smallSize, smallSize, -1, 1, 0,
        // up right
        smallSize, size, -smallSize, 1, 1, 0, smallSize, size, smallSize, 1, 1, 0, size, smallSize, -smallSize, 1, 1, 0, size, smallSize, smallSize, 1, 1, 0,
        // up front
        -smallSize, size, smallSize, 0, 1, 1, smallSize, size, smallSize, 0, 1, 1, -smallSize, smallSize, size, 0, 1, 1, smallSize, smallSize, size, 0, 1, 1,
        // up back
        -smallSize, size, -smallSize, 0, 1, -1, smallSize, size, -smallSize, 0, 1, -1, -smallSize, smallSize, -size, 0, 1, -1, smallSize, smallSize, -size, 0, 1, -1,
        // down left
        -smallSize, -size, -smallSize, -1, -1, 0, -smallSize, -size, smallSize, -1, -1, 0, -size, -smallSize, -smallSize, -1, -1, 0, -size, -smallSize, smallSize, -1, -1, 0,
        // down right
        smallSize, -size, -smallSize, 1, -1, 0, smallSize, -size, smallSize, 1, -1, 0, size, -smallSize, -smallSize, 1, -1, 0, size, -smallSize, smallSize, 1, -1, 0,
        // down front
        -smallSize, -size, smallSize, 0, -1, 1, smallSize, -size, smallSize, 0, -1, 1, -smallSize, -smallSize, size, 0, -1, 1, smallSize, -smallSize, size, 0, -1, 1,
        // down back
        -smallSize, -size, -smallSize, 0, -1, -1, smallSize, -size, -smallSize, 0, -1, -1, -smallSize, -smallSize, -size, 0, -1, -1, smallSize, -smallSize, -size, 0, -1, -1,
        // left front
        -size, smallSize, smallSize, -1, 0, 1, -size, -smallSize, smallSize, -1, 0, 1, -smallSize, smallSize, size, -1, 0, 1, -smallSize, -smallSize, size, -1, 0, 1,
        // front right
        smallSize, smallSize, size, 1, 0, 1, smallSize, -smallSize, size, 1, 0, 1, size, smallSize, smallSize, 1, 0, 1, size, -smallSize, smallSize, 1, 0, 1,
        // right back
        size, smallSize, -smallSize, 1, 0, -1, size, -smallSize, -smallSize, 1, 0, -1, smallSize, smallSize, -size, 1, 0, -1, smallSize, -smallSize, -size, 1, 0, -1,
        // back left
        -smallSize, smallSize, -size, -1, 0, -1, -smallSize, -smallSize, -size, -1, 0, -1, -size, smallSize, -smallSize, -1, 0, -1, -size, -smallSize, -smallSize, -1, 0, -1,
    ]);

    // prettier-ignore
    // Create indices data.
    const indices: Uint16Array = new Uint16Array([
        // Up
        0, 2, 1, 2, 0, 3,
        // Down
        4, 6, 7, 6, 4, 5,
        // Left
        8, 10, 9, 10, 8, 11,
        // Right
        12, 14, 15, 14, 12, 13,
        // Front
        16, 18, 17, 18, 16, 19,
        // Back
        20, 22, 23, 22, 20, 21,
        // up left Back corner
        24, 26, 25,
        // down left back corner
        27, 28, 29,
        // up right back  
        30, 31, 32,
        // down right back  
        33, 35, 34,
        // up left front
        36, 37, 38,
        // down left front
        39, 41, 40,
        // up right front
        42, 44, 43,
        // down right front
        45, 46, 47,
        // Up left
        48, 50, 49, 50, 51, 49,
        // up right
        52, 53, 54, 55, 54, 53,
        // up front
        56, 58, 57, 58, 59, 57,
        // up back
        60, 61, 62, 62, 61, 63,
        // down left
        64, 65, 66, 66, 65, 67,
        // down right
        68, 70, 69, 71, 69, 70,
        // down front
        72, 73, 74, 75, 74, 73,
        // down back
        76, 78, 77, 79, 77, 78,
        // left front
        80, 81, 82, 83, 82, 81,
        // front right
        84, 85, 86, 87, 86, 85,
        // right back
        88, 89, 90, 91, 90, 89,
        // back left
        92, 93, 94, 95, 94, 93,
    ]);

    // Create vertices color and init by black.
    const colorData = new Float32Array(3 * 24 + 3 * 24 + 3 * 32 + 3 * 16);
    colorData.fill(0.0);
    for (let i = 0; i < 6; i++) {
        const color = colorList[i];
        const offset = i * 12;
        for (let i = 0; i < 4; i++) {
            colorData[offset + i * 3 + 0] = color.r;
            colorData[offset + i * 3 + 1] = color.g;
            colorData[offset + i * 3 + 2] = color.b;
        }
    }

    // Create gpu vertex buffer and index buffer.
    const vertexBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, vertices, BufferUsage.Static);
    const indexBuffer = new Buffer(engine, BufferBindFlag.IndexBuffer, indices, BufferUsage.Static);
    const independentColorBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, colorData, BufferUsage.Dynamic);

    // Bind buffer
    geometry.setVertexBufferBinding(vertexBuffer, 24);
    geometry.setIndexBufferBinding(indexBuffer, IndexFormat.UInt16);
    geometry.setVertexBufferBinding(independentColorBuffer, 12, 1);

    // Add vertexElement
    geometry.setVertexElements([
        new VertexElement("POSITION", 0, VertexElementFormat.Vector3, 0),
        new VertexElement("NORMAL", 12, VertexElementFormat.Vector3, 0),
        new VertexElement("COLOR_0", 0, VertexElementFormat.Vector3, 1)
    ]);

    // Add one sub geometry.
    geometry.addSubMesh(0, indices.length, MeshTopology.Triangles);
    return geometry;
}