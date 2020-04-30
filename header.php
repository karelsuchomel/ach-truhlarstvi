<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ach
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'ach' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<div id="logo">
				<?php require_once('template-parts/header-logo.php');?>
			</div>
			<?php
			// the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			endif;
			$ach_description = get_bloginfo( 'description', 'display' );
			if ( $ach_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $ach_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<div id="primary-navigation-toggle" aria-label="Toggle primary navigation" tabindex="0">
				<div class="icon-helper"></div>
				<div class="icon-helper"></div>
				<div class="icon-helper"></div>
			</div>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary-menu',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
		<div id="language-selector-ccontainer">
			<a href="">English</a>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
