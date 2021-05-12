import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GridComponent } from './grid.component';

fdescribe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two rows', () => {
    component.data = [{ title: 'tometo' }, { title: 'potatoes' }];
    component.columnsSettings = [{ key: 'title' }];
    let tpl: DebugElement = fixture.debugElement;
    fixture.detectChanges();
    const rows = tpl.queryAll(By.css('table tbody tr'));
    console.log("***", rows.length);
    expect(rows.length).toBe(2);
  })
  it('should render two rows & 3 cols', () => {
    component.data = [{ title: 'tometo', price: 10 }, { title: 'potatoes', price: 20 }];
    component.columnsSettings = [{ key: 'title' }, { key: 'price' }];
    let tpl: DebugElement = fixture.debugElement;
    fixture.detectChanges();
    const row1 = tpl.query(By.css('table tbody tr'));
    const xx = row1.queryAll(By.css('td'));
    console.log("***", xx.length);
    expect(xx.length).toBe(3);
  })
});
