// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {desktopCapturer} = require('electron')

desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
    console.log("ddddd", sources);
    if (error) throw error
    for (let i = 0; i < sources.length; ++i) {
    if (sources[i].name === 'Entire screen') {
        console.log("ddddd44", sources);
        navigator.webkitGetUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: sources[i].id,
                    minWidth: 1280,
                    maxWidth: 1280,
                    minHeight: 720,
                    maxHeight: 720
                }
            }
        }, handleStream, handleError)
        return
    }
}
})

function handleStream (stream) {
    console.log("ddd1dd");
    document.querySelector('video').src = URL.createObjectURL(stream)
}

function handleError (e) {
    console.log("ddddd2");
    console.log(e)
}
