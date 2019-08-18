import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting-list',
  templateUrl: './accounting-list.component.html',
  styleUrls: ['./accounting-list.component.scss']
})
export class AccountingListComponent implements OnInit {
  private accountlist:Account[]=[];

  constructor() { }

  ngOnInit() {
    let capital:Account={id:"100001",label:"Capital",class:"Capitaux"};
    let immobilisation:Account={id:"200000",label:"Immobilisation",class:"Immobilisation"};
    let marchandise:Account={id:"300000",label:"Marchandises",class:"Marchandises"};

    this.addAccount(capital);
    this.addAccount(immobilisation);
    this.addAccount(marchandise);
  }

  addAccount(_account:Account){
      this.accountlist.push(_account);
  }

  updateAccount(source:Account,target:Account){
     let accountToUpdateIndex=this.accountlist.indexOf(source);
     this.accountlist[accountToUpdateIndex]=target;
  }
  
  deleteAccount(i){
    console.log(`Deleting Account ${i}`);
  }

  add(){
    let clients:Account={id:"411000",label:"Clients",class:"Tiers"};
    this.addAccount(clients);
  }

  edit(i){
    console.log(`Editing Account ${i}`);
  }

}


interface Account{
  id?:string
  label:string
  class:string
}