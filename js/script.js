const image = document.querySelector(".hover-img");

image.addEventListener("mousemove", event => {
  const { top, bottom, left, right } = event.target.getBoundingClientRect();

  const middleX = (right - left) / 2;
  const middleY = (bottom - top) / 2;

  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / middleX;
  const offsetY = (middleY - clientY) / middleY;

  event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
    5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
});


let flip = document.getElementById('flip');
function flipBtn() {
  flip.style.transition = '0.5s';
  flip.style.transform = 'rotatex(360deg)';
}

function flipReset() {
  flip.style.transition = '0s';
  flip.style.transform = 'none';
}


let flipTwo = document.getElementById('flipTwo');
function flipBtnTwo() {
  flipTwo.style.transition = '0.5s';
  flipTwo.style.transform = 'rotatex(360deg)';
  // flipTwo.style.backgroundColor = 'red';
}

function flipResetTwo() {
  flipTwo.style.transition = '0s';
  flipTwo.style.transform = 'none';
}






var splide = new Splide(".splide", {
	perPage: 2,
	// gap: "1.3rem",
	breakpoints: {
		640: {
			perPage: 2,
			gap: ".7rem",
			height: "6rem"
		},
		480: {
			perPage: 1,
			gap: ".7rem",
			height: "6rem"
		}
	}
});

splide.mount();
