import type { Type as Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { SidenavContentAreaDirective } from '../directives/sidenav-content-area.directive';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  // Used Properties
  #contentArea?: SidenavContentAreaDirective;
  #stack = [] as Component<unknown>[];

  isSlidingInFromTheRight = false;
  isSlidingInFromTheLeft = false;

  isExpanded = false;

  readonly sidenavMinWidth = 250;
  readonly sidenavMaxWidth = window.innerWidth - 300;

  // Sidenav Resizing Feature
  get sidenavWidth(): number {
    return parseInt(getComputedStyle(document.body).getPropertyValue('--sidenav-width'), 10);
  }

  setSidenavWidth(width: number) {
    const clampedWidth = Math.min(
      Math.max(width, this.sidenavMinWidth),
      this.sidenavMaxWidth
    );
    document.body.style.setProperty('--sidenav-width', clampedWidth + 'px');
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidenav() {
    this.isExpanded = true;
  }

  collapseSidenav() {
    this.isExpanded = false;
  }

  // Dinamic Sidenav Content
  setDynamicContentArea(host: SidenavContentAreaDirective) {
    this.#contentArea = host;
  }

  #setContent(component: Component<unknown>): void {
    this.#contentArea?.viewContainerRef.clear();
    this.#contentArea?.viewContainerRef.createComponent(component);
  }

  get #lastStackItem(): Component<unknown> {
    return this.#stack[this.#stack.length - 1];
  }

  async push(component: Component<unknown>): Promise<void> {
    this.#stack.push(component);
    this.#setContent(component);
    await this.#animateInFromTheRight();
  }

  async pop(): Promise<void> {
    if (this.#stack.length === 1) return;
    this.#stack.pop();
    this.#setContent(this.#lastStackItem);
    await this.#animateInFromTheLeft();
  }

  // Sidenav Content Transition
  get sidenavTransitionDuration(): number {
    const sidenavTransitionDurationFromCssVariable = getComputedStyle(document.body)
      .getPropertyValue('--sidenav-transition-duration');
    return parseFloat(sidenavTransitionDurationFromCssVariable.slice(0, -1));
  }

  async #sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
  }

  async #animateInFromTheLeft() {
    this.isSlidingInFromTheLeft = true;
    await this.#sleep(this.sidenavTransitionDuration);
    this.isSlidingInFromTheLeft = false;
  }

  async #animateInFromTheRight() {
    this.isSlidingInFromTheRight = true;
    await this.#sleep(this.sidenavTransitionDuration);
    this.isSlidingInFromTheRight = false;
  }
}
