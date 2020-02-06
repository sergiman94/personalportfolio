import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espanol',
  templateUrl: './espanol.component.html',
  styleUrls: ['./espanol.component.scss']
})
export class EspanolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  downloadHV(){

    // https://docdro.id/pI2Nm2A this is the link where the HV is.
    window.location.href = "https://docdro.id/pI2Nm2A"

    
    
  }


}
