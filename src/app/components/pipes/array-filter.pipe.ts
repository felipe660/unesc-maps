import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
        filtro = filtro.toUpperCase();
        
        return value.filter(a =>
            a.name.toUpperCase().indexOf(filtro) >= 0 || a.bloco.toUpperCase().indexOf(filtro) >= 0 
            || a.curso.toUpperCase().indexOf(filtro) >= 0 || a.fase.toUpperCase().indexOf(filtro) >= 0
        );
    } else {
        // Quando filtro for vazio ou nulo,
        // retornamos o próprio array
        return value;
    }
}

}
