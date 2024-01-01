import "./main.css"
import * as THREE from "three"
import * as Patterns from "./Patterns"
import { setupScene } from "./setup-scene"

// Basic setup

const canvas = document.getElementById( "webgl" )

const { scene } = setupScene( canvas )

scene.add( new THREE.AxesHelper( 2_000 ) )

// Buffers

let points = []

// Parametric decorations

points = Patterns.sphere( 10 )

points = Patterns.hyperboloid( 0.1, 0.1 )

points = Patterns.mobiusband( 5 )

points = Patterns.torus( 10, 5 )

points = Patterns.ellipse( 10, 10 )

points = Patterns.spiral( 1 )

points = Patterns.surface( 10, 10 )

// Build

const geometry = new THREE.BufferGeometry()
geometry.setAttribute( "position", new THREE.Float32BufferAttribute( points, 3 ) )
const material = new THREE.PointsMaterial( { sizeAttenuation: false } )
const object = new THREE.Points( geometry, material )
scene.add( object )
