// import { Item } from '@rick.info.dev/ts-general';
import { Item } from '@ric-ng/ts-general';

import { IPays } from './../interfaces';

export class Pays extends Item implements IPays {
  constructor(id: number, label: string, private iNbHabitants: number = 0) {
    super(id, label);
  }
  getNbHabitants(): number {
    return(this.iNbHabitants);
  }
}
