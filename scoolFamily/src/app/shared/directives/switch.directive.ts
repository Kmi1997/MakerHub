import { animate, AnimationBuilder, keyframes, style } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwitch]'
})
export class SwitchDirective {

  constructor(private el: ElementRef) { };

  @HostListener('click') onClick() {
    console.log(this.el.nativeElement.style);

    this.el.nativeElement.animate("5s", keyframes([
      style({ backgroundColor: "red", offset: 0 }),
      style({ backgroundColor: "green", offset: 0.3 }),
      style({ backgroundColor: "red", offset: 0.6 }),
      style({ backgroundColor: "green", offset: 0.9 }),
    ])).play();

  };

};
