let silver = 0
let money = document.querySelector(".dISPLAY")
let clickDisplay = document.querySelector(".clicDisp")
let multipler = 1

let clicks = 0

function updateSilver()
{
    silver+= multipler
    money.textContent = silver
    if (silver % 13 == 0)
    {
        multipler*=2
    }
    clicks++
    sleep(1000).then(() => {clicks--})
    clickDisplay.textContent = clicks
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }