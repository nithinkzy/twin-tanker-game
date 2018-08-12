module managers {
  export class Keyboard {
    // private instance variables

    // public instance variables
    public moveForward: boolean;
    public moveBackward: boolean;
    public moveLeft: boolean;
    public moveRight: boolean;
    public moveForward1: boolean;
    public moveBackward1: boolean;
    public moveLeft1: boolean;
    public moveRight1: boolean;
    public fire: boolean;
    public fire2: boolean;
    
    public enabled: boolean;
    public paused: boolean;

    // constructors
    constructor() {
      this.enabled = true;
      document.addEventListener('keydown', this.onKeyDown.bind(this), false);
      document.addEventListener('keyup', this.onKeyUp.bind(this), false);
    }

    // private methods

    // public methods
    public onKeyDown(event:KeyboardEvent):void {
      switch(event.keyCode) {
        case config.Keys.W:
        this.moveForward1 = true;
        break;
        case config.Keys.UP_ARROW:
          this.moveForward = true;
        break;

        case config.Keys.A:
        this.moveLeft1 = true;
        break;
        case config.Keys.LEFT_ARROW:
          this.moveLeft = true;
        break;

        case config.Keys.S:
        this.moveBackward1 = true;
        break;
        case config.Keys.DOWN_ARROW:
          this.moveBackward = true;
        break;

        case config.Keys.D:
        this.moveRight1 = true;
        break;
        case config.Keys.RIGHT_ARROW:
          this.moveRight = true;
        break;
        case config.Keys.T:
        this.fire2 = true;
      break;

        
        case config.Keys.SPACE:
          this.fire = true;
        break;

      }
    }

    public onKeyUp(event:KeyboardEvent): void {
      switch(event.keyCode) {
        case config.Keys.W:
        case config.Keys.UP_ARROW:
          this.moveForward = false;
          this.moveForward1 = false;
        break;

        case config.Keys.A:
        case config.Keys.LEFT_ARROW:
          this.moveLeft = false;
          this.moveLeft1 = false;
        break;

        case config.Keys.S:
        case config.Keys.DOWN_ARROW:
          this.moveBackward = false;
          this.moveBackward1 = false;
        break;

        case config.Keys.D:
        case config.Keys.RIGHT_ARROW:
          this.moveRight = false;
          this.moveRight1 = false;
        break;

        case config.Keys.T:
        this.fire2 = false;
      break;
        case config.Keys.SPACE:
          this.fire = false;
        break;

      }
    }
  }
}
