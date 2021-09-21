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

  onRecieveData(data: any[]) {

    let  typhoons: any = {}
    for ( let forcast of data ){
      const text = forcast["Typhoon Code(Name)"]
      const reg = text.match(/TY(?<code>[0-9]+)\((?<name>[a-zA-Z]+)\)/)

      const code = reg.groups.code
      const name = reg.groups.name

      const typhoon = typhoons[code] || {code,name,text}
      
      const is_analysis = String(forcast["Issue/Forcast Date"]).includes('Analisys')
      if (is_analysis){
        typhoon["analysis"]  = forcast
      }
      else{
        typhoon["forcast"] = typhoon["forcast"] || []
        typhoon["forcast"].push(forcast)
      }

      typhoons[code] = typhoon
    }

    return Object.values(typhoons)
  }



  isForcastVisible = false;
  isAnalysisVisible = false;

  forcastData = null
  analysisData = null

  showForcast(Forcast){
    this.forcastData= Forcast
    this.isForcastVisible = true
  }
  
  showAnalysis(Analysis){
    this.analysisData= {...Analysis}
    this.isAnalysisVisible = true
  }

  handleModalClose(): void {
    this.isForcastVisible = false;
    this.isAnalysisVisible = false;
    this.forcastData = null
    this.analysisData = null
  }

  forcastKeys = ["Category","Center of probability circle","Central pressure","Direction and speed of movement","Intensity","Issue Date","Issue/Forcast Date","Maximum wind gust speed","Maximum wind speed near the center","Radius of probability circle"]
  analysisKeys = ["30-kt wind area","Category","Center Position","Central pressure","Direction and speed of movement","Intensity","Issue Date","Issue/Forcast Date","Maximum wind gust speed","Maximum wind speed near the center","Scale"]
}
