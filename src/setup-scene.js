import * as THREE from "three"
import { MapControls } from "three/addons/controls/MapControls"
import Stats from "three/addons/libs/stats.module"

export function setupScene( canvas ) {

	// Scene

	const scene = new THREE.Scene()

	// Camera

	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2_000 )
	camera.position.set( 50, 50, 50 )
	camera.up.set( 0, 0, 1 )
	camera.lookAt( 0, 0, 0 )

	// Renderer

	const renderer = new THREE.WebGLRenderer( {
		canvas: canvas,
		antialias: false,
		powerPreference: "low-power",
		precision: "lowp",
		logarithmicDepthBuffer: true,
	} )

	renderer.setSize( window.innerWidth, window.innerHeight )
	renderer.setPixelRatio( window.devicePixelRatio || 1 )

	// OnResize

	window.addEventListener( "resize", () => {

		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()

		renderer.setSize( window.innerWidth, window.innerHeight )
	} )

	// Controls

	const controls = new MapControls( camera, canvas )
	controls.zoomToCursor = true

	// FPS Monitor

	const stats = new Stats()
	document.body.insertBefore( stats.domElement, document.body.firstElementChild )

	// Render

	renderer.setAnimationLoop( () => {

		renderer.render( scene, camera )

		stats.update()
	} )

	//

	return {
		scene,
		camera,
		renderer,
		controls,
		stats,
	}
}
