import { NgModule } from '@angular/core';
import { ThousandsPipe } from './thousand';

@NgModule({
  declarations: [ThousandsPipe],
  exports: [ThousandsPipe],
})
export class PipesModule {}
