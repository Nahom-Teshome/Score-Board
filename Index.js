
let homeCount = document.getElementById("homeCounter")
let guestCount = document.getElementById("guestCounter")
let count = 0
let counter = 0


function addOneHome()
{
  count++
  homeCount.textContent = count
}
function addTwoHome()
{
  count +=2
  homeCount.textContent = count
}
function addThreeHome(){
    count += 3
    homeCount.textContent = count
}

function addOneGuest()
{
  counter++
  guestCount.textContent = counter
}
function addTwoGuest()
{
  counter +=2
  guestCount.textContent = counter
}

function addThreeGuest()
{
    counter += 3
    guestCount.textContent = counter
}

function setToZero()
{
    homeCount.textContent = 0
    guestCount.textContent = 0
}