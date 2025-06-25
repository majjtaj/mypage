function rollDice() {
  const dice = document.getElementById('dice');
  let rollCount = 10;
  let currentRoll = 0;

  const interval = setInterval(() => {
    const num = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice${num}.png`;
    dice.style.transform = `rotate(${Math.random() * 360}deg)`;
    currentRoll++;

    if (currentRoll >= rollCount) {
      clearInterval(interval);
      const final = Math.floor(Math.random() * 6) + 1;
      dice.src = `images/dice${num}.png`;
      dice.style.transform = `rotate(0deg)`;
    }
  }, 100);
}
