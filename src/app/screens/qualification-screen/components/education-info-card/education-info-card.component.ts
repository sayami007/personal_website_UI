import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-info-card',
  templateUrl: './education-info-card.component.html',
  styleUrls: ['./education-info-card.component.scss']
})
export class EducationInfoCardComponent {
  @Input()
  public degree!: string;
  @Input()
  public university!: string;
  @Input()
  public year!: string;
  @Input()
  public major!: string;
}
