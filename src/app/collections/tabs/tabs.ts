import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule, NgForOf],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {

  @Input() tablists: { label: string; path: string; exact?: boolean }[] = [];


}
