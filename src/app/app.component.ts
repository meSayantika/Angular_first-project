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
  // numbers=[1,2,3,4,5,6,7,8,9,0]
  custList = [
    { id: 1, name: 'Tanmoy Mondal', email: 'mondal.tanmoy@synergicsoftek.com' },
    { id: 2, name: 'Raja Saha', email: 'raja@synergicsoftek.com' },
    { id: 3, name: 'Suvrajit Banerjee', email: 'suvrajit@synergicsoftek.com' },
    { id: 4, name: 'Lokesh Kumar Jha', email: 'lokesh@synergicsoftek.com' },
    {
      id: 5,
      name: 'Chittaranjan Maity',
      email: 'chittaranjan@synergicsoftek.in',
    },
    { id: 6, name: 'Utsav Roy', email: 'utsav@synergicsoftek.com' },
    { id: 7, name: 'Somnath Thakur', email: 'somnath@synergicsoftek.in' },
    { id: 8, name: 'Subham Samanta', email: 'subham@synergicsoftek.in' },
    { id: 9, name: 'Suman Mitra', email: 'suman@synergicsoftek.in' },
    { id: 10, name: 'Sayantika Dhar', email: 'sayantika@synergicsoftek.in' },
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

  show(a: any, b: any) {
    console.log(a, b);
    console.log(a - b);
    if (a == '') {
      this.numchk1 = 'enter 1st number';
    } else if (b == '') {
      this.numchk1 = 'enter 2nd number';
    } else {
      this.bind = a - b;
    }
  }
}
