import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
list:any[]=
[
  'math',
  'programing', 
  'English',
  'Physics',
  'Biology', 
  'Astronomy',
  'Data Structures',
  'Algorithms', 
  'Artificial Intelligence',
  'Economics',
  'Spanish', 
  'Arabic',
  'French',
 
]
listActive:any[]=[];
itemSearch:any;
showList:boolean=false
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
      if(element.toLowerCase().includes(item)){  
        this.listActive.push(element)
      }else if(element.includes(item)){
        this.listActive.push(element)
      }
    });
  }
  }
}
