import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  @Input()
  public title!: string;
  @Input()
  public subTitle!: string;
}
