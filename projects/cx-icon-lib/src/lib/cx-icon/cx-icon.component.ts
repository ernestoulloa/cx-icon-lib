import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional} from '@angular/core';
import {cxIcon} from "../../../icons";
import {CxIconRegistryService} from "../cx-icon-registry.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'lib-cx-icon',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./cx-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CxIconComponent {
  private svgIcon: SVGElement | undefined;

  @Input()
  set name(iconName: cxIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.cxIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(private element: ElementRef,
              private cxIconRegistry: CxIconRegistryService,
              @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
