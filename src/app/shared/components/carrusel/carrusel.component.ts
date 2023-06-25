import { Component, OnInit, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.sass']
})
export class CarruselComponent implements OnInit {
  ngOnInit(): void {
    console.log("init")
    this.autoplay()
  }
  @ViewChild("myCarousel") carruselote: any;
  @ViewChild("myCarousel2") carruseloteEstatico: any;
  carouselParable: any;

  autoplay() {
    setTimeout(() => {
      // this.carruselote = document.querySelector('#myCarousel')

      this.carouselParable = new bootstrap.Carousel(this.carruselote.nativeElement, {
        interval: 1000,
        touch: true,
      })
      const carruselEstatico = new bootstrap.Carousel(this.carruseloteEstatico.nativeElement)
      console.log("carrusel estatico", carruselEstatico)
      console.log("carrusel dinamico ", this.carouselParable)
    }, 20);
  }

  stop() {
    // let carruselote = document.querySelector('#myCarousel');
    // carruselote?.removeAttribute("data-bs-ride");
    this.carouselParable = new bootstrap.Carousel(this.carruselote.nativeElement, {
      interval: false,
      ride: false,
      pause:true
    })
    this.carruselote.nativeElement.removeAttribute("data-bs-ride")
    // const carrusel = new bootstrap.Carousel(carruselote, {
    //   interval: false,
    //   ride: false,
    // })
    // carrusel.pause();
    console.log(this.carouselParable._config)
   this.carouselParable._config.interval = false;
    this.carouselParable.ride = false;
    console.log(this.carouselParable)

  }

}


