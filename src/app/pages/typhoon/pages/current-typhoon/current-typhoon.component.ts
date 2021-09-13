import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TyphoonService } from 'src/app/services/api/typhoon.service';

@Component({
  selector: 'app-current-typhoon',
  templateUrl: './current-typhoon.component.html',
  styleUrls: ['./current-typhoon.component.css']
})
export class CurrentTyphoonComponent implements OnInit {

  loading$ = new BehaviorSubject(false)  
  data$ 
  
  constructor(private typhhons: TyphoonService ) {}
  ngOnInit(): void {
  
    this.data$ = of(true).pipe(
      tap(()=>this.loading$.next(true)),
      switchMap(()=>this.getData()),
      map((data:any[])=>this.onRecieveData(data)),
      tap(()=>this.loading$.next(false))
    )
  }

  getData(){
    return this.typhhons.getCurrent()
  }

  headers = new Set()
  onRecieveData(data: any[]) {

    let  typhoons: any = {}
    for ( let forcast of data ){
      const name = forcast["Typhoon Code(Name)"]
      const typhoon = typhoons[name] || {}
      
      const is_analysis = String(forcast["Issue/Forcast Date"]).includes('Analisys')
      if (is_analysis){
        typhoon["analysis"]  = forcast
      }
      else{
        typhoon["forcast"] = typhoon["forcast"] || []
        typhoon["forcast"].push(forcast)
      }

      typhoons[name] = typhoon
    }

    return Object.values(typhoons)
  }
}
