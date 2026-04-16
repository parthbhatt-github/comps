import { Component } from '@angular/core';
import { Placeholder } from '../placeholder/placeholder';
import { Divider } from '../../shared/divider/divider';
import { Segment } from '../segment/segment';

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [Placeholder, Divider ,Segment],
  templateUrl: './elements-home.html',
  styleUrl: './elements-home.css',
})
export class ElementsHome {}
