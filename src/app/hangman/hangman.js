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

    var hidden = [];

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
            console.log('yay');
        } else {
            console.log('nope');
        }
    };
})
;
