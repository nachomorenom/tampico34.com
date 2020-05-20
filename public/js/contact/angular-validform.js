'use strict';
/**
 * @ngdoc directive
 * @name directive:validnif
 * @description
 * # validnif
 */

var app = angular.module('app',['ngSanitize']);
app.controller('ContactFormCtrl', function ($scope,$http,transformRequestAsFormPost) {
    //default state
    $scope.contactForm = {};

    $scope.change = function (value) {
        $(value).addClass('classValid');
    }

    $scope.contact = function () {

        $scope.valid_FirstName = false;
        $scope.valid_LastName = false;
        $scope.valid_Email = false;
        $scope.valid_Title = false;
        $scope.valid_EmailFormat = false;
        $scope.valid_Phone = false;
        $scope.valid_PhoneFormat = false;

        if(!$scope.contactForm.FirstName.$valid){
            $scope.valid_FirstName = true;
        }

        if(!$scope.contactForm.LastName.$valid){
            $scope.valid_LastName = true;
        }

        if(!$scope.contactForm.Title.$valid){
            $scope.valid_Title = true;
        }

        if(!$scope.contactForm.Email.$valid){
            if($scope.contactForm.Email.$error.email){
                $scope.valid_EmailFormat = true;
            }
            if($scope.contactForm.Email.$error.required){
                $scope.valid_Email = true;
            }
        }

        if(!$scope.contactForm.Phone.$valid){
            console.log($scope.contactForm.Phone.$error);
            if($scope.contactForm.Phone.$error.required){
                $scope.valid_Phone = true;
            }
            else{
                $scope.valid_PhoneFormat = true;
            }
        }


        $scope.valid_Company = false;
        $scope.valid_Industry = false;
        $scope.valid_Employees = false;
        $scope.valid_Country = false;

        if(!$scope.contactForm.Company.$valid){
            $scope.valid_Company = true;
        }
        if(!$scope.contactForm.Industry.$valid){
            $scope.valid_Industry = true;
        }
        if(!$scope.contactForm.Employees.$valid){
            $scope.valid_Employees = true;
        }
        if(!$scope.contactForm.Country.$valid){
            $scope.valid_Country = true;
        }


        if($scope.contactForm.$valid){

            var sendForm = {};

            sendForm.FirstName = $scope.contactForm.firstName;
            sendForm.LastName   = $scope.contactForm.lastName;
            sendForm.Title = $scope.contactForm.titles;
            sendForm.Email = $scope.contactForm.email;
            sendForm.Phone = $scope.contactForm.phone;
            sendForm.Company = $scope.contactForm.company;
            sendForm.Industry = $scope.contactForm.industry;
            sendForm.Employees = $scope.contactForm.employees;
            sendForm.Country = $scope.contactForm.country;
            sendForm.Information = $scope.contactForm.information;

            var data = $.param({
                FirstName: $scope.contactForm.firstName,
                LastName: $scope.contactForm.lastName,
                Title: $scope.contactForm.titles,
                Email: $scope.contactForm.email,
                Phone: $scope.contactForm.phone,
                Company: $scope.contactForm.company,
                Industry: $scope.contactForm.industry,
                Employees: $scope.contactForm.employees,
                Country: $scope.contactForm.country,
                Information: $scope.contactForm.information
            });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/libs/send.php', data, config)
            .success(function (data, status, headers, config) {
                console.log($scope.PostDataResponse = data);
                if(data=='Ok'){
                    window.location.href = "/views/contacto-ok.php";
                }
                else{
                    alert('Ha ocurrido un error al enviar el formulario.')
                }
            })
            .error(function (data, status, header, config) {
                alert('Ha ocurrido un error al enviar el formulario.')
            });

        }

    }

    $scope.employeeAmounts = [ '1', '2-9', '10-19', '20-49', '50-99', '100-199', '200-349', '350-999', '1000-2999', '3000+' ];
    $scope.industries = ['Servicios para empresas', 'Educación: centro educativo/universidad', 'Educación: otro',  'Energía, productos químicos y servicios públicos', 'Agricultura, silvicultura y pesca','Servicios financieros', 'Administración pública', 'Salud y asistencia social', 'Grupos empresariales', 'Fabricación', 'Medios de comunicación y espectáculos', 'Minería y construcción', 'Organizaciones sin ánimo de lucro', 'Comercio al por menor y al por mayor', 'Tecnología', 'Viajes y transporte'];
    $scope.countries = [{'countryName': 'Afganistán', 'cc': 'AF'},{'countryName': 'Albania', 'cc': 'AL'},{'countryName': 'Alemania', 'cc': 'DE'},{'countryName': 'Andorra', 'cc': 'AD'},{'countryName': 'Anguila', 'cc': 'AI'},{'countryName': 'Antártida', 'cc': 'AQ'},{'countryName': 'Antigua y Barbuda', 'cc': 'AG'},{'countryName': 'Antillas Neerlandesas', 'cc': 'AN'},{'countryName': 'Arabia Saudí', 'cc': 'SA'},{'countryName': 'Argentina', 'cc': 'AR'},{'countryName': 'Armenia', 'cc': 'AM'},{'countryName': 'Aruba', 'cc': 'AW'},{'countryName': 'Australia', 'cc': 'AU'},{'countryName': 'Austria', 'cc': 'AT'},{'countryName': 'Azerbaiyán', 'cc': 'AZ'},{'countryName': 'Bahamas', 'cc': 'BS'},{'countryName': 'Bahréin', 'cc': 'BH'},{'countryName': 'Bangladesh', 'cc': 'BD'},{'countryName': 'Barbados', 'cc': 'BB'},{'countryName': 'Bélgica', 'cc': 'BE'},{'countryName': 'Belice', 'cc': 'BZ'},{'countryName': 'Benín', 'cc': 'BJ'},{'countryName': 'Bermudas', 'cc': 'BM'},{'countryName': 'Bielorrusia', 'cc': 'BY'},{'countryName': 'Bolivia', 'cc': 'BO'},{'countryName': 'Bosnia-Herzegovina', 'cc': 'BA'},{'countryName': 'Botsuana', 'cc': 'BW'},{'countryName': 'Brasil', 'cc': 'BR'},{'countryName': 'Brunéi', 'cc': 'BN'},{'countryName': 'Bulgaria', 'cc': 'BG'},{'countryName': 'Burkina Faso', 'cc': 'BF'},{'countryName': 'Burundi', 'cc': 'BI'},{'countryName': 'Bután', 'cc': 'BT'},{'countryName': 'Cabo Verde', 'cc': 'CV'},{'countryName': 'Camboya', 'cc': 'KH'},{'countryName': 'Camerún', 'cc': 'CM'},{'countryName': 'Canadá', 'cc': 'CA'},{'countryName': 'Chad', 'cc': 'TD'},{'countryName': 'Chile', 'cc': 'CL'},{'countryName': 'China', 'cc': 'CN'},{'countryName': 'Chipre', 'cc': 'CY'},{'countryName': 'Ciudad del Vaticano', 'cc': 'VA'},{'countryName': 'Colombia', 'cc': 'CO'},{'countryName': 'Comoras', 'cc': 'KM'},{'countryName': 'Congo - Brazzaville', 'cc': 'CG'},{'countryName': 'Corea del Sur', 'cc': 'KR'},{'countryName': 'Costa de Marfil', 'cc': 'CI'},{'countryName': 'Costa Rica', 'cc': 'CR'},{'countryName': 'Croacia', 'cc': 'HR'},{'countryName': 'Dinamarca', 'cc': 'DK'},{'countryName': 'Dominica', 'cc': 'DM'},{'countryName': 'Ecuador', 'cc': 'EC'},{'countryName': 'Egipto', 'cc': 'EG'},{'countryName': 'El Salvador', 'cc': 'SV'},{'countryName': 'Emiratos \u00c1rabes Unidos', 'cc': 'AE'},{'countryName': 'Eritrea', 'cc': 'ER'},{'countryName': 'Eslovaquia', 'cc': 'SK'},{'countryName': 'Eslovenia', 'cc': 'SI'},{'countryName': 'Espa\u00f1a', 'cc': 'ES'},{'countryName': 'Estados Unidos', 'cc': 'US'},{'countryName': 'Estonia', 'cc': 'EE'},{'countryName': 'Etiopía', 'cc': 'ET'},{'countryName': 'Filipinas', 'cc': 'PH'},{'countryName': 'Finlandia', 'cc': 'FI'},{'countryName': 'Fiyi', 'cc': 'FJ'},{'countryName': 'Francia', 'cc': 'FR'},{'countryName': 'Gabón', 'cc': 'GA'},{'countryName': 'Gambia', 'cc': 'GM'},{'countryName': 'Georgia', 'cc': 'GE'},{'countryName': 'Ghana', 'cc': 'GH'},{'countryName': 'Gibraltar', 'cc': 'GI'},{'countryName': 'Granada', 'cc': 'GD'},{'countryName': 'Grecia', 'cc': 'GR'},{'countryName': 'Groenlandia', 'cc': 'GL'},{'countryName': 'Guadalupe', 'cc': 'GP'},{'countryName': 'Guam', 'cc': 'GU'},{'countryName': 'Guatemala', 'cc': 'GT'},{'countryName': 'Guayana Francesa', 'cc': 'GF'},{'countryName': 'Guinea', 'cc': 'GN'},{'countryName': 'Guinea Ecuatorial', 'cc': 'GQ'},{'countryName': 'Guinea-Bissau', 'cc': 'GW'},{'countryName': 'Guyana', 'cc': 'GY'},{'countryName': 'Haití', 'cc': 'HT'},{'countryName': 'Honduras', 'cc': 'HN'},{'countryName': 'Hong Kong', 'cc': 'HK'},{'countryName': 'Hungría', 'cc': 'HU'},{'countryName': 'India', 'cc': 'IN'},{'countryName': 'Indonesia', 'cc': 'ID'},{'countryName': 'Iraq', 'cc': 'IQ'},{'countryName': 'Irlanda', 'cc': 'IE'},{'countryName': 'Isla Bouvet', 'cc': 'BV'},{'countryName': 'Isla Christmas', 'cc': 'CX'},{'countryName': 'Isla Niue', 'cc': 'NU'},{'countryName': 'Isla Norfolk', 'cc': 'NF'},{'countryName': 'Islandia', 'cc': 'IS'},{'countryName': 'Islas Caimán', 'cc': 'KY'},{'countryName': 'Islas Cocos', 'cc': 'CC'},{'countryName': 'Islas Cook', 'cc': 'CK'},{'countryName': 'Islas Feroe', 'cc': 'FO'},{'countryName': 'Islas Georgia del Sur y Sandwich del Sur', 'cc': 'GS'},{'countryName': 'Islas Heard y McDonald', 'cc': 'HM'},{'countryName': 'Islas Malvinas', 'cc': 'FK'},{'countryName': 'Islas Marianas del Norte', 'cc': 'MP'},{'countryName': 'Islas Marshall', 'cc': 'MH'},{'countryName': 'Islas menores alejadas de los Estados Unidos', 'cc': 'UM'},{'countryName': 'Islas Pitcairn', 'cc': 'PN'},{'countryName': 'Islas Salomón', 'cc': 'SB'},{'countryName': 'Islas Turcas y Caicos', 'cc': 'TC'},{'countryName': 'Islas Vírgenes Británicas', 'cc': 'VG'},{'countryName': 'Islas Vírgenes de los Estados Unidos', 'cc': 'VI'},{'countryName': 'Israel', 'cc': 'IL'},{'countryName': 'Italia', 'cc': 'IT'},{'countryName': 'Jamaica', 'cc': 'JM'},{'countryName': 'Japón', 'cc': 'JP'},{'countryName': 'Jordania', 'cc': 'JO'},{'countryName': 'Kazajistán', 'cc': 'KZ'},{'countryName': 'Kenia', 'cc': 'KE'},{'countryName': 'Kirguistán', 'cc': 'KG'},{'countryName': 'Kiribati', 'cc': 'KI'},{'countryName': 'Kuwait', 'cc': 'KW'},{'countryName': 'Laos', 'cc': 'LA'},{'countryName': 'Lesoto', 'cc': 'LS'},{'countryName': 'Letonia', 'cc': 'LV'},{'countryName': 'Líbano', 'cc': 'LB'},{'countryName': 'Liberia', 'cc': 'LR'},{'countryName': 'Libia', 'cc': 'LY'},{'countryName': 'Liechtenstein', 'cc': 'LI'},{'countryName': 'Lituania', 'cc': 'LT'},{'countryName': 'Luxemburgo', 'cc': 'LU'},{'countryName': 'Macao', 'cc': 'MO'},{'countryName': 'Macedonia', 'cc': 'MK'},{'countryName': 'Madagascar', 'cc': 'MG'},{'countryName': 'Malasia', 'cc': 'MY'},{'countryName': 'Malaui', 'cc': 'MW'},{'countryName': 'Maldivas', 'cc': 'MV'},{'countryName': 'Mali', 'cc': 'ML'},{'countryName': 'Malta', 'cc': 'MT'},{'countryName': 'Marruecos', 'cc': 'MA'},{'countryName': 'Martinica', 'cc': 'MQ'},{'countryName': 'Mauricio', 'cc': 'MU'},{'countryName': 'Mauritania', 'cc': 'MR'},{'countryName': 'Mayotte', 'cc': 'YT'},{'countryName': 'México', 'cc': 'MX'},{'countryName': 'Micronesia', 'cc': 'FM'},{'countryName': 'Moldavia', 'cc': 'MD'},{'countryName': 'Mónaco', 'cc': 'MC'},{'countryName': 'Mongolia', 'cc': 'MN'},{'countryName': 'Montserrat', 'cc': 'MS'},{'countryName': 'Mozambique', 'cc': 'MZ'},{'countryName': 'Namibia', 'cc': 'NA'},{'countryName': 'Nauru', 'cc': 'NR'},{'countryName': 'Nepal', 'cc': 'NP'},{'countryName': 'Nicaragua', 'cc': 'NI'},{'countryName': 'Níger', 'cc': 'NE'},{'countryName': 'Nigeria', 'cc': 'NG'},{'countryName': 'Noruega', 'cc': 'NO'},{'countryName': 'Nueva Caledonia', 'cc': 'NC'},{'countryName': 'Nueva Zelanda', 'cc': 'NZ'},{'countryName': 'Omán', 'cc': 'OM'},{'countryName': 'Países Bajos', 'cc': 'NL'},{'countryName': 'Pakistán', 'cc': 'PK'},{'countryName': 'Palau', 'cc': 'PW'},{'countryName': 'Palestina', 'cc': 'PS'},{'countryName': 'Panamá', 'cc': 'PA'},{'countryName': 'Papúa Nueva Guinea', 'cc': 'PG'},{'countryName': 'Paraguay', 'cc': 'PY'},{'countryName': 'Perú', 'cc': 'PE'},{'countryName': 'Polinesia Francesa', 'cc': 'PF'},{'countryName': 'Polonia', 'cc': 'PL'},{'countryName': 'Portugal', 'cc': 'PT'},{'countryName': 'Puerto Rico', 'cc': 'PR'},{'countryName': 'Qatar', 'cc': 'QA'},{'countryName': 'Reino Unido', 'cc': 'GB'},{'countryName': 'República Centroafricana', 'cc': 'CF'},{'countryName': 'República Checa', 'cc': 'CZ'},{'countryName': 'República Democrática del Congo', 'cc': 'CD'},{'countryName': 'República Dominicana', 'cc': 'DO'},{'countryName': 'Reunión', 'cc': 'RE'},{'countryName': 'Ruanda', 'cc': 'RW'},{'countryName': 'Rumanía', 'cc': 'RO'},{'countryName': 'Rusia', 'cc': 'RU'},{'countryName': 'Sáhara Occidental', 'cc': 'EH'},{'countryName': 'Samoa', 'cc': 'WS'},{'countryName': 'Samoa Americana', 'cc': 'AS'},{'countryName': 'San Cristóbal y Nieves', 'cc': 'KN'},{'countryName': 'San Marino', 'cc': 'SM'},{'countryName': 'San Pedro y Miquelón', 'cc': 'PM'},{'countryName': 'San Vicente y las Granadinas', 'cc': 'VC'},{'countryName': 'Santa Elena', 'cc': 'SH'},{'countryName': 'Santa Lucía', 'cc': 'LC'},{'countryName': 'Santo Tomé y Príncipe', 'cc': 'ST'},{'countryName': 'Senegal', 'cc': 'SN'},{'countryName': 'Seychelles', 'cc': 'SC'},{'countryName': 'Sierra Leona', 'cc': 'SL'},{'countryName': 'Singapur', 'cc': 'SG'},{'countryName': 'Somalia', 'cc': 'SO'},{'countryName': 'Sri Lanka', 'cc': 'LK'},{'countryName': 'Suazilandia', 'cc': 'SZ'},{'countryName': 'Sudáfrica', 'cc': 'ZA'},{'countryName': 'Suecia', 'cc': 'SE'},{'countryName': 'Suiza', 'cc': 'CH'},{'countryName': 'Surinam', 'cc': 'SR'},{'countryName': 'Svalbard y Jan Mayen', 'cc': 'SJ'},{'countryName': 'Tailandia', 'cc': 'TH'},{'countryName': 'Taiwán', 'cc': 'TW'},{'countryName': 'Tanzania', 'cc': 'TZ'},{'countryName': 'Tayikistán', 'cc': 'TJ'},{'countryName': 'Territorio Británico del Océano índico', 'cc': 'IO'},{'countryName': 'Territorios Australes Franceses', 'cc': 'TF'},{'countryName': 'Timor Oriental', 'cc': 'TL'},{'countryName': 'Togo', 'cc': 'TG'},{'countryName': 'Tokelau', 'cc': 'TK'},{'countryName': 'Tonga', 'cc': 'TO'},{'countryName': 'Trinidad y Tobago', 'cc': 'TT'},{'countryName': 'Túnez', 'cc': 'TN'},{'countryName': 'Turkmenistán', 'cc': 'TM'},{'countryName': 'Turquía', 'cc': 'TR'},{'countryName': 'Tuvalu', 'cc': 'TV'},{'countryName': 'Ucrania', 'cc': 'UA'},{'countryName': 'Uganda', 'cc': 'UG'},{'countryName': 'Uruguay', 'cc': 'UY'},{'countryName': 'Uzbekistán', 'cc': 'UZ'},{'countryName': 'Vanuatu', 'cc': 'VU'},{'countryName': 'Venezuela', 'cc': 'VE'},{'countryName': 'Vietnam', 'cc': 'VN'},{'countryName': 'Wallis y Futuna', 'cc': 'WF'},{'countryName': 'Yemen', 'cc': 'YE'},{'countryName': 'Yibuti', 'cc': 'DJ'},{'countryName': 'Zambia', 'cc': 'ZM'},{'countryName': 'Zimbabue', 'cc': 'ZW'}];

});

        // I provide a request-transformation method that is used to prepare the outgoing
        // request as a FORM post instead of a JSON packet.
        app.factory(
            "transformRequestAsFormPost",
            function() {
                // I prepare the request data for the form post.
                function transformRequest( data, getHeaders ) {
                    var headers = getHeaders();
                    headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";
                    return( serializeData( data ) );
                }
                // Return the factory value.
                return( transformRequest );
                // ---
                // PRVIATE METHODS.
                // ---
                // I serialize the given Object into a key-value pair string. This
                // method expects an object and will default to the toString() method.
                // --
                // NOTE: This is an atered version of the jQuery.param() method which
                // will serialize a data collection for Form posting.
                // --
                // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
                function serializeData( data ) {
                    // If this is not an object, defer to native stringification.
                    if ( ! angular.isObject( data ) ) {
                        return( ( data == null ) ? "" : data.toString() );
                    }
                    var buffer = [];
                    // Serialize each key in the object.
                    for ( var name in data ) {
                        if ( ! data.hasOwnProperty( name ) ) {
                            continue;
                        }
                        var value = data[ name ];
                        buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                        );
                    }
                    // Serialize the buffer and clean it up for transportation.
                    var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;
                    return( source );
                }
            }
        );



app.directive('restrictInput', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        var options = scope.$eval(attr.restrictInput);
        if (!options.regex && options.type) {
          switch (options.type) {
            case 'digitsOnly': options.regex = '^[0-9]*$'; break;
            case 'lettersOnly': options.regex = '^[a-zA-Z]*$'; break;
            case 'lowercaseLettersOnly': options.regex = '^[a-z]*$'; break;
            case 'uppercaseLettersOnly': options.regex = '^[A-Z]*$'; break;
            case 'lettersAndDigitsOnly': options.regex = '^[a-zA-Z0-9]*$'; break;
            default: options.regex = '';
          }
        }
        var reg = new RegExp(options.regex);
        if (reg.test(viewValue)) { //if valid view value, return it
          return viewValue;
        } else { //if not valid view value, use the model value (or empty string if that's also invalid)
          var overrideValue = (reg.test(ctrl.$modelValue) ? ctrl.$modelValue : '');
          element.val(overrideValue);
          return overrideValue;
        }
      });
    }
  };
});
