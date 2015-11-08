angular.module('ionic-audio').directive('ionAudioTrack', ionAudioTrack);

function ionAudioTrack(MediaManager) {
    return {
        transclude: true,
        template: '<ng-transclude></ng-transclude>',
        restrict: 'E',
        scope: {
            track: '='
        },
        controller: 'ionAudioTrackCtrl',
        link: link
    }

    function link(scope, element, attrs, controller) {
        controller.hasOwnProgressBar = element.find('ion-audio-progress-bar').length > 0;

        scope.$on('$destroy', function() {
            MediaManager.destroy();
        });
    }
}

ionAudioTrack.$inject = ['MediaManager'];
