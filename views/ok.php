<?php 
$path = $_SERVER['DOCUMENT_ROOT']; 
$title = "TAMPICO34 | Mensaje enviado";
?>
<?php include $path . "/views/partials/header.php" ?>

<body>

	<!-- Logo sticky -->
	<div class="container-fluid sticky-top bg-white">
		<div class="row">
			<div class="col-12 px-5 mt-md-4">
				<img src="/static/img/logo.png" alt="Tampico 34 - Espacio de coworking en Madrid">
			</div>
		</div>
	</div>

	<!-- Banner principal -->
	<div class="jumbotron jumbotron-fluid big-banner">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-9 col-lg-6 px-md-5">
					<div class="p-md-5 text-center bg-gris_trans">
						<br><br>
						<h1 class="text-primary mt-5 display-4 txtH70">Correo enviado</h1>
						<h5 class="text-primary my-5 txtH24">Hemos recibido tu correo <br> muchas gracias por contactarnos <br> nos pondremos en contacto contigo lo antes posible</h5>
						
						<a href="/" class="btn btn-primary mb-5 px-4 py-3 txtN15">VOLVER A HOME</a>
						<br><br>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<?php include $path . "/views/partials/footer.php" ?>
</body>
</html>