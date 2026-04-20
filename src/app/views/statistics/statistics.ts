import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  imports: [NgForOf],
  standalone: true,
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {

  @Input() data: {value: number, label: string}[] = [];

}
