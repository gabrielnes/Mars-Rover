//rover

const rover = {
    x : 0,
    y : 0,
    direction : 'N',
    travelLog : [{x:0,y:0}]
  }

//left turn

  function turnLeft(rover){
    
    switch(rover.direction){
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            over.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log("Left turn. \n\nNow facing: " + rover.direction);
  }
  
//right turn

  function turnRight(rover){

    switch(rover.direction){
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
    console.log("Right turn. \n\nNow facing: " + rover.direction);
  }
  
// move forward

  function moveForward(rover){
    
    switch (rover.direction){
        case 'N':
            if (rover.x - 1 >= 0){
                rover.x--;
            } 
            else{
                console.log("Your rover reached the boundary");
            }
            break;

        case 'E':
            if (rover.y + 1 <= 10){
                rover.y++;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;
        
        case 'S':
            if (rover.x + 1 <= 10){
                rover.x++;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;

        case 'W':
            if (rover.y - 1 >= 0){
                rover.y--;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;
    }

    let currentCoord = {x: rover.x, y:rover.y};
    rover.travelLog.push(currentCoord);

    console.log("Advanced to: " + rover.x + ", " + rover.y);
  }

// move backward

function moveBackward(rover){
    
    switch (rover.direction){
        case 'N':
            if (rover.x + 1 <= 10){
                rover.x++;
            } 
            else{
                console.log("Your rover reached the boundary");
            }
            break;

        case 'E':
            if (rover.y - 1 >= 0){
                rover.y--;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;

        case 'S':
            if (rover.x - 1 >= 0){
                rover.x--;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;

        case 'W':
            if (rover.y + 1 <= 10){
                rover.y++;
            }
            else{
                console.log("Your rover reached the boundary");
            }
            break;
    }

    let currentCoord = {x: rover.x, y:rover.y};
    rover.travelLog.push(currentCoord);

    console.log("Backed up to: " + rover.x + ", " + rover.y);
  }

// commands

  function commands(commandList){

    for (let i = 0; i < commandList.length; i++){

        switch (commandList[i]){
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            case 'f':
                moveForward(rover);
                break; 
            case 'b':
                moveBackward(rover);
                break;  
            default:
                console.log("The commands you typed are not acceptable. \n\nUse one of the following commands: \n'r' for right \n'l' for left \n'f' for forward"); 
        }
    }
    console.log(rover.travelLog);
  }

commands('rfffrffflffrffffrffff');