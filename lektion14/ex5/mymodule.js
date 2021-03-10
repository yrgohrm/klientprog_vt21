import _ from 'lodash'

function doStuff() {
    for (let i = 0; i < 10; ++i) {
        console.log(_.padStart(String(i), 5))
    }
}

function doOtherStuff() {
    for (let i = 0; i < 5; ++i) {
        console.log(_.padStart(String(i), i))
    }
}

export default { doStuff, doOtherStuff }
