const inputs = document.querySelectorAll('.controls input');
const resetButton = document.getElementById('reset');

const defaultValues = {
  spacing: { value: 10, suffix: 'px' },
  blur: { value: 10, suffix: 'px' },
  base: { value: '#ffc600', suffix: '' },
  brightness: { value: 100, suffix: '%' },
  saturate: { value: 100, suffix: '%' }
};

function updateValue(input) {
  const valueDisplay = document.getElementById(`${input.name}-value`);
  if (valueDisplay) {
    const suffix = input.dataset.sizing || '';
    valueDisplay.textContent = input.value + suffix;
  }
}

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  updateValue(this);
}

function resetAll() {
  inputs.forEach(input => {
    const defaults = defaultValues[input.name];
    if (defaults) {
      input.value = defaults.value;
      document.documentElement.style.setProperty(`--${input.name}`, defaults.value + defaults.suffix);
      updateValue(input);
    }
  });
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('input', handleUpdate);
});

resetButton.addEventListener('click', resetAll);
