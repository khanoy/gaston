<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	
	<title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
	
	<?php echo css('assets/css/main.css') ?>

</head>
<body>

	<header <?php if($page->couleur() != ""): ?>style="background-color: #<?php $page->couleur() ?>;<?php endif ?> <?php if($page->hasImages()): ?>background-image: url(<?php $page->images()->first()->url() ?>);"<?php endif ?>>
	
		<h1>
			
			<img src="assets/images/logo.svg" title="<?php echo $site->title() ?>">
			
		</h1>
		
		<?php foreach($page->children()->visible() as $section): ?>
		
			<a id="nav-item-<?php $section->uid() ?>" class="nav-item nav-item-<?php $section->template() ?>"><?php $section->title() ?></a>
		
		<?php endforeach ?>
	
	</header>