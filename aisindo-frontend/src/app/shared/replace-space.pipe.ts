import { Pipe, PipeTransform } from '@angular/core';
/*
 * Replace Space
 * Takes no argument.
 * Usage:
 *   value | replaceSpace
 * Example:
 *   {{ 'adadada ad a' |  replaceSpace}}
 *   formats to: 'adadadaada'
*/
@Pipe({name: 'replaceSpace'})
export class ReplaceSpacePipe implements PipeTransform {
  transform(value: string): string {
    value = value.split(' ').join('');
    value = value.split('/').join('');
    return value.split('&').join('');
  }
}
