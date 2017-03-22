import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeFormat'
})
export class CodeFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   //return JSON.stringify(value, args, 2)
     return value.replace('&#039', '<br/>');
      //.replace('\n', '<br/>');
  }

}
