import _ from 'lodash'

for (let i = 0; i < 100; ++i) {
    console.log(_.padStart(String(i), 5))
}
