import quests from '../quest/quest-data.js';

const mapMainSection = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest?id=${quest.id}`;

    mapMainSection.append(anchorTag);
}