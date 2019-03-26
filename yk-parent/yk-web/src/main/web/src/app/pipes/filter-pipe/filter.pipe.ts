import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrayList: any, args?: any): any {
    if (args.list && args.txt !== "") {
      return args.list.filter(item =>
        (item.jSannidatha !== null && item.jSannidatha.name !== null && item.jSannidatha.name.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
        || (item.jilla !== null && item.jilla.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
        || (item.tSannidatha !== null && item.tSannidatha.name !== null && item.tSannidatha.name.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
        || (item.taluka !== null && item.taluka.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
        || (item.avekshak !== null && item.avekshak.name !== null && item.avekshak.name.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
        || (item.group !== null && item.group.toLowerCase().indexOf(args.txt.toLowerCase()) > -1)
      );
    } else {
      return args.list
    }
  }

}
