<?php
/*
Engue block editor scripts and styles
*/

function ach_register_custom_block_scripts_and_styles() {
    wp_register_script(
        'ach-gruttemberg-script',
        get_template_directory_uri() . '/inc/custom-blocks/block.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );
 
    register_block_type( 'ach/program-card', array(
        'editor_script' => 'ach-gruttemberg-script',
    ) );
 
}
add_action( 'enqueue_block_editor_assets', 'ach_register_custom_block_scripts_and_styles' );