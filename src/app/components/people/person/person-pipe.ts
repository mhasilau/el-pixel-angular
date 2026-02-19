import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person',
})
export class PersonPipe implements PipeTransform {
  transform(value: string, count: number = 5): string {
    return value.slice(0, count) + '...';
  }
}
