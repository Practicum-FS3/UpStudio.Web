// import { Component } from '@angular/core';
// import {DataService} from '../../services/data.service'
// import { Customer } from '../../modules/Customer ';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-editing-files',
//   standalone: true,
//   imports: [FormsModule,
//     CommonModule],
//   templateUrl: './editing-files.component.html',
//   styleUrl: './editing-files.component.scss'
// })
// export class EditingFilesComponent {

//   allCustomers=new Array<Customer>()
//   currentCustomer!: Customer;
//   toedit:boolean=true
  
//   constructor(private dataService: DataService ){
//     this.dataService.getAll().subscribe(data=>{
//         this.allCustomers=data
//         console.log(this.allCustomers);
//        })

//        this.dataService.getCustByID().subscribe(data=>{
//         this.currentCustomer=data

//        })

      
      
       
//   }
//   edit(){
//     this.toedit=false
//   }

//   // getAllCust(){
//   //  this.dataService.getAll().subscribe(data=>{
//   //   this.allCustomers=data
//   //   return this.allCustomers
//   //  })
//   // }

// }


import { Component, Input } from '@angular/core';
import {DataService} from '../../services/data.service'
import { Customer } from '../../modules/Customer ';
import { CustomerType } from '../../modules/CustomerType ';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-editing-files',
  standalone: true,
  imports: [FormsModule,
    AutoCompleteModule,
    TabViewModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    RadioButtonModule],
    templateUrl: './editing-files.component.html',
    styleUrl: './editing-files.component.scss'
})
export class EditingFilesComponent {
  // value: string = "ghjk"
  myForm: FormGroup
  toedit: boolean = true;
  currentCustomer!: Customer;
  arrCustType!: CustomerType[]; 
  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' }, { label: 'Return', value: 'return' }];
  @Input() set custId(custId: number) {
  }
  constructor(private dataService: DataService ) {
    // if (this.custId) {//במידה וקיבלתי id
    //   this.dataService.getCust(this.custId);עקרונית זה אמור להיות כאן ולא ב else לזכור לשנות!
    //   this.toedit = false;
    // } else {
    //   this.toedit = true;
    //    this.getCust(this.custId);
    // }
    this.myForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      customerTypeId: new FormControl(''),
      hmoId: new FormControl(),
      paymentOptionId: new FormControl(''),
      subscriptionTypeId: new FormControl(''),
      isActive: new FormControl(true),
      tel: new FormControl(''),
      address: new FormControl(''),
      // email: new FormControl(''),
      selectedCategory: new FormControl('')
    })

    this.dataService.getCustByID().subscribe(data=>{
      this.currentCustomer=data
     })
     this.dataService.getAllCustType().subscribe(data=>{
      this.arrCustType=data
      console.log( 'this.arrCustType');
      console.log( this.arrCustType);
      
     })
  }

 
 
  edit() {
    this.toedit = false;
  }
  saveChanges() {
    const { controls } = this.myForm
    let cust: Customer = new Customer(
      controls['firstName'].value,
      controls['lastName'].value,
      controls['customerTypeId'].value,
      controls['hmoId'].value,
      controls['paymentOptionId'].value,
      controls['subscriptionTypeId'].value,
      controls['isActive'].value,
      controls['tel'].value,
      controls['address'].value,
      // controls['email'].value
    )
    console.log(cust);
    console.log(this.currentCustomer.id);
    console.log('dfghjk');
    console.log(this.custId );

    
    if (this.currentCustomer !== undefined) {
      cust.id=this.currentCustomer?.id
      this.dataService.updateCustByID(cust).subscribe(data => {
        console.log({ data });
        this.myForm.reset()
      })
    }
    else {
      // this.customerService.addCustomer(cust).subscribe(data => {
      //   console.log({ data });
      //   this.myForm.reset()
      // })
    }
  }
  categories: any[] = [
    { name: 'פעיל', key: 'A' },
    { name: 'לא פעיל', key: 'M' }
  ];
}

