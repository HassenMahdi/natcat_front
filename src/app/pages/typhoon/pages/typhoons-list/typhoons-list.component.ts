import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable, observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { TyphoonService } from 'src/app/services/api/typhoon.service';

@Component({
  selector: 'app-typhoons-list',
  templateUrl: './typhoons-list.component.html',
  styleUrls: ['./typhoons-list.component.css']
})
export class TyphoonsListComponent implements OnInit {

  year$ = new ReplaySubject<number>()
  loading$ = new BehaviorSubject(false)
  
  typhoons$ 
  
  constructor(private route: ActivatedRoute, private typhoons: TyphoonService) {}
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
    return this.typhoons.serachByYear(year)
  }
}
