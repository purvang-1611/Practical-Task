import { Component } from '@angular/core';
import { StackService } from './stack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontdemo';
  word:string="";
  reslen;
  result;
  constructor(private _stack:StackService){}
  onSearch(){
    console.log(this.word);
    if(this.word!=""){
      this._stack.getdata(this.word).subscribe((data:any)=>{
        this.result=data;
        this.reslen=this.result.length;
      })
    }
    else{
      alert("Enter KeyWord");
    }
    
  }
}
