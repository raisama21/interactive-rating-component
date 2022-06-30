const buttonSubmit = document.getElementById("button-submit");
const secondContainer = document.getElementById("second-container");
const ratingBtns = document.getElementsByClassName("rating-button");
const ratingInfo = document.getElementById("rating-info");

for (let i = 0; i < ratingBtns.length; i++) {
  // loop and event listener for rating
  ratingBtns[i].addEventListener("click", () => {
    // console.log(ratingBtns[i].textContent);
    let selected = ratingBtns[i].textContent;
    ratingInfo.textContent = `You selected ${selected} out of 5`;

    // event listener for submit button
    buttonSubmit.addEventListener("click", () => {
      secondContainer.style.zIndex = "1";
    });
  });
}

// *#* do not read this in my note for the future me :)
// *note*: ratingBtns[i].textContent displays the button element text content
