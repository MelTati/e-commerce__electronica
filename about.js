document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    if (!modal) return;

    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("modal__close")[0];

    document.querySelectorAll('.founder__img.clickable').forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }

    if(span) span.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});