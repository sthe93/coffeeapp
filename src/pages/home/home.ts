import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {}
 
  uname:string;

  goToPage(name){
    this.uname=name;
    this.navCtrl.push(OrderPage,{
      data:this.uname
    })

  }

  presentPrompt(){ 
    let alert=this.alertCtrl.create({
      title:'Login to place order',
      inputs:[{
          name:'name',
          type:'text',
          placeholder:'Enter your name'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log('Cancel clicked');
          }
        },{
          text:'Login',
          handler:data=>{
              this.goToPage(data.name);
          }
        },
      ]
    });
    alert.present();
  }
}