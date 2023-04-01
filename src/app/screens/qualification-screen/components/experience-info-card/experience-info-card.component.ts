import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-info-card',
  templateUrl: './experience-info-card.component.html',
  styleUrls: ['./experience-info-card.component.scss']
})
export class ExperienceInfoCardComponent {
  @Input()
  public company!: string;
  @Input()
  public year!: string;
  @Input()
  public work!: string;
}
