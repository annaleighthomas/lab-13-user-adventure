const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (!user) return null;

    const userParsed = JSON.parse(user);

    return userParsed;
}

export function setUser(user) {
    const stringifyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringifyUser);
}

export function updateUsersChoice(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;

    user.gold += choice.gold;

    user.completed[questId] = true;

    setUser(user);
}
