const revealButton = document.getElementById("revealButton");
const themeButton = document.getElementById("themeButton");
const productDetails = document.getElementById("productDetails");
const productCard = document.getElementById("productCard");

revealButton.addEventListener("click", function () {
    const detailsAreHidden = productDetails.hidden;

    productDetails.hidden = !detailsAreHidden;
    revealButton.textContent = detailsAreHidden ? "Hide Details" : "Reveal Details";
    revealButton.setAttribute("aria-expanded", detailsAreHidden);
});

themeButton.addEventListener("click", function () {
    const newThemeIsOn = productCard.classList.toggle("alternate-theme");
    themeButton.setAttribute("aria-pressed", newThemeIsOn);
});
