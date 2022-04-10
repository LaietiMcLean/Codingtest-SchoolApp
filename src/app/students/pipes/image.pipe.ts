import { Student } from './../interfaces/students.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( students: Student ): string {

    if(!students.id && !students.alt_img) {
      return 'assets/nouser.png'
    } else if (students.alt_img) {
      return students.alt_img;
    } else {
      return `assets/${ students.id }.png`;
    }
  }

}
