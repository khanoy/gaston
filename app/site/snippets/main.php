<main>

	<?php foreach($page->children()->visible() as $section): ?>
	
		<?php snippet("sections/".$section->template(), array('page'=> $section)) ?>
		
	<?php endforeach ?>

</main>