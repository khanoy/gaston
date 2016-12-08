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

	<header>
		
		<h1 id="icon">
			
			<img src="assets/images/silvytruchon-icon.svg" title="<?php echo $site->title() ?>">
			
		</h1>
		
		<nav class="menu">
		
  		<?php foreach($page->children()->visible() as $section): ?>
  		
  			<a id="nav-item-<?php $section->uid() ?>" class="nav-item nav-item-<?php $section->template() ?>"><?php $section->title() ?></a>
  		
  		<?php endforeach ?>
		
		</nav>
	
	</header>