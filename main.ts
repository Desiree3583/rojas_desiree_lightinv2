while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 20) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() >= 15) {
        light.setAll(light.rgb(0, 255, 0))
        light.setBrightness(30)
    } else {
        light.setAll(light.rgb(0, 0, 255))
        light.setBrightness(200)
    }
    
}
