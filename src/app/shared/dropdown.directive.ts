import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  dropdownToggle: boolean = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   this.dropdownToggle = this.elRef.nativeElement.contains(event.target) ? !this.dropdownToggle : false;
  // }

  @HostListener('click') click(eventData: Event){
    if (!this.dropdownToggle) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.dropdownToggle = true;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownToggle = false;
    }

  }

}
