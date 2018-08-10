module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _helpButton: objects.Button;
    private _exitButton: objects.Button;
    private _ocean: objects.Ocean;


    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      managers.Game.currentScene = config.Scene.LEVELS;
    }
    private _helpButtonClick():void {
      managers.Game.currentScene = config.Scene.PLAY;
    }
    private _exitButtonClick():void {
     window.close();
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {


      this._ocean = new objects.Ocean(0);

      this._welcomeLabel = new objects.Label("TANKER", "60px", "Dock51", "#FF6347", 320, 120, true);
      this._startButton = new objects.Button("startButton", 320, 250);
      this._helpButton = new objects.Button("helpButton", 320, 320);
      this._exitButton = new objects.Button("exitButton", 320, 390);
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    // This is where the fun happens
    public Main(): void {
      // add the ocean object
      this.addChild(this._ocean);

      // add the welcome label to the scene
      this.addChild(this._welcomeLabel);

      // add the startButton to the scene
       this.addChild(this._startButton);

       // add the helpButton to the scene
       this.addChild(this._helpButton);

       // add the exitButton to the scene
       this.addChild(this._exitButton);

       this._startButton.on("click", this._startButtonClick);
       this._helpButton.on("click", this._helpButtonClick);
       this._exitButton.on("click", this._exitButtonClick);
    }
  }
}
