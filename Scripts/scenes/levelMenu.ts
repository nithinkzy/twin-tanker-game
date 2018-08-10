module scenes {
    export class LevelScene extends objects.Scene {
      // Private Instance Variables
      private _welcomeLabel: objects.Label;
      private _levelOneButton: objects.Button;
      private _levelTwoButton : objects.Button;
      private _levelThreeButton : objects.Button;
      private _menuButton: objects.Button;
      private _ocean: objects.Ocean;
  
  
      private _gameTheme: createjs.AbstractSoundInstance;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods

      private _menuButtonClick():void {
        managers.Game.currentScene = config.Scene.START;
      }

      private __levelOneButtonClick():void {
  
        managers.Game.currentScene = config.Scene.LEVEL1;
        
      }
      private _levelTwoButtonClick():void {
  
            
        managers.Game.currentScene = config.Scene.LEVEL2;

         
    }
      private _freeRunButtonClick():void {
        managers.Game.currentScene = config.Scene.LEVEL3;
      }
  
  
      // Public Methods
      public stopMusic():void{
        this._gameTheme.stop();
      }
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean(0);
  
        this._welcomeLabel = new objects.Label("LEVELS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
        this._levelOneButton = new objects.Button( "levelOneButton", 320, 160);
        this._levelTwoButton = new objects.Button( "levelTwoButton", 320, 230);
        this._levelThreeButton = new objects.Button( "levelThreeButton", 320, 300);
        this._menuButton = new objects.Button("menuButton", 320, 370);

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
        this.addChild(this._levelOneButton);
  
        // add the instructionButton to the scene
        this.addChild(this._levelTwoButton);
  
        // add the exit Button to the scene
        this.addChild(this._levelThreeButton);

        // add the menu Button to the scene
        this.addChild(this._menuButton);
  
        this._levelOneButton.on("click", this.__levelOneButtonClick);
        this._levelTwoButton.on("click", this._levelTwoButtonClick);
        this._levelThreeButton.on("click", this._freeRunButtonClick);
        this._menuButton.on("click", this._menuButtonClick);
  
      }
    }
  }
  