class Prod extends Phaser.Scene {
    constructor() {
        super('Production');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThis will be our production logo and will be animated our name will be FLUX \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('menu');
        });

    }

}




class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThe menu will be next, there will be a button for the game, settings, and credits \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('lv1');
        });

    }


}



const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Prod, Menu],
    title: "Cinematic",
});

