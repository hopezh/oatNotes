// Initialize the scene once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const container = document.getElementById('threejs-container');
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add a simple cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // // Add OrbitControls
    // const controls = new THREE.OrbitControls(camera, renderer.domElement);
    //
    // // Configure OrbitControls
    // controls.enableDamping = true; // Add smooth damping effect
    // controls.dampingFactor = 0.05;
    // controls.screenSpacePanning = false;
    // controls.minDistance = 1;     // Minimum zoom distance
    // controls.maxDistance = 50;    // Maximum zoom distance
    // controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation if needed

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', function () {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
});
