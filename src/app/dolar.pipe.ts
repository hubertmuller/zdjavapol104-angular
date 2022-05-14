import { Pipe, PipeTransform } from "@angular/core";

@Pipe ( {name: 'dolarek'} )
export class DolarPipe implements PipeTransform {

    transform(value: string, skroc: boolean) : string {
        return value + (skroc ?'$':'USD');
    }
}

