const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const footer= document.getElementById('footer');

const date = new Date;
const year = date.getFullYear()
footer.innerHTML = `&copy; ${year} Nasser Ben`

// Prompt to select media stream
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream; 
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(err) {
        console.log(err)
    }
}
button.addEventListener('click',async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

});
//On Load
selectMediaStream();
