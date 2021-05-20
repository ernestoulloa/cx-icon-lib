import {Injectable} from '@angular/core';
import {CxIcon} from "./cx-icon.model";

@Injectable({
  providedIn: 'root'
})
export class CxIconRegistryService {

  private registry = new Map<string, string>();

  public registerIcons(icons: CxIcon[]): void {
    icons.forEach((icon: CxIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
