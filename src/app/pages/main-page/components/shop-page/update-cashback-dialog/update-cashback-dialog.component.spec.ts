import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCashbackDialogComponent } from './update-cashback-dialog.component';

describe('UpdateCashbackDialogComponent', () => {
  let component: UpdateCashbackDialogComponent;
  let fixture: ComponentFixture<UpdateCashbackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCashbackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCashbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
