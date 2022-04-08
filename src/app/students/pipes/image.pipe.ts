import { Student } from './../interfaces/students.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( students: Student ): string {
    return `assets/${ students.id }.png`;
  }

}
