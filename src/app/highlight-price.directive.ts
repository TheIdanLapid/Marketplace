import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]'
})
export class HighlightPriceDirective implements OnInit {

  @Input() color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

  ngOnInit(): void {

  }
}
