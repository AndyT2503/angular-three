import { NgtCoreModule } from '@angular-three/core';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtTextModule } from '@angular-three/soba/abstractions';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import * as THREE from 'three';

/**
 *       color={'#EC2D2D'}
 *       fontSize={12}
 *       maxWidth={200}
 *       lineHeight={1}
 *       letterSpacing={0.02}
 *       textAlign={'left'}
 *       font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
 *       anchorX="center"
 *       anchorY="middle"
 */

@Component({
  selector: 'ngt-delete-me',
  template: `
    <ngt-canvas [camera]="{ position: [0, 0, 200] }">
      <ngt-stats></ngt-stats>
      <ngt-text
        color="#EC2D2D"
        [fontSize]="12"
        [maxWidth]="200"
        [lineHeight]="1"
        [letterSpacing]="0.02"
        textAlign="left"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        (animateReady)="onTextAnimate($event.animateObject)"
      >
        <ngt-text-content>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
          EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD
          MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
          ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN
          REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
          PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN
          CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
        </ngt-text-content>
      </ngt-text>
    </ngt-canvas>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteMeComponent {
  onTextAnimate(text: any) {
    (text as THREE.Mesh).rotation.y += 0.01;
  }
}

@NgModule({
  declarations: [DeleteMeComponent],
  exports: [DeleteMeComponent],
  imports: [NgtCoreModule, NgtTextModule, NgtStatsModule],
})
export class DeleteMeComponentModule {}
