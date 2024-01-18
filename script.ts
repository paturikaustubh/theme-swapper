const swapperButton =
  document.querySelector<HTMLButtonElement>(".__swapper-button");
const bodyElement = document.body as HTMLBodyElement;
const modeIndicatorContainer =
  document.querySelector<HTMLDivElement>(".__mode-indicator");

if (swapperButton) {
  swapperButton.addEventListener("click", () => {
    const currentRotation = parseInt(
      getComputedStyle(
        modeIndicatorContainer as HTMLDivElement
      ).getPropertyValue("--rotation")
    );
    bodyElement.classList.toggle("__dark-mode");
    modeIndicatorContainer?.style.setProperty(
      "--rotation",
      (currentRotation + 180).toString()
    );
  });
}
