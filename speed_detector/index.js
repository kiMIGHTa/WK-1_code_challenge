const prompt= require("prompt-sync")()

let speed = prompt(`Your car's speed is:`)

if (speed<=70){
    console.log(`Ok.`)
}else{
    let speedOverLimit=speed-70
    let demeritPoints=Math.trunc(speedOverLimit/5)
    console.log(`Points: ${demeritPoints}`)
    if (demeritPoints>12){
        console.log(`Liscence suspended`)
    }
}