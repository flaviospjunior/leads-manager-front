import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarLetterComponent } from './avatar-letter.component';

describe('AvatarLetterComponent', () => {
  let component: AvatarLetterComponent;
  let fixture: ComponentFixture<AvatarLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
