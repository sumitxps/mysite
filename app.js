var canvas = document.querySelector('canvas')
var mydiv = document.querySelector('div')
var c = canvas.getContext('2d')

var x = 0
var speedfaster = 0
var speedslower = 0
var loopA = 0
var loopB = 0
var loopTimes = 200
var maintaintimes = 0
var finish = 0
var startTime = Date.now()
var id = null;

function animate() {
    id = requestAnimationFrame(animate)
    if (x + 5 >= canvas.width && loopA < loopTimes) {
        x = 0
        maintaintimes += 1
        if (maintaintimes >= 4) {
            speedfaster += 0.3
            maintaintimes = 0
        }
        loopA += 1

    }
    if (x + 5 >= canvas.width && loopA >= loopTimes && loopB < loopTimes) {
        x = 0
        maintaintimes += 1
        if (maintaintimes >= 4) {
            speedslower += 0.3
            maintaintimes = 0
        }

        loopB += 1

    }
    if (loopB === loopTimes) {
        x = 0
        speedslower = 0
        speedfaster = 0
        loopA = 0
        loopB = 0
        finish = 1

    }



    c.clearRect(0, 0, canvas.width, canvas.height)

    x += 2 + speedfaster - speedslower
    mydiv.innerHTML = `${10+(10*Math.round(+speedfaster-speedslower))}`

    c.fillRect(x, 65, 10, 10)
    if (finish === 1) {
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = '#FF0000'


        cancelAnimationFrame(id);

    }

}
animate()
//mydiv.innerHTML =`${speedfaster-speedslower}`
// mydiv.innerHTML = Math.round((Date.now() - startTime) / 1000)