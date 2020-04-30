<?php
/*
Engue block editor scripts and styles
*/

function ach_register_custom_block_scripts_and_styles() {
    wp_register_script(
        'ach-custom-blocks-script',
        get_template_directory_uri() . '/build/js/guten-blocks.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );
 
    register_block_type( 'ach/hero-card', array(
        'editor_script' => 'ach-custom-blocks-script',
    ) );
 
}
add_action( 'enqueue_block_editor_assets', 'ach_register_custom_block_scripts_and_styles' );