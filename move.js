// First we have to make a function for move that can target any element we want but we just put element in there. We make sure that the element is fixed then we move on to the nested function inside to define its left and bottom coordinates this is for the items and objects like the trees.
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
// Now down here is where we add the function for moving the character. Since we have to use arrow keys and we want the character to move across the screen we need to ad an if statement for their directions as well as making its normal direction null
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        //This just make the character move 1 px at a time
        setInterval(moveCharacter, 1)
        // This is waiting for a button to be pressed and when the button presses it will run the function over and over again until the key up function runs when I lift the key
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
// you have to put return down here or else they arent in the right scope and wont effect what you what it to.
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}