import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore'
import { Item } from '../models/Item';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public afs:AngularFirestore) {
    this.itemsCollection = this.afs.collection('/bnf_expiry_writing/tradelog_2019/mylog',ref =>
  ref.orderBy('trade_id','asc'));
    this.items = this.itemsCollection.valueChanges();
 //this.items = this.afs.collection('/bnf_expiry_writing/tradelog_2019/mylog').snapshotChanges();
   }
   getItems(){
     return this.items;
   }
   addItem(item: Item){
     this.itemsCollection.add(item);
   }
}

