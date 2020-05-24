<?php
/*
Engue block editor scripts and styles
*/

function ach_register_hero_card() {
    wp_register_script(
        'ach-hero-card-script',
        get_template_directory_uri() . '/build/js/hero-card.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );

    wp_register_style(
        'blocks-styles',
        get_template_directory_uri() . '/build/css/blocks.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_script(
        'ach-product-showcase-script',
        get_template_directory_uri() . '/build/js/product-showcase.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );
 
    register_block_type( 'ach/hero-card', array(
        'editor_script' => 'ach-hero-card-script',
        'editor_style' => 'blocks-styles',
    ) );

    register_block_type( 'ach/product-showcase', array(
        'editor_script' => 'ach-product-showcase-script',
        'editor_style' => 'blocks-styles',
    ) );
 
}
add_action( 'enqueue_block_editor_assets', 'ach_register_hero_card' );