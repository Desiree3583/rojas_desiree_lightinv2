while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 20:
        light.set_all(light.rgb(0, 0, 0))
    elif input.light_level()>= 15:
        light.set_all(light.rgb(0, 255, 0))
        light.set_brightness(30)
    else:
        light.set_all(light.rgb(0, 0, 255))
        light.set_brightness(200)
