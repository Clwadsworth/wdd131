const snortleblat = {
    name: "Snortleblat",
    characterClass: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
// each of the buttons need to have a funciton to them
    attacked: function () {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            renderCharacter();
            alert(`${this.name} has died!`);
        } else {
            renderCharacter();
        }
    },

    levelUp: function () {
        this.level += 1;
        renderCharacter();
    }
};

function renderCharacter() {
    document.querySelector("#charName").textContent = snortleblat.name;
    document.querySelector("#charClass").textContent = snortleblat.characterClass;
    document.querySelector("#charLevel").textContent = snortleblat.level;
    document.querySelector("#charHealth").textContent = snortleblat.health;
}

document.querySelector("#attackBtn").addEventListener("click", function () {
    snortleblat.attacked();
});

document.querySelector("#levelUpBtn").addEventListener("click", function () {
    snortleblat.levelUp();
});

renderCharacter();