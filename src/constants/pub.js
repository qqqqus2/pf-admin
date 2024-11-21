const filter = (obj, keys=[]) => {
    return keys.reduce((o, key) => {
        return {
            ...o,
            [key]: obj[key]
        }
    }, {})
}

const SIZE = Object.freeze({
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
})

const COLOR = Object.freeze({
    BLACK: 'black',
    GRAY: 'gray',
    GREEN: 'green',
    BLUE: 'blue',
    RED: 'red',
    OUTLINE: 'outline',
    LINK: 'link',
})

const BUTTON = Object.freeze({
    COLOR: { ...filter(COLOR, ['GRAY', 'RED', 'BLUE', 'GREEN', 'OUTLINE', 'LINK']) },
    SIZE: { ...filter(SIZE, ['XS', 'S', 'M', 'L']) },
})

const FLAG = Object.freeze({
    COLOR: { ...filter(COLOR, ['GRAY', 'RED', 'BLUE']) },
    SIZE: { ...filter(SIZE, ['S', 'M', 'L']) },
})

const PUB = {
    SIZE,
    COLOR,
    BUTTON,
    FLAG,
}

export default PUB