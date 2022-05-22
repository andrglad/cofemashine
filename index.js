const input = require('sync-input');
// const oneCup = [200, 50, 15];
let stat = [400, 540, 120, 9, 550];
let act = "";

let recipe = new Object();
  recipe.Espresso = [250, 0, 16, 1, 4];
  recipe.Latte = [350, 75, 20, 1, 7];
  recipe.Cappuccino = [200, 100, 12, 1, 6];

function statement () {
  console.log(`
The coffee machine has:
${stat[0]} ml of water
${stat[1]} ml of milk
${stat[2]} g of coffee beans
${stat[3]} disposable cups
$${stat[4]} of money`);
}

function action () {
  do {
    act = input(`
Write action (buy, fill, take, remaining, exit): `);

  switch (act) {
    case "buy":
      let selectedCofe = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: `);
      switch (selectedCofe) {
        case "1":
          for (let i = 0; i < stat.length - 1; i++) {
            stat[i] = stat[i] - recipe.Espresso[i];
          }
          stat[4] = stat[4] + recipe.Espresso[4];
          break;
        case "2":
          for (let i = 0; i < stat.length - 1; i++) {
            if (stat[i] > recipe.Latte[i]) {
              stat[i] = stat[i] - recipe.Latte[i];
            } else {
              console.log(`Sorry, not enough ${stat.indexOf(stat[i])}!`);
              break;
            }
          }
          console.log(`I have enough resources, making you a coffee!`);
          stat[4] = stat[4] + recipe.Latte[4];
          break;
        case "3":
          for (let i = 0; i < stat.length - 1; i++) {
            stat[i] = stat[i] - recipe.Cappuccino[i];
          }
          stat[4] = stat[4] + recipe.Cappuccino[4];
          break;
      }
      break;
    case "fill":
      let wCh = Number(input(`Write how many ml of water you want to add: `));
      let mCh = Number(input(`Write how many ml of milk you want to add: `));
      let bCh = Number(input(`Write how many grams of coffee beans you want to add: `));
      let cCh = Number(input(`Write how many disposable coffee cups you want to add: `));
      stat[0] = stat[0] + wCh;
      stat[1] = stat[1] + mCh;
      stat[2] = stat[2] + bCh;
      stat[3] = stat[3] + cCh;
      break;
    case "take":
      console.log(`I gave you $550
`);
      stat[4] = 0;
      break;
    case "remaining":
      statement();
      break;
  }
} while (act !== "exit");
}


action();


