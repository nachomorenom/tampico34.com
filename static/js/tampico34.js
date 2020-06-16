'use strict';
/**
 * @ngdoc directive
 * @name directive:validnif
 * @description
 * # validnif
 */
var app = angular.module('enzo',['ngSanitize']);
app.controller('ctrlEnzo', function($scope, $compile, $http,transformRequestAsFormPost) {
    $scope.menu = false;
    $scope.menu_fn = function() {
        if ($scope.menu) {
            $scope.menu = false;
        } else {
            $scope.menu = true;
        }
    };

    // Contact Form
    $scope.contactForm = {};
    
    $scope.change = function (value) {
        $(value).addClass('classValid');
    }

    $scope.contact = function () {

        $scope.valid_FirstName = true;
        $scope.valid_Email = true;
        $scope.valid_EmailFormat = true;
        $scope.valid_Phone = true;
        $scope.valid_PhoneFormat = truee;

        if(!$scope.contactForm.FirstName.$valid){
            $scope.valid_FirstName = true;
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

        if($scope.contactForm.$valid){

            var sendForm = {};

            sendForm.FirstName = $scope.contactForm.firstName;
            sendForm.Email = $scope.contactForm.email;
            sendForm.Phone = $scope.contactForm.phone;
            sendForm.Information = $scope.contactForm.information;

            var data = $.param({
                FirstName: $scope.contactForm.firstName,
                Email: $scope.contactForm.email,
                Phone: $scope.contactForm.phone,
                Information: $scope.contactForm.information
            });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/send', data, config)
            .success(function (data, status, headers, config) {
                console.log($scope.PostDataResponse = data);
                if(data=='Ok'){
                    window.location.href = "/contacto-ok";
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

