const d = document;
const w = window;
const n = navigator;

export default function detectWebCam(id){
    const $video = d.getElementById(id);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false}).then((stream) => {
            $video.srcObject = stream;
            $video.play();
        }).catch((err) => {
            $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`);
            console.error(err);
        })
    }
}