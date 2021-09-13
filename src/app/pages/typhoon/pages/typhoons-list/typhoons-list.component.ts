import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable, observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-typhoons-list',
  templateUrl: './typhoons-list.component.html',
  styleUrls: ['./typhoons-list.component.css']
})
export class TyphoonsListComponent implements OnInit {

  year$ = new ReplaySubject<number>()
  loading$ = new BehaviorSubject(false)
  
  typhoons$ 
  
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.year$.next(+params.get('year')) 
    })

    this.typhoons$ = this.year$.pipe(
      tap(()=>this.loading$.next(true)),
      switchMap((year)=>this.loadTyphoons(year)),
      tap(()=>this.loading$.next(false))
    )
  }

  loadTyphoons(year:number){
    return new Observable((observer)=>{
      setTimeout(() => {
        observer.next([
          {id: year + '12', name:'habibi', year:year, number:12},
          {id: year + '12', name:'hobi', year:year, number:12},
          {id: year + '12', name:'habhab', year:year, number:12},
        ])
        observer.complete()
      }, 2000);
    })
  }
}
