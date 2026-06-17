document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("[data-filter-top]");
  if (!button) return;

  let onlyTop = false;
  button.addEventListener("click", () => {
    onlyTop = !onlyTop;
    document.querySelectorAll("[data-paper-card]").forEach((node) => {
      const isTop = node.getAttribute("data-top-pick") === "true";
      node.style.display = !onlyTop || isTop ? "" : "none";
    });
    button.textContent = onlyTop ? "显示全部" : "只看重点";
  });
});
