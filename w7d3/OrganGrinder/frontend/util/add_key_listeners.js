addKeyPressListeners(){
  keyUpListener();
  keyDownListener();
}

keyUpListener(){
  $(document).on("keyup", KeyActions.keyReleased);
}

keyDownListener(){
  $(document).on("keydown", KeyActions.keyPressed);
}

module.exports = addKeyPressListeners;
