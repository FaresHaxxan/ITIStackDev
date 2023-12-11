document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const sadFaceImage = document.getElementById('sadFace');
    const happyFaceImage = document.getElementById('happyFace');
  
    ctx.drawImage(sadFaceImage, 0, 0, canvas.width, canvas.height);
  
    canvas.addEventListener('mousedown', function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(happyFaceImage, 0, 0, canvas.width, canvas.height);
      canvas.addEventListener('mouseup', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sadFaceImage, 0, 0, canvas.width, canvas.height);
      });
    });
});