import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName',
  standalone: true,
})
export class FirstNamePipe implements PipeTransform {
  transform(name: string): string {
    return name.split(' ').slice(0, -1).join(' ');
  }
}
