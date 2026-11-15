/* Petale albe și roz care cad încet peste pagină. Oprite când telefonul cere animații reduse. */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = document.createElement("div");
  box.className = "petals";
  box.setAttribute("aria-hidden", "true");
  const colors = ["#ffffff", "#fbd3e0", "#f4a9c0", "#ffffff", "#fde4ec"];
  const count = innerWidth < 700 ? 7 : 12;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.setProperty("--x", Math.round(Math.random() * 100) + "vw");
    p.style.setProperty("--s", (8 + Math.random() * 8).toFixed(1) + "px");
    p.style.setProperty("--c", colors[i % colors.length]);
    p.style.setProperty("--d", (14 + Math.random() * 12).toFixed(1) + "s");
    p.style.setProperty("--delay", (-Math.random() * 26).toFixed(1) + "s");
    p.style.setProperty("--drift", Math.round(-80 + Math.random() * 160) + "px");
    box.append(p);
  }
  document.body.append(box);
})();
