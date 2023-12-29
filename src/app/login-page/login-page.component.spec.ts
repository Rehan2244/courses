import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ToastrModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to login', () => {
    component.password='dummy@123'
    expect(component.password).toBe('dummy@123');
  });

  it('should be able to login', () => {
    component.password='dummy@123'
    component.email='dummy@email.com'
    component.loginNow()
    component.email='ummy@email.com'
    component.loginNow()
  });
  it('checks for wrong password',()=>{
    component.email='dummy@email.com'
    component.password='ummy@asd.com'
    component.loginNow()
  })
});
