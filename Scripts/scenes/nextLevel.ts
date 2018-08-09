module scenes {
    export class NextLevel extends objects.Scene {
      // Private Instance Variables
      private _overLabel: objects.Label;
      private _nextLevelButton: objects.Button;
      private _ocean: objects.Ocean;
  
      private _scoreboard: managers.ScoreBoard;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
      private _nextLevelButtonClick():void {
          switch(managers.Game.HighScore){
            case 200:
            managers.Game.currentScene = config.Scene.LEVEL2;
            break;
            case 400:
            managers.Game.currentScene = config.Scene.LEVEL3;
            break;

          }
       
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean();
        this._overLabel = new objects.Label("LEVEL COMPLETED", "60px", "Dock51", "#FFFF00", 320, 140, true);
        this._nextLevelButton = new objects.Button("nextLevelButton", 320, 340);
        this._scoreboard = new managers.ScoreBoard();
  
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
        this.addChild(this._overLabel);
  
        // add the backButton to the scene
        this.addChild(this._nextLevelButton);
  
        // add scoreboard to the scene
        this.addChild(this._scoreboard.HighScoreLabel);
        this._scoreboard.HighScore = managers.Game.HighScore;
  
        // event listeners
        this._nextLevelButton.on("click", this._nextLevelButtonClick);
      }
    }
  }
  