import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }

  @ViewChild('game')
  private _tetris: TetrisCoreComponent = undefined as any;
  public plantImage: string = 'assets/plant.png'; 
  public treeImage: string = 'assets/tree.png';
  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;
  public currentScore: number = 0;
  public treeImages: Array<any> = [];
  isMuted: boolean = false;
  startMessageVisible = true;
  public treeDisplayed: boolean = false; 


  hideStartMessage() {
    this.startMessageVisible = false;
  }
  toggleMute() {
    const gameMusic = document.getElementById('gameMusic') as HTMLAudioElement;
    const gameMusic2 = document.getElementById('gameMusic2') as HTMLAudioElement;

    if (gameMusic && gameMusic2) {
      this.isMuted = !this.isMuted;

      gameMusic.muted = this.isMuted;
      gameMusic2.muted = this.isMuted;
    }
  }
  updateScore(newScore: number){
    if (newScore >= this.currentScore) {
      const increment = newScore - this.currentScore;

      if (newScore === 0) {
          this.treeImages = []; 
      } else {
          for (let i = 0; i < increment; i++) {
              this.treeImages.push(this.treeImage); 
          }
      }

      this.currentScore = newScore;
  }
  }
  onLineCleared() {
  
    console.log('line cleared');

  }
  
 
  public onGameOver() {
      alert('game over');
      this._tetris.actionReset();
      this.resetGame(); 



  }
 
  public resetGame() {
    this.currentScore = 0; 
    this.treeImages = []; 
}
  public onRotateButtonPressed() {
      this._tetris.actionRotate();
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this._tetris.actionLeft();
        break;
      case 'ArrowRight':
        this._tetris.actionRight();
        break;
      case 'ArrowUp':
        this._tetris.actionRotate();
        break;
      case 'ArrowDown':
        this._tetris.actionDown();
        break;
        case ' ': 
        if (this.startMessageVisible) {
          this.hideStartMessage();
          if (this._tetris) {
            this._tetris.actionStart();
          }
        }
        
        break;
      case 'p': 
        this._tetris.actionStop();
        break;
      case 'r': 
        this._tetris.actionReset();
        this.resetGame(); 

        break;
        case 'd': 
        this._tetris.actionDrop();
        break;

    }
  }


}
