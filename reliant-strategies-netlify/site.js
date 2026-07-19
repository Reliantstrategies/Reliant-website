document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "Not specified");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New Reliant Strategies inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nProject details:\n${message}`);
    const note = document.querySelector("#form-note");
    if (note) note.hidden = false;
    window.location.href = `mailto:reliantstrategies@yahoo.com?subject=${subject}&body=${body}`;
  });
}
