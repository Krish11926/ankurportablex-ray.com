document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");
    
    window.openModal = function (img) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    };

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
function bookViaWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (!name || !phone || !service || !date) {
        alert("Please fill in all the fields.");
        return;
    }

    const message = `Appointment Booking Request:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Service: ${service}%0A
Preferred Date: ${date}%0A
%0AThank you! Please confirm the appointment.`;

    const whatsappNumber = "917249291373";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
}
