<!doctype html>

<html>
<head>
  <meta charset="utf-8">

  <title>Gaston Déry présente sa nouvelle conférence «L’héritage d’un père».</title>
  <meta name="description" content="Une conférence inspirante... Un récit touchant qui change nos perceptions, notre vie. Stanislas et Peter, l’un Canadien, l’autre Allemand, deux ennemis devenus amis. Une histoire d’amitié et d’humanité.">
  <meta property="og:title" content="Gaston Déry présente sa nouvelle conférence «L’héritage d’un père»." />
	<meta property="og:description" 
  content="Une conférence inspirante... Un récit touchant qui change nos perceptions, notre vie. Stanislas et Peter, l’un Canadien, l’autre Allemand, deux ennemis devenus amis. Une histoire d’amitié et d’humanité." />
	<meta property="og:image" content="https://www.gastondery.com/gastondery-OG.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />
	<link rel="icon" type="image/png" sizes="32x32" href="https://www.gastondery.com/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Playfair+Display:900" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/index.css?v=2">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="assets/js/main.js"></script>


</head>

<body>
	
	<div class="header">
		<div class="wrap">
			
			
				<div class="menu">
					<ul>
						<li><span>Gastondery<span class="yellow">.com</span></span></li>
						<li><a href="#synopsis">La conférence</a></li>
						<li><a href="#about" class="toggle_gaston">Gaston</a></li>
						<li><a href="#about" class="toggle_coord">Coordonnées</a></li>
					</ul>
				</div>
				<span class="mobile" id="toggle_menu">Menu</span>
				<div class="mobile-menu">
					<ul>
						<li><a href="#synopsis">La conférence</a></li>
						<li><a href="#about" class="toggle_gaston">Gaston</a></li>
						<li><a href="#about" class="toggle_coord">Coordonnées</a></li>
					</ul>
				</div>
				
				<div class="content">
					<h1>L'héritage<br>d'un père</h1>
					<p class="intro">Une conférence inspirante... Un récit touchant qui change nos perceptions, notre vie. Stanislas et Peter, l’un Canadien, l’autre Allemand, deux ennemis devenus amis. Une histoire d’amitié et d’humanité.</p>
					<p>Une conférence de <span class="yellow">Gaston Déry</span></p><br>
					<a href="#synopsis" class="cta">En savoir plus</a>
				</div>

			
		</div>
	</div>
	
	
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
	
	<div id="about">
		<div class="wrap">
			<div class="content">
				<ul class="toggler">
					<li><a id="1">À propos de Gaston Déry</a></li>
					<li><a id="2">Honneurs et distinctions</a></li>
					<li><a id="3">Implications sociales</a></li>
					<li><a id="4">Coordonnées</a></li>
				</ul>
				<div id="toggle">
					<div id="toggle_1" class="toggle">
						<h2>Gaston Déry présente sa nouvelle conférence <i>L’héritage d’un père.</i></h2>
						<p>Gaston présente une feuille de route diversifiée où les plans économique, social et environnemental se sont côtoyés.</p>
						<p>Enfant du fleuve, il est associé à la mise en valeur du Saint- Laurent. Identifié comme l’un des acteurs participant à la concrétisation du développement durable au Québec et fréquemment sollicité pour donner des conférences sur ce sujet, il veille aujourd’hui plus que jamais à marier les notions économie, social et environnement dans un monde plus durable à bâtir selon une approche humanitaire.</p>

					</div>
					<div id="toggle_2" class="toggle">
						<h2>Honneurs et distinctions</h2>
						<p>Membre de l’Ordre du Canada (2017)<br>
						<i style="color:#ffcd55">Pour son dévouement à la mise en valeur du patrimoine naturel et sa contribution au développement durable</i></p>
						<p>Diplômé influent de l’Université Laval, 2015</p>
						<p>Président du 20ème anniversaire du Parc technologique du Québec métropolitain (2013)</p>
						<p>Président d’honneur du 75ème anniversaire de la faculté de sciences et de génie de l’Université Laval (2012)</p>
						<p>Gaston Déry et la firme Roche ltée — Groupe-conseil ont obtenu le Prix Arts et Affaires de la Chambre de commerce et d’industrie de Québec — Grande entreprise pour son implication auprès de l’Opéra de Québec, 2012</p>
						<p>Grand lauréat Le Soleil Radio Canada, catégorie culture pour la création du festival d’opéra de Québec (2011)</p>
						<p>Lauréat de la semaine Le Soleil Radio Canada, pour la création du festival d’opéra de Québec. (2011)</p>
						<p>Lauréat Le Soleil Radio Canada, pour le phœnix de l’environnement (2007)</p>
						<p>Récipiendaire du Phœnix de l’environnement, catégorie Mise en valeur de la biodiversité et des espaces naturels (2007)</p>
						<p>Récipiendaire Prix Pierre-Talbot, bénévole de l’année, Chambre de commerce de Québec (2007)</p>
						<p>Certificat de reconnaissance par la Société Provancher d’histoire naturelle du Canada</p>
						<p>Certificat de reconnaissance par l’organisme Canards Illimités Canada</p>
					</div>
					<div id="toggle_3" class="toggle">
						<h2>Implications sociales</h2>
						<p>Conseil d’administration de la Fondation Prince Albert ll de Monaco, branche canadienne</p>
						<p>Ambassadeur du projet Saint-Laurent pour Conservation de la Nature Canada</p>
						<p>Membre de la Commission scientifique externe du Réseau Québec maritime</p>
						<p>Conseil d’administration de la Fondation du conservatoire de musique et d’art dramatique du Québec</p>
					</div>
					<div id="toggle_4" class="toggle">
						<h2>Coordonnées</h2>
						<p>+1 (418) 564-5976<br>gaston@gastondery.com</p>
						<a target="blank" href="https://www.facebook.com/gaston.dery.5" class="external">Facebook</a><br>
						<a target="blank" href="https://www.linkedin.com/in/gaston-d%C3%A9ry-c-m-31384524/" class="external">Linkedin</a><br>
						<a target="blank" href="https://fr.wikipedia.org/wiki/Gaston_D%C3%A9ry" class="external">Wikipedia</a>
					</div>
				</div>
			</div>
			<a class="credit" target="blank" href="https://laworkshop.ca/"><img src="assets/images/workshop.svg"></a>
		</div>
	</div>
	<script src='https://www.google.com/recaptcha/api.js'></script>
</body>
</html>
