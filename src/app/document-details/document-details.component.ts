import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';
import { DocumentItem } from '../model/document-item';
import { WHDocument } from '../model/wh-document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  documentId:number = 0;

  document:WHDocument = new WHDocument();

  articles:Article[]=[];

  items:DocumentItem[] = [];

  newItem = new DocumentItem();

  constructor(private service:DocumentService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:any)=>{
      this.documentId = params['documentId'];
      this.getDocument();
      this.getArticles();
      this.getItems();
      
    })
  }

  getDocument(){

    this.service.getOne(this.documentId).subscribe((document:WHDocument)=> {
      this.document = document;
    })
  }

  getArticles(){
    this.service.getArticles().subscribe((articles:Article[])=>{
    this.articles = articles;
    })
  }

  getItems(){
    this.service.getItems(this.documentId).subscribe((items:DocumentItem[])=>{
      this.items = items;
    })
  }

  codeToArticle(code:string){
    let name = "";
    for(let art of this.articles){
      if(art.code == code){
        name = art.name;
        break;
      }
    }
    return name;
  }

  addItem():void {
    this.newItem._id = this.documentId;

    this.service.postItem(this.documentId, this.newItem).subscribe((addedItem:DocumentItem)=>{
      this.items.push(addedItem);
      this.newItem = new DocumentItem();
    })
  }



}
