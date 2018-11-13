import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight'
})
export class TextHighlightPipe implements PipeTransform {
  transform(value: string, args?: string): any {
    return args ? value.replace(new RegExp(args, 'gi'), match => {
      return '<span class="highlight-text">' + match + '</span>';
    }) : value;
  }

}
