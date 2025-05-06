import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUFComponent } from './dropdown-uf.component';

describe('DropdownUFComponent', () => {
  let component: DropdownUFComponent;
  let fixture: ComponentFixture<DropdownUFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DropdownUFComponent]
    });
    fixture = TestBed.createComponent(DropdownUFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
