import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExternalComponent } from './external.component';

describe('ExternalComponent', () => {
    let component: ExternalComponent;
    let fixture: ComponentFixture<ExternalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ExternalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExternalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
