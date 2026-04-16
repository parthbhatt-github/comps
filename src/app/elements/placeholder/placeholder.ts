import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  TimesDirective } from '../times';
@Component({
  selector: 'app-placeholder',
  imports: [NgIf,TimesDirective],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css',
})
export class Placeholder {
  @Input() header = true;
  @Input() lines = 5;
}
