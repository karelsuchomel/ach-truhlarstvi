<?php
/*
Engue block editor scripts and styles
*/

function ach_register_blocks() {
    wp_register_script(
        'ach-blocks',
        get_template_directory_uri() . '/build/js/blocks.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );

    wp_register_style(
        'blocks-styles',
        get_template_directory_uri() . '/build/css/blocks.css',
        array( 'wp-edit-blocks' )
    );
 
    register_block_type( 'ach/hero-card', array(
        'editor_script' => 'ach-blocks',
        'editor_style' => 'blocks-styles',
    ) );

    register_block_type( 'ach/product-showcase', array(
        'editor_script' => 'ach-blocks',
        'editor_style' => 'blocks-styles',
    ) );
    
    register_block_type( 'ach/step-card', array(
        'editor_script' => 'ach-blocks',
        'editor_style' => 'blocks-styles',
    ) );
    
    register_block_type( 'ach/contact-card', array(
        'editor_script' => 'ach-blocks',
        'editor_style' => 'blocks-styles',
    ) );
 
}
add_action( 'enqueue_block_editor_assets', 'ach_register_blocks' );