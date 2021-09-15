import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExternalComponent } from './header-external.component';

describe('HeaderExternalComponent', () => {
  let component: HeaderExternalComponent;
  let fixture: ComponentFixture<HeaderExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
