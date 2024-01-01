export const sphere = R => {

	const result = []

	for ( let u = 0; u < 2 * Math.PI; u += 0.1 ) {

		for ( let v = 0; v < Math.PI; v += 0.1 ) {

			const x = R * Math.sin( u ) * Math.cos( v )
			const y = R * Math.sin( u ) * Math.sin( v )
			const z = R * Math.cos( u )

			result.push( x, y, z )
		}
	}

	return result
}

export const hyperboloid = ( a, b ) => {

	const result = []

	for ( let u = - 5; u <= 5; u += 0.1 ) {

		for ( let v = 0; v < 2 * Math.PI; v += 0.1 ) {

			const x = a * Math.cosh( u ) * Math.cos( v )
			const y = a * Math.cosh( u ) * Math.sin( v )
			const z = b * Math.sinh( u )

			result.push( x, y, z )
		}
	}

	return result
}

export const mobiusband = R => {

	const result = []

	for ( let u = 0; u < 2 * Math.PI; u += 0.1 ) {

		for ( let v = - 2; v <= 2; v += 0.1 ) {

			const x = ( R + v * Math.cos( u / 2 ) ) * Math.cos( u )
			const y = ( R + v * Math.cos( u / 2 ) ) * Math.sin( u )
			const z = v * Math.sin( u / 2 )

			result.push( x, y, z )
		}
	}

	return result
}

export const torus = ( R, r ) => {

	const result = []

	for ( let u = 0; u < 2 * Math.PI; u += 0.1 ) {

		for ( let v = 0; v < 2 * Math.PI; v += 0.1 ) {

			const x = ( R + r * Math.cos( u ) ) * Math.cos( v )
      		const y = ( R + r * Math.cos( u ) ) * Math.sin( v )
			const z = r * Math.sin( u )

			result.push( x, y, z )
		}
	}

	return result
}

export const ellipse = ( a, b ) => {

	const result = []

	for ( let u = 0; u < 2 * Math.PI; u += 0.1 ) {

		const x = a * Math.cos( u )
		const y = b * Math.sin( u )

		result.push( x, 0, y )
	}

	return result
}


export const spiral = a => {

	const result = []

	for ( let t = 0; t < 10 * Math.PI; t += 0.1 ) {

		const x = a * t * Math.cos( t )
		const y = a * t * Math.sin( t )

		result.push( x, 0, y )
	}

	return result
}

export const surface = ( u, v ) => {

	const result = []

	for ( let u = 0; u <= 5; u += 0.1 ) {

		for ( let v = 0; v <= 2 * Math.PI; v += 0.1 ) {

			const x = u * Math.cos( v )
			const y = u * Math.sin( v )
			const z = u ** 2

			result.push( x, y, z )
		}
	}

	return result
}
