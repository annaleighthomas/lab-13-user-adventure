export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return id;
        }
    }
    return null;
}

export function isDead(user) {
    return user.hp <= 0;
}


