import { NgtCoreModule } from '@angular-three/core';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';
import {
  NgtMeshBasicMaterialModule,
  NgtMeshPhongMaterialModule,
  NgtMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtMeshBasicMaterialModule,
    NgtBoxGeometryModule,
    NgtStatsModule,
    NgtMeshPhongMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtMeshStandardMaterialModule,
    NgtSobaOrbitControlsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
