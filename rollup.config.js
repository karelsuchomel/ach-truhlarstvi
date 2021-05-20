import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
	// browser-friendly IIFE build
	{
		input: 'js/index.js',
		output: {
			name: "mainBundle",
			file: "build/js/bundle.js",
			format: 'iife'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			babel({
				exclude: ['node_modules/**']
			}),
			commonjs(), // so Rollup can convert `ms` to an ES module
			// uglify(),
		]
	},
	{
		input: 'js/editorBlocks/blocks.js',
		output: {
			name: "gutenbergBlocks",
			file: "build/js/blocks.js",
			format: 'iife'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			babel({
				exclude: ['node_modules/**']
			}),
			commonjs(), // so Rollup can convert `ms` to an ES module
			uglify(),
		]
	},
];
