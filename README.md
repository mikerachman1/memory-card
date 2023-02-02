# Don't Click the Same Flag Twice

A memory game to learn country flags created with React.

[👉 Live demo 👈](https://mikerachman1.github.io/memory-card/)

## Instructions for play 
  1. Begin by clicking any flag.
  2. Click any other flag that isn't one you have already clicked.
  3. Continue until you click the same flag twice.

## Functionality
  - Flags are stored in a helper file `src/components/helpers/flags.js` that returns 12 random flags from a possible 26 flags using the `getRandomFlags()` function
  - Score is tracked using states created in the App component
  - Local Storage is used to keep track of the users high score
  - Country names can be displayed below the flags by clicking the 'Display Country Names' button.

## Screenshot
![screenshot](/src/images/screenshot.png?raw=true)

## Notes
  - Flag images were obtained from: https://www.countryflags.com/
  - This was built as part of the Odin Project curriculum. [Project description](https://www.theodinproject.com/lessons/javascript-memory-card)

