import assert from 'assert'
import {plus, plusAsync} from '../../myFirstNode/math-util.js'

describe('App', function () {
    describe('Test plus function', function() {
        it('Shuould return 8 when running', function() {
            const answer = plus(2,6)
            assert.equal(answer, 8)
        })
    }),
    describe('Test async function', function() {
        it('Shuould return 8 when running async', async function() {
            const answer = await plusAsync(2,6)
            console.log("res: ", answer)
            assert.equal(answer, 8)
        })
    })
})