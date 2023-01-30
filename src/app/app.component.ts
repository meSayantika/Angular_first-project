import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'sampleProj';
  bind: any;
  txt = '';
  numchk1: any;
  show: any;
  
  // numbers=[1,2,3,4,5,6,7,8,9,0]
  custList = [
    { id: 1, name: 'Tanmoy Mondal', email: 'mondal.tanmoy@synergicsoftek.com', age:44 },
    { id: 2, name: 'Raja Saha', email: 'raja@synergicsoftek.com' , age:43 },
    { id: 3, name: 'Suvrajit Banerjee', email: 'suvrajit@synergicsoftek.com' , age:42 },
    { id: 4, name: 'Lokesh Kumar Jha', email: 'lokesh@synergicsoftek.com' , age:36 },
    {
      id: 5,
      name: 'Chittaranjan Maity',
      email: 'chittaranjan@synergicsoftek.in', age:56
    },
    { id: 6, name: 'Utsav Roy', email: 'utsav@synergicsoftek.com' , age:-86 },
    { id: 7, name: 'Somnath Thakur', email: 'somnath@synergicsoftek.in' , age:87 },
    { id: 8, name: 'Subham Samanta', email: 'subham@synergicsoftek.in' , age:2 },
    { id: 9, name: 'Suman Mitra', email: 'suman@synergicsoftek.in', age:-32 },
    { id: 10, name: 'Sayantika Dhar', email: 'sayantika@synergicsoftek.in', age:0 },
  ];

  // show(val:any){
  //   if(val==""){
  //     this.bind="Enter something here";
  //   }else{
  //     this.bind=val
  //   }

  // }
  // ngOnInit(){
  //   console.log(this.title);
  // }
  // view(){
  //   console.log('hello')
  // }

//   show(a: any, b: any) {
//     console.log(a, b);
//     console.log(a - b);
//     if (a == '') {
//       this.numchk1 = 'enter 1st number';
//     } else if (b == '') {
//       this.numchk1 = 'enter 2nd number';
//     } else {
//       this.bind = a - b;
//     }
//   }
edit(dt:any){
console.log(dt);
let index= this.custList.findIndex((cust:any)=>cust.id==dt)
console.log(this.custList[index]);
this.show = (this.custList[index])

}

}