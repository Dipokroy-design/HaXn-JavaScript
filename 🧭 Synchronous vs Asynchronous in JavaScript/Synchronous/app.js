let button = document.querySelector("#button");
let output = document.querySelector("#output");
let link = document.querySelector("#page");

function downloadPage(url, callback) {
  setTimeout(() => {
    const errorChance = Math.random();
    if (errorChance < 0.2) {
      callback("Simulated loading error", null);
    } else {
      callback(null, `Page from ${url} or Click to read about callback Hell`);
    }
  }, 1000);
}

function handlePage(error, photo) {
  if (error) {
    output.innerHTML = `❌ Page loading error: ${error}`;
    link.innerHTML = ""; // Clear photo link if failed
  } else {
    output.innerHTML = `✅ Loading finished!`;
    link.innerHTML = photo; // Show photo info
  }
}

function newButton() {
  setTimeout(function () {
    let clickButton = document.createElement("button");
    clickButton.innerText = "click Me";
    clickButton.classList.add("CoolButton");
    clickButton.addEventListener("click", function () {
      window.open("http://callbackhell.com/");
    });
    link.appendChild(clickButton);
  }, 2000);
}

button.addEventListener("click", function () {
  output.innerHTML = `The page is loading... ⏳`;
  link.innerHTML = "";
  downloadPage("http://callbackhell.com/", handlePage);
  newButton();
});
