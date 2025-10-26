import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPipe'
})
export class DiscountPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
