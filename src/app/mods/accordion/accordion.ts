import { NgClass, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [NgForOf, NgClass],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  @Input() items: { title: string; content: string }[] = [];
  openItemIndex: number = 0;

  onClick(index: number) {
    if (this.openItemIndex === index) {
      this.openItemIndex = -1;
    }else{
    this.openItemIndex = index;
    }
  }
}
