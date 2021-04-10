import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail
  carImages:CarImage[];
  currentCar:Car
  dataLoaded=false
 
  imageUrl = "https://localhost:44382";
  constructor(private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"]);
          this.getImagesById(params["carId"]);
        }
      })
    }
  
    getCarDetails(carId:number)
    {
      this.carDetailService.getCarDetails(carId).subscribe(response => {
        this.carDetails = response.data[0];
        this.dataLoaded=true;
        console.log(response);
      })
    }

    getImagesById(id:number){
      this.carImageService.getCarImagesByCarId(id).subscribe(response=>{
        this.carImages=response.data;
        
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
