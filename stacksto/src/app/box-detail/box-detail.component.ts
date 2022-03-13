import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: [ './box-detail.component.css' ]
})
export class BoxDetailComponent implements OnInit {
  box: Box | undefined;

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBox();
  }

  getBox(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.boxService.getBox(id)
      .subscribe(box => this.box = box);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.box) {
  //     this.boxService.updateBox(this.box)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}