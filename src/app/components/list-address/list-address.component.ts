import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAllAddreses();
  }
 
  getAllAddreses(){
this.addressService.getAll().subscribe(( res: Address[])  =>  this.addresses = res);

  
  }
}
