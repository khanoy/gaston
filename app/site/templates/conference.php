<?php snippet('head') ?>

<?php snippet('header') ?>
	
	<div id="synopsis">
		<div class="wrap">
			<div class="content">
				
				<div class="syn-text <?php if(isset($_POST) && $_POST != null && isset($_POST['email'])) { } else echo "visible"; ?>" >
					<p class="intro">Comment ne pas être touché par les nobles sentiments de ces belligérants qui, au plus profond d’eux-mêmes, l’espace de quelques heures, ont su écouter leurs valeurs humanitaires et rester des hommes prêts à mettre la haine de côté pour faire germer la fraternité pour la vie ?</p>

					<p>Laissez-vous inspirer par une conférence ayant pour trame de fond, un fait historique hors du commun, démontrant combien l’humanité véhiculée par l’histoire de Stanislas Déry et Peter Heisig est plus pertinente que jamais. Aujourd’hui encore, notre humanisme couplé à notre sens de l’éthique et nos valeurs sont constamment sollicités et demeurent au centre de nos prises de décisions personnelles et professionnelles.</p>

					<p>Découvrez, au coeur d’un conflit barbare, une histoire de pardon, de respect et d’ouverture qui naît contre toute attente et qui influencera notre comportement de tous les jours. Stanislas et Peter, l’un Canadien, l’autre Allemand, deux ennemis devenus amis. Cette histoire d’humanité, c’est l’histoire d’hommes qui, face au danger, face à la mort, ont dû prendre des décisions qui allaient changer totalement le cours de leurs vies. Le récit d’hommes qui ont su se laisser guider par leurs valeurs humaines plutôt que par la peur. Des hommes pour qui la guerre a été prétexte à l’amitié.</p>

					<a class="cta" id="syn-form">Réserver la conférence</a>
				</div>
				
				<div class="syn-form <?php if(isset($_POST) && $_POST != null && isset($_POST['email'])) { echo "visible" ;} ?>">
					<?php 
					if(isset($_POST) && $_POST != null && isset($_POST['email'])) {
						
						if($_POST['_gotcha'] == ""){
							$secretKey = "6Ldm7Z0UAAAAAHzODzhdKpeB1RbMq4Y9vZpFiUBh";
							$responseKey = $_POST['g-recaptcha-response'];
							$userIP = $_SERVER['REMOTE_ADDR'];
							
							$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
							$response = file_get_contents($url);
							$response = json_decode($response);
							
							if($response->success){
								include('BSFMail.php');

								$params["to"] = "gaston@gastondery.com";
								//$to = "david@laworkshop.ca";
								$params["subject"] = "Conférence gastondery.com";
								$params["from"] = "noreply@gastondery.com";
								$params["replyto"] = strip_tags($_POST['email']) . "\r\n";
								//$headers .= "MIME-Version: 1.0\r\n";
								//$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

								$params["html"] = "<html><body><h1>Demande de conférence</h1>Vous avez reçu une demande de conférence en provenance de votre site web.<br><br><table><tr><td><strong>Prénom et nom du contact : </strong></td><td> " . $_POST['nom'] . 
								"</td></tr><tr><td><strong>Adresse courriel : </strong></td><td> " . $_POST['email'] .
								"</td></tr><tr><td><strong>Téléphone : </strong></td><td> " . $_POST['tel'] . 
								"</td></tr><tr><td><strong>Entreprise / Organisme : </strong></td><td> " . $_POST['entreprise'] . 
								"</td></tr><tr><td><strong>Date souhaitée : </strong></td><td> " . $_POST['dateres'] .
								"</td></tr></table></body></html>";


								//mail($to, $subject, $msg, $headers);

								$response = SendBSFMail($params);
								if ($response) {

								?>

								<div class="success">
									<h2>Merci de votre intérêt!</h2>
									<p>Votre demande a été acheminée avec succès.</p>
									<p>Il nous fera plaisir de communiquer rapidement avec vous.</p>
									<a class="cta" id="syn-text">Retour au synopsis</a>
								</div>
								<?php } else { ?>
									<h2>Un problème est survenu</h2>
									<p>Assurez-vous que tous les champs sont bien remplis et que la case "Je ne suis pas un robot" est cochée.</p>
									<form action="#synopsis" method="post">

										<input type="text" name="nom" placeholder="Nom et prénom" required/>

										<input type="text" name="email" placeholder="Votre courriel" required/>

										<input type="text" name="tel" placeholder="Votre téléphone"/>

										<input type="text" name="entreprise" placeholder="Entreprise / Organisme"/>

										<input type="text" name="dateres" placeholder="Date souhaitée"/>

										<input type="text" class="gotcha" name="_gotcha" />

										<div class="g-recaptcha" data-sitekey="6Ldm7Z0UAAAAAJJRR5aln3ATPqilLcjb6MM6zDIS"></div>

										<input type="submit" class="cta" value="Soumettre ma demande" />

									</form>

									<a class="back" id="syn-text">Retour au synopsis</a>

		                                                        
								<?php } ?>
					<?php } else { ?>
							<h2>Un problème est survenu</h2>
							<p>Assurez-vous que tous les champs sont bien remplis et que la case "Je ne suis pas un robot" est cochée.</p>
							<form action="#synopsis" method="post">

								<input type="text" name="nom" placeholder="Nom et prénom" required/>

								<input type="text" name="email" placeholder="Votre courriel" required/>

								<input type="text" name="tel" placeholder="Votre téléphone"/>

								<input type="text" name="entreprise" placeholder="Entreprise / Organisme"/>

								<input type="text" name="dateres" placeholder="Date souhaitée"/>

								<input type="text" class="gotcha" name="_gotcha" />

								<div class="g-recaptcha" data-sitekey="6Ldm7Z0UAAAAAJJRR5aln3ATPqilLcjb6MM6zDIS"></div>

								<input type="submit" class="cta" value="Soumettre ma demande" />

							</form>

							<a class="back" id="syn-text">Retour au synopsis</a>
					<?php } ?>
				<?php } 
				}
			else { ?>
			<h2>Intéressé à réserver une conférence?</h2>
			<p>Svp remplir le formulaire suivant et nous communiquerons avec vous dans les plus brefs delais possibles.</p>
			<form action="#synopsis" method="post">

				<input type="text" name="nom" placeholder="Nom et prénom" required/>

				<input type="text" name="email" placeholder="Votre courriel" required/>

				<input type="text" name="tel" placeholder="Votre téléphone"/>
				
				<input type="text" name="entreprise" placeholder="Entreprise / Organisme"/>
				
				<input type="text" name="dateres" placeholder="Date souhaitée"/>

				<input type="text" class="gotcha" name="_gotcha" />
				
				<div class="g-recaptcha" data-sitekey="6Ldm7Z0UAAAAAJJRR5aln3ATPqilLcjb6MM6zDIS"></div>
				
				<input type="submit" class="cta" value="Soumettre ma demande" />

			</form>
			
			<a class="back" id="syn-text">Retour au synopsis</a>
			<?php } ?>
					
				</div>
			</div>
		</div>
	</div>

<?php snippet('footer') ?>
