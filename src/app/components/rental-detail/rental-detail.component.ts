import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  rentalDetail: RentalDetail[];
  dataLoaded = false;
  constructor(private rentalDetailsService: RentalDetailService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails() {
    this.rentalDetailsService.getRentalDetail().subscribe((response) => {
      this.rentalDetail = response.data;
      this.dataLoaded = true;
    });
  }
}
