module scenes {
    export class LevelOne extends objects.Scene {
      // Private Instance Variables
      private _ocean: objects.Ocean;
      private _plane: objects.Plane;
      private _tankeOne: objects.tankOne;
      private _island: objects.Island;
      private _clouds: objects.Cloud[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
      private _bulletManager: managers.Bullet;
    
      private _engineSound: createjs.AbstractSoundInstance;
      private _coin: objects.Coin;
      private _enemy: objects.Enemy;
      private _boss: objects.Boss;
      private _overLabel: objects.Label;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean(1);
        this._plane = new objects.Plane();
        managers.Game.plane = this._plane;
  
        this._tankeOne = new objects.tankOne();
        managers.Game.tank2 = this._tankeOne;
       
  
        // make a reference to the bullet manager in the game manager
        this._bulletManager = new managers.Bullet();
        managers.Game.bulletManger = this._bulletManager;
  
        // create an enemy object
        this._enemy = new objects.Enemy();
        this._boss = new objects.Boss();
  
        this._coin = new objects.Coin();
        this._island = new objects.Island();
  
        // instantiate the cloud array
        this._clouds = new Array<objects.Cloud>();
        this._cloudNum = 2;
        // loop and add each cloud to the array
        for (let count = 0; count < this._cloudNum; count++) {
          this._clouds[count] = new objects.Cloud();
        }
  
        this._engineSound = createjs.Sound.play("engine");
        this._engineSound.loop = -1; // play forever
        this._engineSound.volume = 0.1;
  
        // create the scoreboard UI for the Scene
        this._scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = this._scoreBoard;
  
        this.Main();
      }
  
      // triggered every frame
      public Update(): void {
        //console.log("Num Objects: " + this.numChildren);
        // if((managers.Game.HighScore >= 200)&& (managers.Game.HighScore <= 300)){
        //     this._engineSound.stop();
        //     managers.Game.currentScene = config.Scene.NEXTLEVEL;
         // }
        this._ocean.Update();
        this._plane.Update();
        this._tankeOne.Update();
  
        this._enemy.Update();
        this._boss.Update();
  
        this._bulletManager.Update();
  
        this._coin.x = this._island.x;
        this._coin.y = this._island.y;
        this._coin.Update();
  
        this._island.Update();
  
        // check collision between tank 1 and coin
        managers.Collision.Check(this._plane, this._coin);

        // check collision between tank 2 and coin
        managers.Collision.Check(this._tankeOne, this._coin);
  
        this._clouds.forEach(cloud => {
          cloud.Update();
          // check collision between plane and current cloud
          managers.Collision.Check(this._plane, cloud);
            // check collision between tank 2  and current cloud
          // managers.Collision.Check(this._tankeOne, cloud);
        });
      
  
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._enemy);
        });

        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(bullet, this._boss);
        });

       
  
        // if lives fall below zero switch scenes to the game over scene
        if(this._scoreBoard.Lives <= 0) {
          this._engineSound.stop();
          managers.Game.currentScene = config.Scene.OVER;
        }
        if(this._scoreBoard.Score>200)
        {
          this._overLabel = new objects.Label("Boss coming !", "40px", "Dock51", "#FF6347", 320, 60, true);
          this._engineSound = createjs.Sound.play("bossEntry");
          this.addChild(this._overLabel);
          this.addChild(this._boss);
        }
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the ocean to the scene
        this.addChild(this._ocean);
  
        // add the island to the scene
        this.addChild(this._island);
  
        // add the coin to the scene
        this.addChild(this._coin);
        this.addChild(this._tankeOne);
        // add the plane to the scene
        this.addChild(this._plane);
        this.addChild(this._plane.planeFlash); // add the plane flashing effect
  
        // add the enemy plane to the scene
        this.addChild(this._enemy);
       
        

  
        // add the bullets to the scene
        this._bulletManager.Bullets.forEach(bullet => {
          this.addChild(bullet);
        });
  
        // add clouds to the scene
  
        this._clouds.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add scoreboard labels to the scene
        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
      }
    }
  }
  