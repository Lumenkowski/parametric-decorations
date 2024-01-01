import "./main.css"
import * as THREE from "three"
import { setupScene } from "./setup-scene"

// Basic setup

const canvas = document.getElementById( "webgl" )

const { scene } = setupScene( canvas )

scene.add( new THREE.AxesHelper( 2_000 ) )
