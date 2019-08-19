import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent {
  copyDate
  constructor(){
      this.copyDate = new Date().getFullYear()
  }
}
