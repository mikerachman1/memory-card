const body = document.querySelector('body');

const gameOverColor = () => body.style.backgroundColor = 'rgb(244 54 54)';

const resetColor = () => body.style.backgroundColor = 'rgb(192, 192, 192)';

export { gameOverColor, resetColor };