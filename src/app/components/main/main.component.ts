import { Component, OnInit } from '@angular/core';
import { PortfolioServerService } from 'src/app/services/portfolio-server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private portfolioServer: PortfolioServerService) { }

  ngOnInit() {
  }


  downloadHV(){

    // https://docdro.id/KUouu0X this is the link where the HV is.
    window.location.href = "https://docdro.id/KUouu0X"

    
    
  }

  submit(){
    this.portfolioServer.getData().subscribe((data)=>{
      console.log(data);
    })
  }



}
