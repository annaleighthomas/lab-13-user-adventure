import { getUser } from './local-storage/local-storage-utils.js';
import { isDead } from './utils.js';

export function loadProfile() {
    const name = document.getElementById('name');
    const character = document.getElementById('character');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.localStorage = './';
    }

    name.textContent = user.name;
    character.src = './assets/characters/' + user.character + 'png';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'YOU DIED';
    }
    else { 
        hp.textContent = user.hp;
    }
}