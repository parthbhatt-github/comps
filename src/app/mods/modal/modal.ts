import { Component ,ElementRef ,EventEmitter,OnDestroy,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal implements OnInit ,OnDestroy {

  @Output() close = new EventEmitter<void>();

  constructor(private el: ElementRef) {
  }
  

  ngOnInit() : void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
 
}
