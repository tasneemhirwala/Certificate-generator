const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const mobileInput = document.getElementById('mobile');
const downloadBtn = document.getElementById('download-btn')
const image = new Image()
image.src = "certificate.jpg"
image.onload = function () {
    drawImage()
}
function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = '30px monotype corsiva'
    ctx.fillStyle = '#29e'
    ctx.fillText(nameInput.value, 150, 180)
    ctx.fillText(mobileInput.value, 40, 220)
}
nameInput.addEventListener('input', function () {

    drawImage()
})
downloadBtn.addEventListener('click', function () {
    downloadBtn.href = canvas.toDataURL('image/jpg')
    downloadBtn.download = 'Certificate - ' + nameInput.value
})