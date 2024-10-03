import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Pipe({
  name: 'datacustom',
  standalone: true
})
export class DatacustomPipe implements  PipeTransform {

  transform(value: string): string {
    // Converte o valor da string em um objeto Date
    const date = new Date(value);

    // Formata a data no formato desejado
    return format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
  }

}
