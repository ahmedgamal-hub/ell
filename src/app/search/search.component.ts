import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

list:any[]=
[
  {
    id:1,
    name:'mathematics',
  },
  {
    id:2,
    name:'programing', 
  },
  {
    id:3,
    name:'English',
  },
  {
    id:4,
    name: 'Physics',
  },
  {
    id:5,
    name:'Biology', 
  },
  {
    id:6,
    name:'Astronomy',
  },
  {
    id:7,
    name:'Data Structures',
  },
  {
    id:8,
    name: 'Algorithms', 
  },
  {
    id:9,
    name: 'Artificial Intelligence',
  },
  {
    id:10,
    name: 'Economics',
  },
  {
    id:11,
    name:'Spanish', 
  },
  {
    id:12,
    name:'Arabic',
  },
  {
    id:13,
    name:'French',
  },
 
]
listActive:any[]=[];
itemSearch:any;
showList:boolean=false
constructor(
   private _Router:Router,
   ) { }
  ngOnInit() {
    
    
  }
  print(item:any){
    if(item==''){
      this.showList=false
    }
    this.listActive=[]
    if(item!=''){
    this.showList=true
    console.log(item);
    this.list.forEach((element:any) => { 
      if(element.name.toLowerCase().includes(item)){  
        this.listActive.push(element)
        
      }else if(element.name.includes(item)){
        this.listActive.push(element)
      }
    });
  }
  }
  routeToList(course:any){
    console.log(course);
    
    if(course.id == 1){
      this._Router.navigate([`/courses/${course.name}`]);
      
    } else  if(course.id == 2){
      console.log("foubd");
      
    } else  if(course.id == 3){
      console.log("foubd");
      
    }
    else{
      this._Router.navigate(['/soon']);
      
    }
    
  }
}
