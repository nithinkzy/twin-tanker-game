module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _helpButton: objects.Button;
    private _controlButton: objects.Button;
    private _exitButton: objects.Button;
    private _ocean: objects.Ocean;
    public _engineSound: createjs.AbstractSoundInstance;
    public  flag:number =0;


    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      console.log("startbuton pressed");
     this.flag =1;
     
      managers.Game.currentScene = config.Scene.LEVELS;
    }
    private _helpButtonClick():void {
      this.flag =1;
      this.Update();
      managers.Game.currentScene = config.Scene.HELP;
    }
    private _exitButtonClick():void {
     window.close();
    }
    private _controlButtonClick():void {
         
      managers.Game.currentScene = config.Scene.CONTROL;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      //this._engineSound = createjs.Sound.play("engine");
      //t/his._engineSound.loop = -1; // play forever
      //this._engineSound.volume = 0.3;

      this._ocean = new objects.Ocean(0);

      this._welcomeLabel = new objects.Label("TWIN - TANKER", "60px", "Dock51", "#8a0707", 340, 80, true);
      this._startButton = new objects.Button("startButton", 320, 200);
      this._helpButton = new objects.Button("helpButton", 320, 270);
      this._controlButton = new objects.Button("controlButton", 320, 340);
      this._exitButton = new objects.Button("exitButton", 320, 400);
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
      if(this.flag==1)
      {
        this._engineSound.stop();
      }
      
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
       this.addChild(this._controlButton);
       // add the exitButton to the scene
       this.addChild(this._exitButton);

       this._startButton.on("click", this._startButtonClick);
       this._helpButton.on("click", this._helpButtonClick);
       this._controlButton.on("click", this._controlButtonClick);
       this._exitButton.on("click", this._exitButtonClick);
    }
  }
}
