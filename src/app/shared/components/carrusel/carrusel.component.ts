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
    // setTimeout(() => {
    //   // this.carruselote = document.querySelector('#myCarousel')

    //   this.carouselParable = new bootstrap.Carousel(this.carruselote.nativeElement, {
    //     interval: 12000,
    //   })
    //   // const carruselEstatico = new bootstrap.Carousel(this.carruseloteEstatico.nativeElement)
    //   // console.log("carrusel estatico", carruselEstatico)
    //   // console.log("carrusel dinamico ", this.carouselParable)
    // }, 20);
  }

  stop() {
    // let carruselote = document.querySelector('#myCarousel');
    // carruselote?.removeAttribute("data-bs-ride");
    // this.carouselParable = new bootstrap.Carousel(this.carruselote.nativeElement, {
    //   interval: false,
    //   ride: false,
    //   pause: true
    // })
    // this.carruselote.nativeElement.removeAttribute("data-bs-ride")
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel);

    myCarousel!.setAttribute("data-bs-interval","200")
    myCarousel!.removeAttribute("data-bs-interval")
    myCarousel!.removeAttribute("data-bs-ride")
    console.log(myCarousel)
    // ca?.setattribute("data-interval","false");
    // const carrusel = new bootstrap.Carousel(carruselote, {
    //   interval: false,
    //   ride: false,
    // })
    // carrusel.pause();
    // console.log(this.carouselParable._config)
    // this.carouselParable._config.interval = false;
    // this.carouselParable.ride = false;
    // console.log(this.carouselParable)

  }
  start() {
    // this.carouselParable = new bootstrap.Carousel(this.carruselote.nativeElement, {
    //   interval: 1000,
    //   touch: true,
    //   ride: true
    // });
    // this.carruselote = document.querySelector('#myCarousel');
    // let ca = document.querySelector('#myCarousel');

    // ca!.setAttribute("data-bs-ride", "carousel")

    // console.log(ca)
    // this.carouselParable.start();
  }

  pause() {
    // var carouselElement = document.getElementById("myCarousel");

    // /* it looks like manually initialising the carousel
    //    will overwrite html data-attributes, so you have to
    //    specify properties when creating the slider */

    // this.carouselParable = new bootstrap.Carousel(carouselElement, {
    //   interval: 100000000 * 6000
    // });

    // // document.getElementById("btnPause")!.addEventListener("click",  ()=> {
    //   this.carouselParable._interval = 60000;
    //   this.carouselParable._config.pause = true;
    //   this.carouselParable._config.ride = false;
    //   console.log(this.carouselParable)
    // // });
  }
}


