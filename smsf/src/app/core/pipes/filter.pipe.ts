import { Pipe, PipeTransform } from '@angular/core';
import { SMSFUtils } from '../smsfUtils';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform
{
    transform(mainArr: any[], searchText: string, property: string): any
    {
        return SMSFUtils.filterArrayByString(mainArr, searchText);
    }
}
