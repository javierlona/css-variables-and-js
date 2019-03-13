const inputs = document.querySelectorAll(".controls input");

// console.log(inputs);

function handle_update() {
  // console.log(this);
  // console.log(this.value);
  let suffix = this.dataset.sizing || '';
  // console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handle_update, false));
// inputs.forEach(input => input.addEventListener("mousemove", handle_update, false));