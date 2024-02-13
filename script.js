"use strict";

let agentInput = document.getElementById("search");
let submit = document.getElementById("generate");
let agentName = document.querySelector(".agent__name");
let agentData;
let agentBakground = document.querySelector('.agent__img');
let agentImg = document.getElementById("agent-img");
let agentDisc = document.querySelector(".agent__disc");
let ability1 = document.querySelector("#slot1-img");
let ability1_title = document.querySelector("#slot1-title");
let ability1_disc = document.querySelector("#slot1-disc");
let ability2 = document.querySelector("#slot2-img");
let ability2_title = document.querySelector("#slot2-title");
let ability2_disc = document.querySelector("#slot2-disc");
let ability3 = document.querySelector("#slot3-img");
let ability3_title = document.querySelector("#slot3-title");
let ability3_disc = document.querySelector("#slot3-disc");
let name;

async function agentApi() {
  const apiUrl = "https://valorant-api.com/v1/agents";

  try {
    const response = await fetch(apiUrl);
    agentData = await response.json();
    console.log(agentData);
  } catch (error) {
    console.log(error);
  }
}

submit.addEventListener("click", function () {
  agentInput.value = agentInput.value.toLowerCase();
  name =
    agentInput.value[0].charAt(0).toUpperCase() + agentInput.value.slice(1);

  agentName.textContent = agentInput.value;

  for (let i = 0; i < 24; i++) {
    if (name == agentData.data[i].displayName) {
      agentImg.src = agentData.data[i].fullPortrait;
      agentDisc.textContent = agentData.data[i].description;
      ability1.src = agentData.data[i].abilities[0].displayIcon;
      agentBakground.style.backgroundImage = `Url('${agentData.data[i].background}')`;
      ability1_title.textContent = agentData.data[i].abilities[0].displayName;
      ability1_disc.textContent = agentData.data[i].abilities[0].description;
      ability2.src = agentData.data[i].abilities[1].displayIcon;
      ability2_title.textContent = agentData.data[i].abilities[1].displayName;
      ability2_disc.textContent = agentData.data[i].abilities[1].description;
      ability3.src = agentData.data[i].abilities[2].displayIcon;
      ability3_title.textContent = agentData.data[i].abilities[2].displayName;
      ability3_disc.textContent = agentData.data[i].abilities[2].description;
    }
  }
});

agentApi();
