import { Component, OnInit } from '@angular/core';
import {fruits, vegetables, dairy, biscuits } from '../items'
import { JsonPipe } from '../../../node_modules/@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 data;
  constructor() { }

  ngOnInit() {
    //console.log(fruits,vegetables,dairy,biscuits,"saurabh");
    console.log(JSON.parse(localStorage.getItem("Fruits")));
    this.data =JSON.parse(localStorage.getItem("Fruits"))
    
   this.displayall();
  }
  

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
   }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  
    document.body.style.backgroundColor = "white";
 }

  homeandliving(){
    localStorage.setItem("Fruits",JSON.stringify(fruits));
    console.log(fruits,"fruits");
  }
  
  displayall(){
    var tablee="<tr><th> Name </th><th> Category </th><th> MRP </th><th> Quantity </th></tr>";
    
   
  }

}
