(() => {
  const button = document.querySelector("[data-copy-command]");
  const command = document.querySelector(".blackout-command code");

  if (!button || !command || !navigator.clipboard) {
    return;
  }

  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(command.textContent.trim());
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1600);
  });
})();
