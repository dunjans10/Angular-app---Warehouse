import { Component, OnInit } from '@angular/core';
import { WHDocumentList } from 'src/app/model/wh-document-list';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'war-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents:WHDocumentList = new WHDocumentList();

  params = {
    sort:"",
    sortDirection:"",
    page: 1,
    pageSize:5,
  
  }

  
  settings = {
    dateOfCreation:true,
    dateOfRecording:true,
    status:true,
    transactionType:true,
    bussinessPartner:true,
    bussinessPartnerLocation:true,
    year:true

  }
  showSettings = false;

  constructor(private service:DocumentService, private router:Router) { }

  ngOnInit(): void {

    this.getDocuments();
  }

  getDocuments(){
    this.service.getAll(this.params).subscribe((documents:WHDocumentList) => {
      this.documents = documents;
    })
  }

  changeSort(sort:string){
    if(this.params.sort == sort){
      this.params.sortDirection == 'asc' ? 'desc':'asc'
    }else {
      this.params.sort = sort;
      this.params.sortDirection = 'asc';
    }
    this.getDocuments();
  }

  onPageChange(newPage:number){
    this.params.page = newPage;
    this.getDocuments();
  }

  openDocument(documentId:number){
    this.router.navigate(['documents', documentId]);
  }

}
