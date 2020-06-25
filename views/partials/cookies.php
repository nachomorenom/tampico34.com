<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/path/to/cdn/bootstrap.min.css" />
    <link rel="stylesheet" href="cookiealert.css" />
    
    <script>
        $(document).ready(function() {
            $("#hide").click(function() {
                $("div").hide();
            });
        });

        function setCookie(cname, cvalue, exdays) {
            
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    </script>
</head>
<body>

    <div id="hide" name="cookie" class="alert alert-dismissible text-center cookiealert" style="position:fixed; bottom:-17px; width:100%; background:#040c4c;" role="alert">
        <div class="cookiealert-container">
            <b style="color:white;">¿Te gustan las cookies? &#x1F36A; Usamos cookies para asegurarnos de que tienes la mejor experiencia en nuestra web. </b><a href="http://cookiesandyou.com/" style="color:white;" target="_blank" >LEER MÁS</a>
            <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close">
                Estoy de acuerdo &#10004;
            </button>
        </div>
    </div>

<!-- From Local -->
<script src="cookiealert.js"></script>
<!-- From CDN -->
<script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>

<script>
    window.addEventListener("cookieAlertAccept", function() {
        
        $("#hide").click(function() {
                $("#hide").hide();
                function setCookie(cname, cvalue, exdays) {
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires="+d.toUTCString();
                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                }
        });
    })
</script>

</body>
</html>