
module scenes {
    export class HelpScene extends objects.Scene {
      // Private Instance Variables
      private _instructionLabel: objects.Label;
      private _moveup: objects.Label;
      private _moveleft: objects.Label;
      private _moveright: objects.Label;
      private _movedown: objects.Label;
      private _label1: objects.Label;
      private _label2: objects.Label;
       private _backButton: objects.Button;
      private _ocean: objects.Ocean;
  
      private _scoreboard: managers.ScoreBoard;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
      private _backButtonClick():void {
        managers.Game.currentScene = config.Scene.START;
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean(this.assetManager);
        this._instructionLabel = new objects.Label("INSTRUCTIONS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
        this._moveup = new objects.Label("1.Move the tanks to collect coins", "20px", "Consolas", "#FAEFFF", 320, 150, true);
        this._movedown = new objects.Label("2.Avoid missile", "20px", "Consolas", "#FAEFFF", 320, 180, true);
        this._moveleft = new objects.Label("3.Kill Enemies to get extra bonus", "20px", "Consolas", "#FAEFFF", 320, 210, true);
        this._moveright = new objects.Label("4.Score to complete levels", "20px", "Consolas", "#FAEFFF", 320, 240, true);
        this._label1 = new objects.Label("5.Player one is slow moving, No missles harms it", "20px", "Consolas", "#FAEFFF", 320, 270, true);
        this._label2 = new objects.Label("6.Player tw0 is moves fast, missles harms it", "20px", "Consolas", "#FAEFFF", 320, 300, true);

        
        this._backButton = new objects.Button("menuButton", 320, 430);
       
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
        this.addChild(this._instructionLabel);
  
        // add the backButton to the scene
        this.addChild(this._backButton);
  
       

          // add the arrow keys  to the scene
          this.addChild(this._movedown);
          this.addChild(this._moveleft);
          this.addChild(this._moveright);
          this.addChild(this._moveup);
          this.addChild(this._label1);
          this.addChild(this._label2);

      
  
        // event listeners
        this._backButton.on("click", this._backButtonClick);
      }
    }
  }
  