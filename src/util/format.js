import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format;
