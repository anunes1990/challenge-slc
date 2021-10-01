import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTagsComponent } from './info-tags.component';

describe('InfoTagsComponent', () => {
  let component: InfoTagsComponent;
  let fixture: ComponentFixture<InfoTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
