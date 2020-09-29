import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  banners: { image: string; title: string; subtitle: string }[] = [
    {
      title: 'Aloe Drinks',
      subtitle: 'Aloe vera juice consumption flushes out toxins from the body',
      image: 'assets/images/drinks.jpg',
    },
    {
      title: 'Nutritions',
      subtitle:
        'From complex daily vitamins to natural energy boosters and digestive aides',
      image: 'assets/images/nutritionals.jpg',
    },
    {
      title: 'Bee Products',
      subtitle: 'Experience the energy and nutrition only nature can provide.',
      image: 'assets/images/bee.jpg',
    },
    {
      title: 'Personal and Skin Care',
      subtitle:
        'Treat your body to a full line of products made with natural ingredients',
      image: 'assets/images/skincare.jpg',
    },
    {
      title: 'Weight Management',
      subtitle: 'Gives you the tools you need to start transforming your body',
      image: 'assets/images/weight.jpg',
    },
    {
      title: 'Infinite by Forever',
      subtitle: 'New premium anti-ageing skin care range',
      image: 'assets/images/infinite.jpg',
    },
  ];

  currentSlide = this.banners[0];
  currentIndex = 0;
  timer: Subscription;

  constructor() {}

  getStyle() {
    return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
      this.banners[this.currentIndex].image
    })`;
  }

  ngOnInit(): void {
    this.timer = interval(5000).subscribe(() => {
      this.moveSlide('next');
    });
  }

  moveSlide(direction: string) {
    if (direction === 'prev') {
      if (this.currentIndex === 0) {
        this.currentIndex = this.banners.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    }

    if (direction === 'next') {
      if (this.currentIndex === this.banners.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    }
  }

  clearInterval() {
    this.timer.unsubscribe();
  }

  ngOnDestroy() {
    this.clearInterval();
  }
}
