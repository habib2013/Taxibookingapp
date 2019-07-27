import { Component, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthserviceService } from './services/authservice.service';
import { ControlService } from './services/control.service';
import { ProfileService } from './services/profile.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  msgVal: string = '';
  pages: any;
  username: any;
  canHide: boolean = false;
  isAllowed: boolean = false;
  line: boolean = false;
  isDarkTheme: boolean = true;
  constructor(public afAuth: AngularFireAuth, public zone: NgZone, public dialog: MatDialog, public auth: AuthserviceService, private ph:ProfileService, public ctrl: ControlService, public router: Router, public af: AngularFireDatabase) {
    //localStorage.removeItem('firebase:previous_websocket_failure');
        this.router.navigateByUrl('').then(sucess =>{
          
        })
     
    
    
 this.pages = [
  {name: 'Dashboard', url: 'home', icon: 'fas fa-home'},
  {name: 'Cartypes & Radius', url: 'cartype', icon: 'fas fa-fw fa-car'},
  //{name: 'Price Changer', url: 'changeprice', icon: 'fas fa-money-check'},
  //{name: 'App Name', url: 'appname', icon: 'fas fa-pen'}, 
  {name: 'Payment & Currency', url: 'appcurrency', icon: 'fas fa-dollar'},
 // {name: 'Country Code & Language', url: 'countrycode', icon: 'fas fa-flag'},
  //{name: 'Phone Number', url: 'phonenumber', icon: 'fas fa-tablet'},
  //{name: 'Push Notification & URL', url: 'website', icon: 'fas fa-fw fa-bullhorn'},
  {name: 'FAQ & Email Notification', url: 'faq', icon: 'fas fa-fw fa-envelope'}, 
  {name: 'Careers', url: 'careers', icon: 'fas fa-fw fa-suitcase'},
  //{name: 'Terms & conditions', url: 'termsandservices', icon: 'fas fa fa-drivers-license '},
  {name: 'Social', url: 'instagram', icon: 'fas fa-video-camera'}, 
 // {name: 'Features and Password', url: 'change_code', icon: 'fas fa-unlock-alt'},
  
 ]
  }

  ngOnInit() {
    if (window.screen.width <= 720)
     this.line = true

     this.ph.getDashboardProfile().on('value', snapshot => {
      this.username = snapshot.val().username;
    });
  }

  check(){
    this.canHide = this.canHide ? false : true
  }

  light(){
    this.isDarkTheme = false;
  }

  changeColor(){
    this.isDarkTheme = this.isDarkTheme ? false : true
  }


onResize(event) {
  this.line = (event.target.innerWidth <= 720) ? true : false;
  this.canHide = (event.target.innerWidth <= 720) ? true : false;
}


Pop(): void {
  this.ctrl.name = 'sdgtobjwfbsfiweierihwehhieihuwehiewiuhwethiihweihuewtihwutehiuetiuht'
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
    });
 };


  hideBar(){
    console.log("can go home")
    this.ctrl.sidemenu_toggle = false
  }
  
  sideNav(){
    this.ctrl.canShowNav = false;
  }
  
  
  openChange(){
    this.zone.run(()=>{
      this.router.navigateByUrl('change_code').then(sucess =>{ 
    
      })
    })
    
  }

  goHome(){
    this.zone.run(()=>{
    this.router.navigateByUrl('home').then(sucess =>{ 
  
    })
  })
  
}

gotoPush(){
  this.zone.run(()=>{
  this.router.navigateByUrl('website').then(sucess =>{ 

  })
})

}
gotoapp(){
  this.zone.run(()=>{
  this.router.navigateByUrl('appname').then(sucess =>{ 

  })
})

}
gotocountry(){
  this.zone.run(()=>{
  this.router.navigateByUrl('countrycode').then(sucess =>{ 

  })
})

}

gototerms(){
  this.zone.run(()=>{
  this.router.navigateByUrl('termsandservices').then(sucess =>{ 

  })
})

}

gotofeature(){
  this.zone.run(()=>{
  this.router.navigateByUrl('change_code').then(sucess =>{ 

  })
})

}

gotoPrice(){
  this.zone.run(()=>{
  this.router.navigateByUrl('changeprice').then(sucess =>{ 

  })
})

}

  
  gotoPage(page){
    this.zone.run(()=>{
    this.router.navigateByUrl(page).then(sucess =>{ 
      // document.getElementById("container").style.color = "red";
    })
  })
  }
  
  logOut(){
    this.auth.logout()
  }

}
