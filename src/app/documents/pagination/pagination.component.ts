import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'war-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page:number = 1;

  @Input()
  pageSize:number = 5;

  @Input()
  collectionSize:number = 0;

  @Output()
  pageChange:EventEmitter <number> = new EventEmitter <number> ();

  pages:number[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.pages = [];
    for(let i = 1; i < this.getNoPages(); i++){
      this.pages.push(i);
    }
  }

  getNoPages():number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }

  pageSelected(newPage:number){
    this.pageChange.emit(newPage);
  }

  onNextClicked(){
    this.pageChange.emit(this.page + 1);
  }

  onPreviousClicked(){
    this.pageChange.emit(this.page - 1);
  }

}
