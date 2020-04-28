// import { Item } from '@rick.info.dev/ts-general';
import { Item } from '@ric-ng/ts-general';

import { IPays } from './interfaces/IPays';

export class Pays extends Item implements IPays {
  constructor(psId: string, psLabel: string, private iNbHabitants: number = 0) {
    super(psId, psLabel);
  }
  getNbHabitants(): number {
    return(this.iNbHabitants);
  }
}
