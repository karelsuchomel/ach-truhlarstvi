<?php
/**
 * ach-truhlarstvi functions and definitions
 *
 * @package ach-truhlarstvi
 */

if ( ! defined( 'ACH_VERSION' ) ) {
	define( 'ACH_VERSION', '0.0.1-alpha' );
}

// import stylesheet
function ach_resources () 
{
	// main
	wp_enqueue_style('style', get_stylesheet_uri());

	wp_enqueue_style( 'ach-style', get_template_directory_uri() . '/build/css/bundle.css', array(), ACH_VERSION );

	// wp_enqueue_script( 'ach-javascript', get_template_directory_uri() . '/build/js/bundle.js', array(), ACH_VERSION, true );

}
add_action('wp_enqueue_scripts', 'ach_resources');

// theme setup
function ach_theme_setup()
{
	// navigation menus
	register_nav_menus(array(
		'primary-menu' => __('Header navigation'),
	));

	add_theme_support( 'disable-custom-font-sizes' );
	add_theme_support( 'disable-custom-colors' );
	add_theme_support( 'disable-custom-gradients' );
	add_theme_support( 'editor-styles' );
	add_editor_style( get_template_directory_uri() . '/build/css/admin.css' );
}
add_action('after_setup_theme', 'ach_theme_setup');

// use post's front-end styles in TinyMCE text editor
// function ach_theme_add_editor_styles() {
// 	add_editor_style( 'build/css/bundle.css' );
// }
// add_action( 'admin_init', 'ach_theme_add_editor_styles' );

// Deregister default guttemberg styling
function wps_deregister_styles() {
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );

// remove WordPress emojis
require get_template_directory() . '/inc/remove_wp_emoji.php';
// Filter administration UI
require get_template_directory() . '/inc/filter_admin_ui.php';
// Enqueue block editor scripts and styles
require get_template_directory() . '/inc/custom-blocks/block-editor-scripts.php';
// Custom template tags for this theme
require get_template_directory() . '/inc/template-tags.php';