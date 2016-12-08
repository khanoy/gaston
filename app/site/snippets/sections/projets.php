<section id="<?php echo $page->uid() ?>" class="<?php echo $page->template() ?>">
	
	<?php foreach($page->children()->visible() as $item): ?>
		
		<article id="<?php echo $item->uid() ?>" class="<?php echo $item->template() ?>" style="background-color: #<?php echo $item->couleur() ?>">
			
			<div class="cols cols-2-full">
			
			  <div class="col w66-full h100-full">
			  
    			<?php if($item->hasImages()): ?>
    			
    				<img src="<?php echo $item->images()->first()->url() ?>" title="<?php echo $item->title() ?>">
    				
    			<?php endif ?>
    			
			  </div>
			  
			  <div class="col w33-full">
    			
    			<div class="mood h50-full">
      			
      			<?php if($item->hasImages()): ?>
    			
      				<img src="<?php echo $item->images()->first()->url() ?>" title="<?php echo $item->title() ?>">
      				
      			<?php endif ?>
      			
    			</div>
    			
  				<div class="info h50-full">
  					
  					<h2><?php echo $item->title() ?></h2>
  					
  					<?php if($item->dimensions() != ""): ?>
  					
  						<span class="dimensions"><?php echo $item->dimensions() ?></span>
  					
  					<?php endif ?>
  					
  					<?php if($item->text() != ""): ?>
  					
  						<p><?php echo $item->text() ?></p>
  					
  					<?php endif ?>
  					
  				</div>
        
			  </div>
    				
      </div>
			
		</article>
		
	<?php endforeach ?>
	
</section>