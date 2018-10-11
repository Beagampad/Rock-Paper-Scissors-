import { Component, OnInit } from '@angular/core';
import { RemoteplayerService } from '../remoteplayer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {

  scores = [0 , 0]; // 0 - you, index 1 - enemy.
  playerSelected = -1;// rock 0, paper 1, scissors 2
  enemySelected  = -1;
  result = null; 
  local = true;
  remotenumber: IRandom[] = [];
  
  constructor(private RemoteplayerService: RemoteplayerService) { }

  ngOnInit() {
  }
// Choose the way of game, local or remote
  choose( option: number) {
    this.playerSelected = option;
    const randomNum =  Math.floor(Math.random() * 3 ) ;//local random number 0 -2 
    if(this.local){
      this.enemySelected = randomNum;
      this.compare();
    }else{
       this.getRandomNumber();
    }
  }
 
  //  0 win
  //  1 lose
  //  2 tie
  // Compare the result
  compare(): void {

   //  TIE
    if( this.playerSelected ==  this.enemySelected){
     this.result = 2;
   }
     else if((this.playerSelected - this.enemySelected + 3)% 3 == 1){// YOU WIN
       
       this.result = 0;
       this.scores[0] = this.scores[0]+1;
     }
     else{ // YOU LOSE
      
       this.result = 1;
         this.scores[1] = this.scores[1]+1;
     }
  }
  // Reset scores
  reset(): void {
    this.scores = [0,0];
   }
//Change player, local or remote
   changeplayer(): void{

    this.playerSelected = -1;
    this.enemySelected = -1;
    this.result = null;
    this.reset();

    if(this.local){
      this.local = false;
    }else{
      this.local = true;
    }
   }
// Get a remote random number and compare the result
   getRandomNumber(){
    this.RemoteplayerService.getRandomNumber()
      .subscribe(remotenumber => {this.remotenumber = remotenumber.result
        this.enemySelected = remotenumber.result;
        this.compare();
      });
  }

}

interface IRandom {
  result: number;
}
