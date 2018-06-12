# BattleShipt
Welcome to BattleShipt. You are in the throes of an existential naval battle with an opponent General. Your crews depend on you to call the right shots and destroy all the opponent's ships to smithereens, before they destroy all your ships.

## Install Instructions
As easy as 1, 2, ..., 6 :smile:
1. ```git clone https://github.com/waruiz/BattleShipt.git```
2. ```cd``` into the BattleShipt directory
3. ```npm install``` all dependencies
4. Once installed, ```npm run build``` so Webpack can do its work of bundling up React
5. When Webpack is done, ```npm run start``` to fire up the Node/Express server
6. Awesome! Now navigate to http://localhost:3000

## Play Instructions
* Select a name for yourself and **click** :point_up: 'Submit'
* You're routed to the battlefield. Prepare to engage by hovering over the pretty :sparkles: grid tiles. Click on the tiles to place a ship belonging to your armada.
* When you're done placing your ships, click 'Start Game' on the right-hand side.
  * You will be playing against the computer's randomly selected ship locations. The ScoreBoard on the right-hand side notifies you if your strike was a HIT, MISS, or if you're ALREADY TAKEN that tile during a previous strike.
  * [proposed MVP+, socket integration] If your opponent has not yet clicked 'Start Game', you'll be asked to wait for them. When you're both ready, the 'Start Game' card will turn into a Scoreboard.
  * [proposed MVP+, socket integration] If your opponent has also clicked 'Start Game', the game will start communicating over sockets to sink their ships and start tallying points of who is winning.

### Game Completion Status
- [x] Present a Welcome screen for user to create an ID, to be used for announcing self to opponent
- [x] Present the Battlefield with a Grid and GameStatus card which can start the game with your opponent
- [x] Place your own ships on grid, and be able to place points of attack on grid tiles once game has started
- [x] Challenge the computer's randomly chosen tile locations, and be notified of your strike's success
- [ ] Get socket.io working to tally whose points of attack hit an actual opponent ship :sweat_smile: Stay tuned!