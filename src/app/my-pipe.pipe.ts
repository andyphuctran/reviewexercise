import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  pure:false
})
export class MyPipePipe implements PipeTransform {

  transform(value: any[], text:string): any {
    if(!value||text==''){
      return value;
    }
    return value.filter(item => item.title.indexOf(text)!==-1);
  }

}
