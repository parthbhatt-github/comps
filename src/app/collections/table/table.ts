import { JsonPipe, NgForOf, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgForOf, NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
@Input('class') classNames: string = '';  @Input() data: any[] = [];
  @Input() headers: { key: string; label: string }[] = [];


}
