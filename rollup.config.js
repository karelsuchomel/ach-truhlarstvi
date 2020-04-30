import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';

export default [
	// browser-friendly IIFE build
	{
		input: 'src/js/guten-blocks.js',
		output: {
			name: "gutenbergBlocks",
			file: "build/js/guten-blocks.js",
			format: 'iife'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
				exclude: ['node_modules/**']
			}),
			// uglify(),
		]
	}
];
