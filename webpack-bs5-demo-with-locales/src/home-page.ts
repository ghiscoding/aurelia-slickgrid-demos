import { IAurelia } from 'aurelia';

export class HomePage {
  constructor(@IAurelia private aurelia: IAurelia) {
    console.log(aurelia);
  }
}
