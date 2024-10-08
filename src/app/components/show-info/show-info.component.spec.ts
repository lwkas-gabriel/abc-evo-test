import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoComponent } from './show-info.component';

describe('ShowInfoComponent', () => {
  let component: ShowInfoComponent;
  let fixture: ComponentFixture<ShowInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
