import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) { // si no viene nada de las imagenes (null) retorna una imagen que no existe
      return 'assets/img/noimage.png';
    }
    if (images.length > 0) { // si vienen las imagenes con arreglo, regresa las imagenes que vienen a partir de 0
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}
