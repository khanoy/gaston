<head>

	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	
	<title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
	
	<?php if($page->metadescription() != ''): ?>
		
		<meta name="description" content="<?php echo $page->metadescription() ?>">
		
	<?php else: ?>
		
		<meta name="description" content="<?php echo $site->metadescription()->html() ?>">
		
	<?php endif ?>
	
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
	
	<meta property="og:title" content="<?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?>">
	
	<meta property="og:type" content="website">
	
	<meta property="og:url" content="<?php echo $page->url() ?>">
	
	<?php if($page->metaimage() != ''): ?>
	
		<meta property="og:image" content="<?php echo $page->file($page->metaimage())->url(); ?>">
		
	<?php elseif($site->metaimage() != ''): ?>
		
		<meta property="og:image" content="<?php echo $site->file($site->metaimage())->url(); ?>">
		
	<?php endif ?>
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Playfair+Display:900" rel="stylesheet">
	
	<?php echo css('assets/css/index.css') ?>
	
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $site->url() ?>/assets/images/favicon.png">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	<?php echo js('assets/js/main.js') ?>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109141986-1"></script>
	
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', '');
	</script>
	
</head>

<body>