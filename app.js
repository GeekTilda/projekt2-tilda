const ghosts = [
  {
    name: "Spirit",
    specialAbility: "scare",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Spirit Box",
    specialEvidence3: "Ghost Writing",
    desc: "Boring af",
  },
  {
    name: "Wraith",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Spirit Box",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Phantom",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Poltergeist",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "Ghost Writing",
  },
  {
    name: "Banshee",
    specialEvidence1: "Fingerprints",
    specialEvidence2: "Ghost Orbs",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Jinn",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Mare",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Ghost Orbs",
    specialEvidence3: "Ghost Writing",
  },
  {
    name: "Revenant",
    specialEvidence1: "Ghost Orbs",
    specialEvidence2: "Ghost Writing",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Shade",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Ghost Writing",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Demon",
    specialEvidence1: "Fingerprints",
    specialEvidence2: "Ghost Writing",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Yurei",
    specialEvidence1: "Ghost Orbs",
    specialEvidence2: "Freezing Temperatures",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Oni",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Freezing Temperature",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Yokai",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Ghost Orbs",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Hantu",
    specialEvidence1: "Fingerprints",
    specialEvidence2: "Ghost Orbs",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Goryo",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Myling",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "Ghost Writing",
  },
  {
    name: "Onryo",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Ghost Orb",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "The Twins",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Spirit Box",
    specialEvidence3: "Freezing Temperature",
  },
  {
    name: "Raiju",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Ghost Orbs",
    specialEvidence3: "D.O.T.S",
  },
  {
    name: "Obake",
    specialEvidence1: "EMF 5",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "Ghost Orbs",
  },
  {
    name: "The Mimic",
    specialEvidence1: "Spirit Box",
    specialEvidence2: "Fingerprints",
    specialEvidence3: "Freezing Temperatures",
    specialEvidence4: "Ghost Orbs",
  },
];

// ghosts[0]

/*
ghosts.forEach((ghost) => {
  // Loopa igenom och gör något med varje spöke
  let ghostHeading = document.createElement("a");
  ghostHeading.innerHTML = ghost.name;
  document.querySelector("main").append(ghostHeading);
  console.log(ghostHeading);
});
 */

ghosts.forEach((ghost) => {
  // Loopa igenom och gör något med varje spöke
  let ghostHeading = document.createElement("a");
  ghostHeading.setAttribute("href", "./ghost.html?ghostid=" + ghost.name);
  console.log(ghost.name);
  ghostHeading.classList.add("ghost-name");
  ghostHeading.innerHTML = ghost.name;
  document.querySelector("main").append(ghostHeading);
  console.log(ghostHeading);
  //let ghostDesc = document.createElement("p");
  //ghostDesc.innerHTML = ghost.desc;
  //document.querySelector("main").append(ghostDesc);
  //console.log(ghostDesc);
});

// För att hitta en enskild om vi inte vi inte visste index
let foundGhost = ghosts.find((ghost) => ghost.name === "Spirit");
foundGhost.specialAbility;
