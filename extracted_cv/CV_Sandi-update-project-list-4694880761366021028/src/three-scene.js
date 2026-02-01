// Assumes THREE is loaded globally via <script> tag

const initThree = () => {
    // Check if THREE is available
    if (typeof THREE === 'undefined') {
        console.error("THREE is not defined. Make sure the Three.js script is loaded.");
        return;
    }

    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Geometry - Icosahedron for that tech/crystal look
    const geometry = new THREE.IcosahedronGeometry(2, 0);

    // Material - Glassy/Wireframe Hybrid
    // 1. Solid core
    const materialCore = new THREE.MeshPhongMaterial({
        color: 0x8b5cf6, // Purple
        emissive: 0x2e1065,
        specular: 0xffffff,
        shininess: 100,
        flatShading: true,
        transparent: true,
        opacity: 0.9
    });

    const mesh = new THREE.Mesh(geometry, materialCore);
    scene.add(mesh);

    // 2. Wireframe overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0xc4b5fd, // Light purple
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMat);
    mesh.add(wireframe);

    // Floating Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.5
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 2, 10);
    pointLight.position.set(-2, 2, 2);
    scene.add(pointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);

        time += 0.005;

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        // Smooth rotation following mouse
        mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
        mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);

        // Constant gentle rotation
        mesh.rotation.z += 0.002;

        // Floating effect
        mesh.position.y = Math.sin(time) * 0.2;

        // Rotate Particles slightly
        particlesMesh.rotation.y = -time * 0.1 + (mouseX * 0.0005);
        particlesMesh.rotation.x = (mouseY * 0.0005);

        renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThree);
} else {
    initThree();
}
