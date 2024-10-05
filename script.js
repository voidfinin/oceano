const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Adicione uma esfera para representar a Terra
const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture = new THREE.TextureLoader().load('caminho/para/o/seu/textura/da/terra.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01; // Rotação da Terra
    renderer.render(scene, camera);
}

animate();
