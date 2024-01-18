var swapperButton = document.querySelector(".__swapper-button");
var bodyElement = document.body;
var modeIndicatorContainer = document.querySelector(".__mode-indicator");
if (swapperButton) {
    swapperButton.addEventListener("click", function () {
        var currentRotation = parseInt(getComputedStyle(modeIndicatorContainer).getPropertyValue("--rotation"));
        bodyElement.classList.toggle("__dark-mode");
        modeIndicatorContainer === null || modeIndicatorContainer === void 0 ? void 0 : modeIndicatorContainer.style.setProperty("--rotation", (currentRotation + 180).toString());
    });
}
