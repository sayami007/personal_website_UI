import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillScreenComponent } from './skill-screen.component';

describe('SkillScreenComponent', () => {
  let component: SkillScreenComponent;
  let fixture: ComponentFixture<SkillScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
