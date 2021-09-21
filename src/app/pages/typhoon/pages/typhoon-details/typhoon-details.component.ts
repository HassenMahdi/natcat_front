import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReplaySubject, BehaviorSubject, Observable, pipe } from 'rxjs';
import { tap, switchMap, take } from 'rxjs/operators';
import { TyphoonService } from 'src/app/services/api/typhoon.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-typhoon-details',
  templateUrl: './typhoon-details.component.html',
  styleUrls: ['./typhoon-details.component.css']
})
export class TyphoonDetailsComponent implements OnInit {

 
  code$ = new ReplaySubject<number>()
  loading$ = new BehaviorSubject(false)
  
  data$ 
  
  constructor(private route: ActivatedRoute, private typhoons:TyphoonService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code$.next(+params.get('code')) 
    })

    this.data$ = this.code$.pipe(
      tap(()=>this.loading$.next(true)),
      switchMap((c)=>this.getData(c)),
      tap(()=>this.loading$.next(false))
    )
  }

  getData(code:number){
    return this.typhoons.getTrackingByCode(code)
  }

  downloadTrackingInformation(){
    this.code$.pipe(take(1), switchMap((code)=>this.typhoons.downlodXlsxReport(code)),tap((blob)=> fileSaver.saveAs(blob))
    ).subscribe()
  }

}
