const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    // make a passenger object
    // add it on the bus
    const passenger = {
        name: name, 
        wallet: wallet,
        isStruggling: isStruggling,
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    } else if (seat === 'front') {
        struggleBus.unshift(passenger); 
    } 
};

const splicePassenger = (name, wallet, isStruggling, seat) => {
    const midPass = (struggleBus.length / 2);
    const newPassenger = {
        name: name, 
        wallet: wallet,
        isStruggling: isStruggling,
    }
    if (seat === 'middle') {
        struggleBus.splice(midPass, 0, newPassenger);
    }
    console.log(midPass);
};

const unloadPassenger = (bus, seat) => {
    // remove a passenger from the bus
    // return the passenger object
    if (seat === 'front') {
        return bus.shift(); 
    } else if (seat === 'back') {
        return bus.pop();
    }
};

const allAboard = (bus) => {
    const busCost = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busCost) {
            passenger.wallet -= busCost;
            validPassengers.push(passenger);
        };
    });
   return validPassengers;
};  

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const busBuilder = (bus) => {
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString += `<h4>${bus[i].name}</h4>`;
    domString += `<p>${bus[i].wallet}</p>`;
    domString += `<p>${bus[i].isStruggling}</p>`;
    domString += `</div>`;
    }

    printToDom('the-bus', domString);
};

// challenge - add a person to the middle of the bus

const init = () => {
    addPassenger('Michael', 6, true, 'front');
    addPassenger('Jason', 45, false, 'front');
    addPassenger('Mick', 200, false, 'front');
    addPassenger('Jessie', 400, true, 'front');
    addPassenger('Zoe', 2, false, 'front');
    addPassenger('Terry', 2, true, 'front');
    addPassenger('Johnny', 100, false, 'back');
    addPassenger('Joe', 29, true, 'front');
   

    splicePassenger('Han', 300, 'maybe', 'middle')
    splicePassenger('Jenny', 500, 'maybe', 'middle')
    splicePassenger('Chris', 500, 'maybe', 'middle')

    
    
    const firstPassenger = unloadPassenger(struggleBus, 'front');
    const busPeople = allAboard(struggleBus);
    busBuilder(struggleBus);
};

init();