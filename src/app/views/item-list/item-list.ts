import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [NgForOf],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  @Input() itemData:{ image: string; title: string; description: string; }[] = [];
}
