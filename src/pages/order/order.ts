import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, UrlSerializer } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  uname:string; 
  counter:number=1; 
  branch:string;
  cardamon=false;
  nutmeg=false;
  chocolate=false;
  price=10.0;
  netPrice=0.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
     this.uname=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  purchase():void {
    this.calCost();
  }

  cups(count:number):void{
     this.counter+=count;
  }

  calCost():number{

  this.netPrice=9.99*this.counter;
  
 if(this.chocolate&&this.cardamon&&this.nutmeg){

   this.netPrice=(this.price+5+8+6)*this.counter;
 }
 else if(this.chocolate&&this.cardamon){
  this.netPrice=(this.price+5+8)*this.counter;
 }
 else if(this.chocolate && this.nutmeg){
  this.netPrice=(this.price+8+6)*this.counter;
 }
 else if(this.cardamon&&this.nutmeg){
  this.netPrice=(this.price+5+6)*this.counter;
 }
 else if(this.chocolate){
  this.netPrice=(this.price+8)*this.counter;
 }
 else if(this.cardamon){
  this.netPrice=(this.price+5)*this.counter;
 }
 else if(this.nutmeg){
  this.netPrice=(this.price+6)*this.counter;
 }
 return this.netPrice;
}
showAlert(){
  
  const alert=this.alertCtrl.create({
    title:'Hello '+this.uname+'',
    subTitle:'purchased receipt: '+' Coffee cup(s): '+this.counter+' Total cost '+this.netPrice+'',
    buttons:[{text:'OK',
    handler:data=>{
      this.navCtrl.push(HomePage);
    }
  }]
  });
  alert.present();
}

}
