import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { PortfolioServerService } from 'src/app/services/portfolio-server.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {

  dName: string = '';
  dEmail: string = '';
  dBody: string = '';

  email: Email = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private portfolioServer:PortfolioServerService) { }

  ngOnInit() {
  }


  downloadHV(){

    // https://docdro.id/pI2Nm2A this is the link where the HV is.
    window.location.href = "https://docdro.id/pI2Nm2A"

    
    
  }

  submit(){

    this.email.name = this.dName;
    this.email.email = this.dEmail;
    this.email.message = this.dBody;

    this.portfolioServer.setData(this.email).subscribe((r)=>console.log(r));
    
    
  }

}
