import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  downloadHV(){

    // https://docdro.id/KUouu0X this is the link where the HV is.
    window.location.href = "https://docdro.id/KUouu0X"
    
  }

}
