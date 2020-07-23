<?php
function ach_product_post_type() {
	$singular = "Zakázka";
	$plural = "Zakázky";

	$labels = array(
		'name' 						=> $plural,
		'singular_name' 			=> $singular,
		'add_name'					=> 'Přidat novou',
		'add_new_item' 				=> 'Přidat novou ' . $singular,
		'edit' 						=> 'Upravit',
		'edit_item' 				=> 'Upravit ' . $singular,
		'new_item' 					=> 'Nová ' . $singular,
		'view' 						=> 'Zobrazit ' . $singular,
		'view_item' 				=> 'Zobrazit ' . $singular,
		'search_term' 				=> 'Prohledat ' . $plural,
		'parent' 					=> 'Parent ' . $singular,
		'not_found' 				=> 'Žádné ' . $plural . ' nenalezeny',
		'not_found_in_trash' 		=> 'Žádné ' . $plural . ' v koši nenalezeny'
	);

	$args = array(
		'labels'					=> $labels,
		'public'					=> true,
		'publicly_queryable'		=> true,
		'exclude_from_search'		=> true,
		'show_ui'					=> true,
		'show_in_menu'				=> true,
		'query_var'					=> true,
		'can_export'				=> true,
		'menu_icon'					=> 'dashicons-hammer',
		'rewrite'					=> array( 'slug' => 'products' ),
		'capability_type'			=> 'post',
		'hierarchical'				=> false,
		'has_archive'				=> true,
		'menu_position'				=> null,
		'supports'					=> array( 'title', 'editor' ),
		'show_in_rest' 				=> true,
	);

	register_post_type( 'product', $args );
}
add_action('init', 'ach_product_post_type');

// Lock the product's block editor 
function myplugin_register_template() {
    $post_type_object = get_post_type_object( 'product' );
    $post_type_object->template = array(
        array( 'ach/product-showcase', array() ),
    );
    $post_type_object->template_lock = 'all';
}
add_action( 'init', 'myplugin_register_template' );