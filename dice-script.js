function rollDice() {
  const dice = document.getElementById('dice');
  let rollCount = 15;   // more rolls for smoother animation
  let currentRoll = 0;

  const interval = setInterval(() => {
    const num = Math.floor(Math.random() * 6) + 1;
    dice.src = `images/dice${num}.png`;

    // Add rotation and a bit of "3D-like" tumbling
    const rotateX = Math.floor(Math.random() * 360);
    const rotateY = Math.floor(Math.random() * 360);
    dice.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    currentRoll++;

    if (currentRoll >= rollCount) {
      clearInterval(interval);
      const final = Math.floor(Math.random() * 6) + 1;
      dice.src = `images/dice${final}.png`;

      // Reset transform smoothly
      dice.style.transition = 'transform 0.5s ease-out';
      dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
      
      // Remove transition after it ends so next roll is immediate
      dice.addEventListener('transitionend', () => {
        dice.style.transition = '';
      }, { once: true });
    }
  }, 100);
}

function rollSingleDice() {
  const dice = document.getElementById('single-dice');
  let angleX = 0;
  let angleY = 0;
  let spins = 20;
  let count = 0;

  const intervalID = setInterval(() => {
    const face = Math.floor(Math.random() * 6) + 1;
    dice.src = `images/dice${face}.png`;
    angleX += 90;
    angleY += 90;
    dice.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    count++;

    if (count >= spins) {
      clearInterval(intervalID);
      const final = Math.floor(Math.random() * 6) + 1;
      dice.src = `images/dice${final}.png`;
      dice.style.transition = 'transform 0.4s ease-out';
      dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
      dice.addEventListener('transitionend', () => {
        dice.style.transition = 'transform 0.12s linear';
      }, { once: true });
    }
  }, 60);
}
