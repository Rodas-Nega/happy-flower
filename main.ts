// Created By: Rodas N.
// Created On: Nov 17 2020
// 
// This code runs a program that makes the projectile sprites to fly in random directions from the static flower sprite.
let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . 2 2 2 4 4 4 2 2 2 . . . 
    . . . 2 4 4 4 4 5 4 4 4 4 2 . . 
    . . . 2 4 5 5 5 5 5 5 5 4 2 . . 
    . . . 2 4 4 4 4 5 4 4 4 4 2 . . 
    . . . . 2 2 2 4 4 4 2 2 2 . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . 7 7 . 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . . 7 . 7 7 . . . . 
    . . . . . . . . 7 . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . f 5 1 1 . . . . . . 
        . . . . 5 5 f 1 1 1 f . . . . . 
        . . . 5 f 5 f 5 f 5 f 5 . . . . 
        . . . 5 5 5 f 5 f 5 f 5 f . . . 
        . . . . 5 5 f 5 f 5 f . . . . . 
        . . . . . . f 5 f 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
