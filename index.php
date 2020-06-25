<?php 
$path = $_SERVER['DOCUMENT_ROOT']; 

$title = "Coworking en Madrid | Sala Reuniones y Oficinas | TAMPICO34";
?>
<?php include $path . "/views/partials/header.php" ?>
<body>
	
	<div class="row">
		<?php include "views/partials/menu.php" ?>
	</div>

	<!-- Banner principal -->
	<div class="jumbotron jumbotron-fluid big-banner">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-9 col-lg-6 px-md-5">
					<div class="p-md-5 text-center bg-gris_trans">
						<br><br>
						<h1 class="text-primary mt-5 display-4 txtH70">TAMPICO34</h1>
						<h5 class="text-primary my-5 txtH24">Tu espacio de coworking en Madrid</h5>
						<!-- <div class="btn btn-primary mb-5 px-4 py-3 txtN15">CONTÁCTANOS</div> -->
						<a href="#formulario_contacto" class="btn btn-primary mb-5 px-4 py-3 txtN15">CONTÁCTANOS</a>
						<br><br>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- coworking en Madrid -->
	<div class="container">
		<div class="row">
			<div class="col text-center mt-4 py-5">
				<h1 class="text-primary txtH40">COWORKING EN MADRID</h1>
				<p class="text-primary txtN18">¿Qué encontrarás?</p>
			</div>
		</div>

	</div>

	
	<!-- Flexiblilidad | Cercania | Espacio innovador -->
	<div class="row no-gutters">
		<div class="col-12 col-md-4 ">
			<div class="card border-0 h-100">
				<img src="/static/img/flexibilidad.jpg" class="card-img-top rounded-0" alt="...">
				<div class="card-body text-center bg-T34-gris px-5 pb-5 text-primary">
					<h4 class="card-title my-4 txtH30">FLEXIBILIDAD</h4>
					<p class="card-text txtN15 mb-md-5">Los tiempos han cambiado, y la forma de trabajar con ellos. Para aquellas pequeñas y medianas empresas, tanto como freelance o startups que estuvieran buscando un espacio de trabajo flexible ha llegado el momento de que nos conozcan.</span></p>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card border-0 h-100">
				<img src="/static/img/cercania.jpg" class="card-img-top rounded-0" alt="...">
				<div class="card-body text-center bg-T34-gris-verdoso px-5 pb-5">
					<h4 class="card-title my-4 txtH30 text-white"><span class="txt_coworking-central">CERCANÍA</span></h4>
					<p class="card-text txtN15 text-white"><span class="txt_coworking-central">Dentro de Madrid y con múltiples combinaciones de transporte. Muy cerca de varias paradas de bus como de Metro (Ciudad Lineal L5). Además, cuenta con servicios cercanos como: bares, restaurantes, supermercados, gimnasio...</span></p>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card border-0 h-100">
				<img src="/static/img/espacio_innovador.jpg" class="card-img-top rounded-0" alt="...">
				<div class="card-body text-center bg-T34-gris px-5 pb-5 text-primary">
					<h4 class="card-title my-4 txtH30">ESPACIO INNOVADOR</h4>
					<p class="card-text txtN15">Para trabajar en un ambiente innovador y que inspiren a empresas TOP. Dispones de +150m² donde podrás recibir a clientes, tener reuniones de equipo en salas totalmente equipadas y sin olvidarnos de los detalles que te gustan.</p>
				</div>
			</div>
		</div>
	</div>


	<!-- Caracteristicas -->
	<div class="row no-gutters">
		<div class="col-12 col-md-6 bg-sala_reuniones my-5 text-center">
			<h3 class="text-white d-md-none mt-5 pt-5 txtH30" name="caracteristicas">CARACTERÍSTICAS</h3>			
		</div>
		<div class="col-12 col-md-6 my-md-5 mx-5 mx-md-0 px-md-2 px-lg-5">
			<div class="row my-md-5">
				<div class="col">
					<!--<h3 class="text-primary d-none d-md-block txtH30">CARACTERÍSTICAS</h3>-->
					<a class="text-primary d-none d-md-block txtH30" id="caracteristicas">CARACTERISTICAS</a>
					<p class="text-primary txtN18 d-none d-md-block">Todo lo que necesitas</p>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-md-6 p-4">
					<i class="fa fa-wifi fa-2x text-primary"></i>
					<h4 class="text-primary txtH30 my-4">WIFI</h4>
					<p class="text-primary txtN18">Alta velocidad en todas las ubicaciones</p>
				</div>
				<div class="col-12 col-md-6 p-4">
					<i class="fa fa-parking fa-2x text-primary"></i>
					<h4 class="text-primary txtH30 my-4">APARCAMIENTO</h4>
					<p class="text-primary txtN18">Estacionamiento gratuito en la zona</p>
				</div>
				<div class="col-12 col-md-6 p-4">
					<i class="fa fa-chair fa-2x text-primary"></i>
					<h4 class="text-primary txtH30 my-4">EQUIPAMIENTO</h4>
					<p class="text-primary txtN18">Oficinas con todo lo que necesitas</p>
				</div>
				<div class="col-12 col-md-6 p-4">
					<i class="fa fa-door-open fa-2x text-primary"></i>
					<h4 class="text-primary txtH30 my-4">ACCESO LIBRE</h4>
					<p class="text-primary txtN18">Horarios flexibles, pensando en tu negocio</p>
				</div>
			</div>			
		</div>
	</div>

	<div class="container">

		<!-- Oficinas -->
		<div class="row">
			<div class="col text-center py-5">
				<!--<h1 class="text-primary txtH40">OFICINAS</h1>-->
				<a class="text-primary txtH40" id="oficinas">OFICINAS</a>
				<p class="text-primary txtN18">Encuentra el espacio perfecto para tu equipo</p>
			</div>
		</div>

	</div>
	

	<div class="container-fluid">

		<div class="row row-cols-1 row-cols-md-2">
		  
			<div class="col mb-0 mb-md-4 order-md-1">
				<div class="bg-freelance"></div>
			</div>

			<div class="col mb-4 order-md-2 ml-md-n1">
				<div class="bg-gris h-100">
					<div class="text-center miValign">
						<h4 class="text-primary txtH30 my-4"><strong>FREELANCE</strong></h4>
						<p class="text-primary txtN15">Ha llegado el momento de dar el salto a tener un espacio fijo de trabajo, un sitio donde recibir a tus clientes, recibir el correo y de profesionalizar un poco más tus servicios. Ahora, tendrás acceso a tu puesto de trabajo fijo de L a V de 09:00 a 18:30.</p>
					</div>
				</div>
			</div>

			<div class="col mb-0 mb-md-4 order-md-4">
				<div class="bg-company"></div>
			</div>

			<div class="col mb-4 order-md-3 ml-md-n1">
				<div class="bg-gris h-100">
					<div class="text-center miValign">
						<h4 class="card-title text-primary txtH30 my-4"><strong>COMPANY</strong></h4>
						<p class="card-text text-primary txtN15">Si atiendes clientes en tu propia oficina o tienes que compartir espacio de trabajo con el resto de tu equipo podrás hacerlo en un espacio perfectamente equipado e iluminado. Dedícale el tiempo que necesites, tienes acceso 24h de L a D.</p>
					</div>
				</div>
			</div>

			<div class="col mb-0 mb-md-4 order-md-5">
				<div class="bg-freelance"></div>
			</div>

			<div class="col mb-4 order-md-6 ml-md-n1">
				<div class="bg-gris h-100">
					<div class="text-center miValign">
						<h4 class="card-title text-primary txtH30 my-4"><strong>EXECUTIVE</strong></h4>
						<p class="card-text text-primary txtN15">Espacio de trabajo + reunión todo en uno.<br>Es una opción perfecta para equipos de trabajo que van rotando o que deben tener dos áreas distintas en la misma oficina. Acceso libre de L a D (24h) a las zonas comunes y oficina.</p>
					</div>
				</div>
			</div>

		</div>
	</div>


	<div class="container">

		<!-- Salas de reuniones -->
		<div class="row">
			<div class="col text-center py-5">
				<h1 class="text-primary txtH40">SALAS DE REUNIONES</h1>
				<p class="text-primary txtN18">Encuentros con clientes o sesiones de trabajo</p>
			</div>
		</div>


		<!-- LIGHTBOX  -->
		<div class="row">
			<div class="col-12 col-md-8 p-2">
				<a href="/static/img/sala-reuniones-virtuales-01.jpg"  data-lightbox="galeria-T34" data-title="Salas de reunión">
					<img src="/static/img/sala-reuniones-virtuales-01.jpg" class="decolorar" width="100%">
				</a>
			</div>
			<div class="col-12 col-md-4">
				<div class="row">
					<div class="col-12 p-2">
						<a href="/static/img/sala-reuniones-virtuales-02.jpg" data-lightbox="galeria-T34" data-title="Sala de reunión equipada con TV">
							<img src="/static/img/sala-reuniones-virtuales-02.jpg" class="decolorar" width="100%">
						</a>
					</div>
					<div class="col-12 p-2">
						<a href="/static/img/sala-reuniones-virtuales-03.jpg" data-lightbox="galeria-T34" data-title="Sala de reunión para 6 personas">
							<img src="/static/img/sala-reuniones-virtuales-03.jpg" class="decolorar" width="100%">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row mb-md-5">
			<div class="col-12 col-md-4 p-2">
				<a href="/static/img/sala-reuniones-entrada-01.jpg" data-lightbox="galeria-T34" data-title="Reunion en espacios más tranquilos del coworking">
					<img src="/static/img/sala-reuniones-entrada-01.jpg" class="decolorar" width="100%">
				</a>
			</div>
			<div class="col-12 col-md-4 p-2">
				<a href="/static/img/sala-reuniones-entrada-02.jpg" data-lightbox="galeria-T34" data-title="Tampico34 cuenta con espacios para todo">
					<img src="/static/img/sala-reuniones-entrada-02.jpg" class="decolorar" width="100%">
				</a>
			</div>
			<div class="col-12 col-md-4 p-2">
				<a href="/static/img/sala-reuniones-entrada-03.jpg" data-lightbox="galeria-T34" data-title="La comodidad es un factor diferencial">
					<img src="/static/img/sala-reuniones-entrada-03.jpg" class="decolorar" width="100%">
				</a>
			</div>
		</div>


		<!-- Slide - Estas en casa -->
		<div class="row mt-5 mt-lg-0 mb-md-5 no-gutters">
			<div class="col-12 col-md-6 offset-lg-1 mt-lg-5">
				<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" >
				  <div class="carousel-inner">
				    <div class="carousel-item active">
				        <img src="/static/img/slide/hall-recibidor.png" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block bg-oscuro_trans">
							<h3>Entrada a Tampico34: ¡Bienvenidos al nuevo coworking en Madrid!</h3>
						</div>
				    </div>
				    <div class="carousel-item">
				        <img src="/static/img/slide/aseo.png" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block bg-oscuro_trans">
							<h3>Decoración con mucho gusto</h3>
						</div>
				    </div>
				    <div class="carousel-item">
				        <img src="/static/img/slide/aseo-adaptado.png" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block bg-oscuro_trans">
							<h3>WC Tampico34</h3>
						</div>
				    </div>
				    <div class="carousel-item">
				        <img src="/static/img/slide/despacho-executive.png" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block bg-oscuro_trans">
							<h3>Espacios innovadores en Tampico34</h3>
						</div>
				    </div>
				    <div class="carousel-item">
				        <img src="/static/img/slide/detalle-office.png" class="d-block w-100" alt="...">
						<div class="carousel-caption d-none d-md-block bg-oscuro_trans">
							<h3>Servicios extra para los clientes del coworking</h3>
						</div>
				    </div>
				  </div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-5 ml-0 ml-md-n5 mt-lg-5 pt-lg-5">
				<br>
				<div class="bg-T34-gris text-center px-5 py-3 p-lg-5">
					<h4 class="text-primary txtH40 mt-0 my-md-3 ml-0">ESTÁS EN CASA</h4>
					<p class="text-primary txtN15">Sabemos de la importancia que tiene el ambiente laboral y por eso, hemos querido cuidar y mimar los detalles para que ésta sea mucho más que un coworking de Madrid. Deja que hagamos siempre todo lo que esté en nuestras manos para que seas feliz en el trabajo.</p>
				</div>
			</div>
		</div>


		<!-- Precios -->
		<div class="row">
			<div class="col text-center py-5">
				<!--<h1 class="text-primary txtH40">PRECIOS</h1>-->
				<a class="text-primary txtH40" id="precios">PRECIOS</a>
				<p class="text-primary txtN18">Nuestras ofertas</p>
			</div>
		</div>

	</div>
	
	<div class="container-fluid">

	<!-- Cuadros de precios -->
	<div class="row">
		<div class="col-12 col-md-4">
			<div class="card border-light h-100">
				<div class="card-body text-center bg-light px-5 pb-5 text-primary">
					<i class="fa fa-laptop fa-2x text-primary mt-5"></i>
					<h3 class="card-title mt-5 mb-4 txtH30">FREELANCE</h3>
					<h5 class="card-title mb-5 txtN18"><b>249 €/mes</b></h5>
					<p class="card-text txtN15 mb-3">
						Espacio de trabajo fijo
						<br>
						Acceso 9:00h a 18:30h
						<br>
						Servicios comunes de WIFI, cafetera y alarma
						<br>
						Dirección comercial/fiscal
						<br>
						Sala de Reuniones y Videoconferencias (5h semanales incluidas)
						<br>
						Mobiliario estándar con seguridad
						<br>
						Suministros (agua, luz, aire acondicionado y calefacción)
						<br>
						Servicio de limpieza
					</p>
				</div>
			</div>
		</div>

		<div class="col-12 col-md-4 my-3 my-md-0">
			<div class="card border-light h-100">
				<div class="card-body text-center bg-light px-5 pb-5 text-primary">
					<i class="fa fa-handshake fa-2x text-primary mt-5"></i>
					<h3 class="card-title mt-5 mb-4 txtH30">COMPANY</h3>
					<h5 class="card-title mb-5 txtN18">Desde <b>449 €/mes</b></h5>
					<p class="card-text txtN15 mb-3">
						Oficina 2-3 plazas
						<br>
						Acceso libre
						<br>
						Servicios comunes de WIFI, cafetera y alarma
						<br>
						Dirección comercial/fiscal
						<br>
						Sala de Reuniones y Videoconferencias (10h semanales incluidas)
						<br>
						Mobiliario estándar con seguridad
						<br>
						Suministros (agua, luz, aire acondicionado y calefacción)
						<br>
						Servicio de limpieza
					</p>
				</div>
			</div>
		</div>

		<div class="col-12 col-md-4">
			<div class="card border-light h-100">
				<div class="card-body text-center bg-light px-5 pb-5 text-primary">
					<i class="fa fa-black-tie fa-2x text-primary mt-5"></i>
					<h3 class="card-title mt-5 mb-4 txtH30">EXECUTIVE</h3>
					<h5 class="card-title mb-5 txtN18"><b>699 €/mes</b></h5>
					<p class="card-text txtN15 mb-3">
						Despacho exclusivo
						<br>
						Mesa de trabajo y de reuniones
						<br>
						Acceso libre
						<br>
						Servicios comunes de WIFI, cafetera y alarma
						<br>
						Dirección comercial/fiscal
						<br>
						Sala de Reuniones y Videoconferencias (15h semanales incluidas)
						<br>
						Mobiliario estándar con seguridad
						<br>
						Suministros (agua, luz, aire acondicionado y calefacción)
						<br>
						Servicio de limpieza
					</p>
				</div>
			</div>
		</div>
	</div>

	</div>
	
	<div class="container">


	<!-- Contacto -->
	<div class="row">
		<div class="col text-center py-5 my-3">
			<!--<h1 class="text-primary display-5">CONTACTO</h1>-->
			<a class="text-primary txtH40" id="contacto">CONTACTO</a>
		</div>
	</div>

	<!-- Formulario -->
	
	
	<div class="row">
		<div class="col-12 col-md-5 offset-md-1 mb-5">
			<!--<img src="/static/img/plano-situacion-Tampico34-Madrid.png" alt="" width=100%>-->
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.3892306138212!2d-3.634836863075209!3d40.44389701225421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f16ddef893b%3A0x9ee8f32be262bbe1!2sENZO!5e0!3m2!1ses!2ses!4v1591180291690!5m2!1ses!2ses" 
				width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" 
					tabindex="0"></iframe>
		</div>
		<div class="col-12 col-md-5">
			<form id="formulario_contacto" action="controllers/send.php" role="form" method="POST">
				<div class="form-group">
					<label for="nombre" class="text-primary txtN15">Nombre</label>
					<input id="nombre" type="text" class="form-control" name="FirstName" placeholder="Dinos cómo te llamas" required>
				</div>

				<div class="form-group">
					<label for="correo" class="text-primary txtN15">Email</label>
					<input id="correo" type="email" class="form-control" name="Email" placeholder="tucuenta@email.es" required>
				</div>
	
				<div class="form-group">
					<label for="telefono" class="text-primary txtN15">Teléfono</label>
					<input id="telefono" type="tel" class="form-control" name="Phone" placeholder="Déjanos un teléfono para hablar contigo" required>
				</div>
				<div class="form-group">
					<label for="mensaje" class="text-primary txtN15">Mensaje</label>
					<textarea for="mensaje" class="form-control" name="Information" rows="3" maxlength="250" placeholder="Escribe tu mensaje aquí ..."></textarea>
				</div>
				<button type="submit" class="btn btn-primary btn-lg btn-block mt-5 txtN18">Enviar</button>
			</form>
		</div>
	</div>
	<!-- Email -->
	<div class="row">
		<div class="col-11 offset-md-1 pt-4 pb-5">
			<p class="text-primary txtN15">info@tampico34.com</p>
		</div>
	</div>

</div><!-- Fin container -->


<?php include $path . "/views/partials/footer.php" ?>


<!-- scripts -->
<?php include $path . "/views/partials/cookies.php" ?>

<!-- Bootstrap4 -->
<script src="/static/js/jquery.js"></script>
<script src="/static/js/popper.js"></script>
<script src="/static/js/bootstrap.js"></script>


<script>
	$('.carousel').carousel({
	  interval: 3500
	})
</script>


<script src="/vendor/lightbox2/lightbox.js"></script>

<script>
    lightbox.option({
      'alwaysShowNavOnTouchDevices': true,
      'albumLabel':	"Imagen %1 de %2",
      'fadeDuration':	400,
      'resizeDuration': 600,
      'wrapAround': true
    })
</script>

<!-- Smooth scroll -->
<script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
});
</script>
</body>
</html>