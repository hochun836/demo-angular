import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-demo3',
  templateUrl: './cdk-demo3.component.html',
  styleUrls: ['./cdk-demo3.component.scss']
})
export class CdkDemo3Component implements OnInit {

  movies = [
    { no: 1, name: 'Episode I - The Phantom Menace' },
    { no: 2, name: 'Episode II - Attack of the Clones' },
    { no: 3, name: 'Episode III - Revenge of the Sith' },
    { no: 4, name: 'Episode IV - A New Hope' },
    { no: 5, name: 'Episode V - The Empire Strikes Back' },
    { no: 6, name: 'Episode VI - Return of the Jedi' },
    { no: 7, name: 'Episode VII - The Force Awakens' },
    { no: 8, name: 'Episode VIII - The Last Jedi' },
    { no: 9, name: 'Episode IX – The Rise of Skywalker' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }
}
