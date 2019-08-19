import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-new-hot',
  templateUrl: './new-hot.component.html',
  styleUrls: ['./new-hot.component.css']
})

export class NewHotComponent {
public pageTotal=50
  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  operating = false;
  dataSet = [];
  indeterminate = false;

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.operating = true;
    setTimeout(_ => {
      this.dataSet.forEach(value => value.checked = false);
      this.refreshStatus();
      this.operating = false;
    }, 1000);
  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.dataSet.push({
        name   : `热点标题 ${i}`,
        address: `http://html.yunzhidata.com/html/2018-08/01/1533088347240${i}.html`,
        checked: false
      });
    }
  }
  onPageChanged($event){
    console.log($event)
  }
}

