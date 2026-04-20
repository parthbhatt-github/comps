import { Component } from '@angular/core';
import { Modal } from '../modal/modal';
import { Divider } from '../../shared/divider/divider';
import { NgIf } from '@angular/common';
import { Accordion } from '../accordion/accordion';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [Modal, Divider ,NgIf , Accordion],
  templateUrl: './mods-home.html',
  styleUrl: './mods-home.css',
})
export class ModsHome {

    modalVisible = false;
    items = [
      { title: 'why sky is blue ?', content: 'sky is blue because of the way light scatters in the atmosphere' },
      { title: 'what does orange taste like ?', content: 'orange tastes like a sweet and juicy fruit' },
      { title: 'what is the capital of France ?', content: 'The capital of France is Paris' },
      { title: 'what is the largest mammal ?', content: 'The largest mammal is the blue whale' }
    ];


   onClick() {
    this.modalVisible = !this.modalVisible;
  }
}
