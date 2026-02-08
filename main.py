def on_button_pressed_a():
    global position
    position += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global position
    position += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

position = 0
basic.show_string("Gude!")

def on_forever():
    global position
    if position == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    if position == 2:
        basic.show_leds("""
            . . . . .
            # . . . .
            . # # # .
            . . . . #
            . . . . .
            """)
    if position == 3:
        basic.show_leds("""
            . . . . .
            # # . . .
            . . # . .
            . . . # #
            . . . . .
            """)
    if position == 4:
        basic.show_leds("""
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            """)
    if position == 5:
        basic.show_leds("""
            . # . . .
            . # . . .
            . . # . .
            . . . # .
            . . . # .
            """)
    if position == 6:
        basic.show_leds("""
            . # . . .
            . . # . .
            . . # . .
            . . # . .
            . . . # .
            """)
    if position == 7:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
    if position == 8:
        basic.show_leds("""
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            """)
    if position == 9:
        basic.show_leds("""
            . . . # .
            . . . # .
            . . # . .
            . # . . .
            . # . . .
            """)
    if position == 10:
        basic.show_leds("""
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
    if position == 11:
        basic.show_leds("""
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            """)
    if position == 12:
        basic.show_leds("""
            . . . . .
            . . . . #
            . # # # .
            # . . . .
            . . . . .
            """)
    if position > 12:
        position = 1
    if position < 1:
        position = 12
basic.forever(on_forever)
