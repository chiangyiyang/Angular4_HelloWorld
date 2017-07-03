import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowPreposition'
})
export class LowPrepositionPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value)
      return null;

    let result = value + " ";
    result = result.split(" Of ").join( " of ");
    result = result.split(" The ").join( " the ");
    return result;
  }

}
