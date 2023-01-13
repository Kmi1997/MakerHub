import { Component, Input, OnInit } from '@angular/core';

type BreakPoint = {
	[key: string]: number
}

@Component({
  selector: 'app-media-query',
  templateUrl: './media-query.component.html',
  styleUrls: ['./media-query.component.scss']
})
export class MediaQueryComponent implements OnInit {
	@Input() breakpoints: BreakPoint[] = [
		{ 'sm': 640 },
		{ 'md': 768 },
		{ 'lg': 1024 },
		{ 'xl': 1280 },
	]

	currentBreakPoint?: string = "X";
	currentPixel: number = 0;


  constructor() { }

  ngOnInit(): void {
		this.currentPixel = window.innerWidth;

		for (const value of this.breakpoints) {
			if (window.innerWidth > Object.values(value)[0] ) {
				this.currentBreakPoint = Object.keys(value)[0];
			}
		}
  }

	onResize(event: any) {
		this.currentPixel = event.target.innerWidth

		for (const value of this.breakpoints) {
			if (event.target.innerWidth > Object.values(value)[0] ) {
				this.currentBreakPoint = Object.keys(value)[0];
			}
		}

		if(Object.values(this.breakpoints[0])[0] > window.innerWidth) {
			this.currentBreakPoint = "N";
		}
	}
}
