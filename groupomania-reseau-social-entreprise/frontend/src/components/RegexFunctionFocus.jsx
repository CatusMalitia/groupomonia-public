export const infoVisible = (
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

    if (input.value.length < 2) {
        infoVisible()
        document.querySelector('.paragraphError').innerHTML =
            'Votre prénom doit contenir 2 caractères minimum'
    } else if (input.value.length > 24) {
        infoVisible()
        document.querySelector('.paragraphError').innerHTML =
            'Votre prénom ne peut contenir plus de 25 caratères maximum'
    } else if (!input.value.match(/^[a-zA-Z-]{2,25}$/)) {
        document.querySelector('.paragraphError').innerHTML =
            "S'il vous plaît, veuillez ne pas mettre d'espace à la fin ou entre les caractères, ni de chiffres, ni de caractères spéciaux, hors les tirets si vous avez un prénom composé"
    } else if (!input.value.match(/^[a-zA-Z-]{2,25}$/)) {
        document.querySelector('.paragraphError').innerHTML =
            "S'il vous plaît, veuillez ne pas mettre d'espace à la fin ou entre les caractères, ni de chiffres, ni de caractères spéciaux, hors les tirets si vous avez un prénom composé"
    }
}

export const lastName = (id) => {
    const input = document.querySelector(id)

    if (input.value.length < 2) {
        infoVisible()
        document.querySelector('.paragraphErrorLastName').innerHTML =
            'Votre nom doit contenir 2 caractères minimum'
    } else if (input.value.length > 24) {
        infoVisible()
        document.querySelector('.paragraphErrorLastName').innerHTML =
            'Votre nom ne peut contenir plus de 25 caratères maximum'
    } else if (!input.value.match(/^[a-zA-Z-]{2,25}$/)) {
        document.querySelector('.paragraphErrorLastName').innerHTML =
            "S'il vous plaît, veuillez ne pas mettre d'espace à la fin ou entre les caractères, ni de chiffres, ni de caractères spéciaux, hors les tirets si vous avez un prénom composé"
    } else if (!input.value.match(/^[a-zA-Z-]{2,25}$/)) {
        document.querySelector('.paragraphErrorLastName').innerHTML =
            "S'il vous plaît, veuillez ne pas mettre d'espace à la fin ou entre les caractères, ni de chiffres, ni de caractères spéciaux, hors les tirets si vous avez un prénom composé"
    }
}

export const email = (id) => {
    const input = document.querySelector(id)

    if (!input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)) {
        infoVisible()
        document.querySelector('.paragraphErrorEmail').innerHTML =
            'Email invalide'
    }
}

export const password = (id) => {
    const input = document.querySelector(id)

    if (
        !input.value.match(
            /^(?=.{9,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
        )
    ) {
        infoVisible()
        document.querySelector('.paragraphErrorPassword').innerHTML =
            'Votre mot de passe doit contenir au minimum 9 caractères, dont 1 majuscule, 1 chiffre, et 1 caractère spécial'
    }
}
