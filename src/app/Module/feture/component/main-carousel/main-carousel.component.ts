import { Component, OnInit } from '@angular/core';
import { homeCaroselData } from 'src/app/Data/mainCaruosal';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit(): void {
    this.carouselData = homeCaroselData;
    this.autoPlay();
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}