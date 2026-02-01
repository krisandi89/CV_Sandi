/**
 * THREE.JS BACKGROUND SCENE
 * Creates animated particles background for hero section
 */

(function () {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Modern Blue color palette
    const colorPrimary = new THREE.Color('#00d4ff');  // Neon Cyan
    const colorSecondary = new THREE.Color('#0891b2'); // Soft Teal

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Position
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;

        // Color - blend between primary and secondary
        const mixRatio = Math.random();
        const color = colorPrimary.clone().lerp(colorSecondary, mixRatio);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lines connecting nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];

    function updateLines() {
        linePositions.length = 0;
        lineColors.length = 0;

        const pos = particlesGeometry.attributes.position.array;
        const maxDistance = 0.5;

        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const i3 = i * 3;
                const j3 = j * 3;

                const dx = pos[i3] - pos[j3];
                const dy = pos[i3 + 1] - pos[j3 + 1];
                const dz = pos[i3 + 2] - pos[j3 + 2];

                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance < maxDistance && linePositions.length < 3000) {
                    linePositions.push(pos[i3], pos[i3 + 1], pos[i3 + 2]);
                    linePositions.push(pos[j3], pos[j3 + 1], pos[j3 + 2]);

                    const opacity = 1 - (distance / maxDistance);
                    lineColors.push(0, 0.83, 1, opacity * 0.3);
                    lineColors.push(0, 0.83, 1, opacity * 0.3);
                }
            }
        }
    }

    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Rotate particles
        particles.rotation.x = elapsedTime * 0.05;
        particles.rotation.y = elapsedTime * 0.08;

        // Mouse influence
        particles.rotation.x += mouseY * 0.001;
        particles.rotation.y += mouseX * 0.001;

        // Wave animation for particles
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            positions[i3 + 1] += Math.sin(elapsedTime + x) * 0.001;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        if (!container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
})();
