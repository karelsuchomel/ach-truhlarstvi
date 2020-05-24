import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
	// browser-friendly IIFE build
	{
		input: 'js/editorBlocks/hero-card.js',
		output: {
			name: "gutenbergBlockHeroCard",
			file: "build/js/hero-card.js",
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
	{
		input: 'js/editorBlocks/product-showcase.js',
		output: {
			name: "gutenbergBlocksProductShowcase",
			file: "build/js/product-showcase.js",
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
