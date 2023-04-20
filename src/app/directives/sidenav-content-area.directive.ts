import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[sidenavContentArea]'
})
export class SidenavContentAreaDirective {

  viewContainerRef = inject(ViewContainerRef);

}
