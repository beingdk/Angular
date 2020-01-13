import { Component, OnInit } from '@angular/core';
import{ ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
item: Item = {
  trade_id:'',
     trade_date: '',
     start_cap: '',
     ledger_cap:''
}
counts: Item[];
totalTrades;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(count=>{
      this.counts = count;
      this.totalTrades = this.counts.length;
    });
  }
onSubmit(){
  if(this.item.trade_id != '' 
  && this.item.trade_date !=''
  && this.item.start_cap !=''
  && this.item.ledger_cap !=''){
    this.itemService.addItem(this.item);

   this.item.trade_id = '';
   this.item.trade_date ='';
   this.item.start_cap ='';
   this.item.ledger_cap ='';
  }
}
}
