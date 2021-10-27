import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'thousand' })
export class ThousandsPipe implements PipeTransform {
  transform(value: any): string {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
