import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail [];
  carDetails1:CarDetail
  currentCar:Car
  car:Car[]
  dataLoaded=false
 
  imageUrl = "https://localhost:44382";
  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"]);
        }
      })
    }
  
    getCarDetails(carId:number)
    {
      this.carDetailService.getCarDetails(carId).subscribe(response => {
        this.carDetails = response.data;
        this.dataLoaded=true;
        console.log(response);
      })
    }

    getSliderClassName(index:Number){
      if(index == 0){
        return "carousel-item active";
      } else {
        return "carousel-item ";
      }
    }
  setButtonHomePage(currentCar:Car){
      this.currentCar=currentCar
  }


  getButtonHomePageClass(currentCar:Car){
      return '"btn btn-primary"'
  }

}
