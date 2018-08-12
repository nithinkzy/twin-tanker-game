module objects {
    export class HelpPage extends createjs.Bitmap {
        // Private Instance Variables

        // Public Properties

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number= 0, y:number = 0 ) {
            super(assetManager.getResult(imageString));

            //this.regX = this.getBounds().width * 0.5;
           // this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;

            
        }
   
    }
}