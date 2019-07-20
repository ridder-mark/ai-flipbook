var constraints = {
    video: {
        facingMode: "environment"
    },
    audio: false
}

const cameraView = document.querySelector('#camera--view'),
    cameraOutput = document.querySelector('#camera--output'),
    cameraSensor = document.querySelector('#camera--sensor'),
    cameraTrigger = document.querySelector('#camera--trigger');

function cameraStart() {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error('Oop. something went wrong!', error);
    });
}

cameraTrigger.onClick = function() {
    cameraSensor.width = cameraview.videoWidth;
    cameraSensor.height = cameraView.videoWidth;
    cameraSensor.getContext('2d').drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL('image/webp');
    cameraOutput.classList.add('taken');
}

window.addEventListener('load', cameraStart, false);
