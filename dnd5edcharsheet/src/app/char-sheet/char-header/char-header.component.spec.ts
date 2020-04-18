import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharHeaderComponent } from './char-header.component';

describe('CharHeaderComponent', () => {
  let component: CharHeaderComponent;
  let fixture: ComponentFixture<CharHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
