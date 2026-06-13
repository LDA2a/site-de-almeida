/* =========================================================
   SARL DE ALMEIDA — Interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
    };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    // Fermer au clic sur un lien ou Échap
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) closeNav();
    });
  }

  /* ---------- Header au scroll ---------- */
  const header = document.getElementById("header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Apparition au scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Année courante (footer) ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Carte : chargement au clic (perf + vie privée) ---------- */
  const mapEmbed = document.getElementById("mapEmbed");
  const mapLoad = document.getElementById("mapLoad");
  if (mapEmbed && mapLoad) {
    mapLoad.addEventListener("click", () => {
      const src = mapEmbed.getAttribute("data-map-src");
      const frame = document.createElement("iframe");
      frame.title = "Carte — Lecci / Porto-Vecchio, Corse-du-Sud";
      frame.src = src;
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      frame.setAttribute("allowfullscreen", "");
      mapEmbed.innerHTML = "";
      mapEmbed.appendChild(frame);
    });
  }

  /* ---------- Formulaire de contact ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const nom = encodeURIComponent(data.get("nom") || "");
      const tel = encodeURIComponent(data.get("telephone") || "");
      const email = encodeURIComponent(data.get("email") || "");
      const sujet = encodeURIComponent(data.get("sujet") || "Demande d'information");
      const msg = encodeURIComponent(data.get("message") || "");
      const corps =
        `Nom : ${decodeURIComponent(nom)}%0D%0A` +
        `Téléphone : ${decodeURIComponent(tel)}%0D%0A` +
        `E-mail : ${decodeURIComponent(email)}%0D%0A%0D%0A` +
        `${decodeURIComponent(msg)}`;

      // Confirmation visuelle
      const success = document.getElementById("formSuccess");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Ouvre le client mail pré-rempli (solution sans backend)
      window.location.href =
        `mailto:contact@sarl-dealmeida.fr?subject=${sujet}&body=${corps}`;
      form.reset();
    });
  }
})();
