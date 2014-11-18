angular.module( 'ngBoilerplate.hangman', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'hangman', {
    url: '/hangman',
    views: {
      "main": {
        controller: 'HangmanCtrl',
        controllerAs: "ctrl",
        templateUrl: 'hangman/hangman.tpl.html'
      }
    },
    data:{ pageTitle: 'Trouves-moi' }
  });
})

.controller( 'HangmanCtrl', function HangmanCtrl( $scope ) {
    var ctrl = this;
    var i;
    ctrl.alphabet = [];
    for(i = 97; i <= 122; i++) {
        ctrl.alphabet.push(String.fromCharCode(i));
    }

    //generate this with angular.each("text", function(letter) { hidden.push(letter.charCodeAt(0)); });
    var hidden = [115, 111, 108, 97, 108];
    ctrl.userFound = [];
    for (i = 0; i < hidden.length; i++) {
        ctrl.userFound.push("");
    }

    ctrl.testLetter = function(letter) {
        var userFoundIndex = ctrl.userFound.indexOf(letter);
        var fromIndex = userFoundIndex !== -1 ? userFoundIndex + 1 : 0;
        var hiddenIndex = hidden.indexOf(letter.charCodeAt(0), fromIndex);
        if (hiddenIndex !== -1) {
            ctrl.userFound[hiddenIndex] = letter;
            // console.log('yay');
        } else {
             // console.log('nope');
        }
    };

    ctrl.birthdate = "21 novembre 2014";
    ctrl.subtext = "3,055Kg - 49cm";
    ctrl.pictureProportion = 1024/793;
})

.directive('fpSmartSize', function fpSmartSize($window) {
    return {
        restrict: "A",
        scope: {
            pictureProportion: "=fpSmartSize"
        },
        link: function(scope, elem, attrs, ctrl) {
            scope.window = $window;

            scope.$watch('window.innerWidth', function(newWidth) {
                var width = newWidth;
                var height = newWidth / scope.pictureProportion;
                var footerAndKeyboard = 128 + 100;
                if ( height + footerAndKeyboard > $window.innerHeight) {
                    height = $window.innerHeight - 130;
                    width = height * scope.pictureProportion;
                }
                attrs.$set("style", "width: " + width + "px; height: " + height + "px;");
            });
        }
    };
})
;
