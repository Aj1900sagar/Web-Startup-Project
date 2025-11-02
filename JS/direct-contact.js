// ✅ DIRECT CALL BUTTON
const callButtons = document.querySelectorAll(".call-btn");
callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const phone = btn.dataset.number;
        window.location.href = `tel:${phone}`;
    });
});

// ✅ DIRECT WHATSAPP BUTTON
const whatsappButtons = document.querySelectorAll(".whatsapp-btn");
whatsappButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const phone = btn.dataset.number;
        window.location.href = `https://wa.me/91${phone}`;
    });
});
