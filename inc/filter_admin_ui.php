<?php
// remove all metaboxes from dashboard page
function lspbce_customize_dashboard_widgets()
{
	// which metabox, on what page is it on, in which section is it located
	remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );			// Right Now
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );		// Recent Comments
	remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );		// Incoming Links
	remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );				// Plugins
	remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );			// Quick Press
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );			// Recent Drafts
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );				// WordPress blog
	remove_meta_box( 'dashboard_secondary', 'dashboard', 'side' );				// Other WordPress News
}
add_action( 'wp_dashboard_setup', 'lspbce_customize_dashboard_widgets' );
// remove unused menu items
function my_remove_menu_pages()
{
	remove_menu_page( 'index.php' ); 				// Dashboard
	remove_menu_page( 'edit.php' );					//Posts
	remove_menu_page( 'edit-comments.php' );		//Comments

	// remove_menu_page( 'upload.php' );                 //Media
	// remove_menu_page( 'edit.php?post_type=page' );    //Pages
	// remove_menu_page( 'edit-comments.php' );          //Comments
	// remove_menu_page( 'themes.php' );                 //Appearance
	// remove_menu_page( 'plugins.php' );                //Plugins
	// remove_menu_page( 'users.php' );                  //Users
	// remove_menu_page( 'tools.php' );                  //Tools
	// remove_menu_page( 'options-general.php' );        //Settings
}
add_action( 'admin_menu', 'my_remove_menu_pages' );