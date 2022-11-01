export const infoInvisible = (
    id,
    idOne,
    idTwo,
    addOne,
    removeOne,
    addTwo,
    removeTwo
) => {
    const input = document.querySelector(id)

    if (input === null) {
    } else {
        document.querySelector(idOne).classList.add(addOne)
        document.querySelector(idOne).classList.remove(removeOne)
        document.querySelector(idTwo).classList.add(addTwo)
        document.querySelector(idTwo).classList.remove(removeTwo)
    }
}

export const firstName = (id) => {
    const input = document.querySelector(id)
    infoInvisible()
    input.style.border = '1px solid #4E5166'
}

export const lastName = (id) => {
    const input = document.querySelector(id)

    input.style.border = '1px solid #4E5166'
}

export const email = (id) => {
    const input = document.querySelector(id)

    input.style.border = '1px solid #4E5166'
}

export const password = (id) => {
    const input = document.querySelector(id)

    input.style.border = '1px solid #4E5166'
}
