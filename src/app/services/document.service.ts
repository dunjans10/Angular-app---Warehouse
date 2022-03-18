import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WHDocumentList } from '../model/wh-document-list';
import { WHDocument } from '../model/wh-document';
import { Article } from '../model/article';
import { DocumentItem } from '../model/document-item';

const baseURL = 'http://localhost:3000/api/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }

  getAll(params?:any):Observable <WHDocumentList> {

    let queryParams = {}
    if(params){
      queryParams = {
        params:new HttpParams()
        .set('sort', params.sort || "")
        .set('sortDirection', params.sortDirection || "")
        .set('page', params.page || "")
        .set('pageSize', params.pageSize || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map ((data:any) => {
      return new WHDocumentList(data);
    }))
  }

  getOne(documentId:number):Observable <WHDocument> {
    
    return this.http.get(`${baseURL}/${documentId}`).pipe(map((data:any)=>{
      return new WHDocument(data);
    }))
  }

  getArticles():Observable<Article[]> {
    return this.http.get('http://localhost:3000/api/articles').pipe(map((data:any)=>{
      return data.results && data.results.map((x:any)=>new Article(x)) || [];
    }))
  }

  getItems(documentId:number):Observable<DocumentItem[]>{
    return this.http.get(`${baseURL}/${documentId}/items`).pipe(map((data:any)=>{
      return data.results && data.results.map((x:any) => new DocumentItem(x)) || [];
    }))
  }

  postItem(documentId:number, item:DocumentItem):Observable<DocumentItem>{
    return this.http.post(`${baseURL}/${documentId}/items`, item).pipe(map((data:any)=>{
      return new DocumentItem(data);
    }))
  }



}
