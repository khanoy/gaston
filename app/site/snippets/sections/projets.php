<section id="<?php echo $page->uid() ?>" class="<?php echo $page->template() ?>">
	
	<?php foreach($page->children()->visible() as $item): ?>
		
		<article id="<?php echo $item->uid() ?>" class="<?php echo $item->template() ?>" style="background-color: #<?php echo $item->couleur() ?>">
			
			<?php if($item->hasImages()): ?>
			
				<img class="image" src="<?php echo $item->images()->first()->url() ?>" title="<?php echo $item->title() ?>">
				
			<?php endif ?>
			
				<div class="info">
					
					<h2><?php echo $item->title() ?></h2>
					
					<?php if($item->dimensions() != ""): ?>
					
						<span class="dimensions"><?php echo $item->dimensions() ?></span>
					
					<?php endif ?>
					
				</div>
			
		</article>
		
	<?php endforeach ?>
	
</section>