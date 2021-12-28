import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import {
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
} from '@angular-three/soba/abstractions';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { setupCanvas, setupCanvasModules } from '@angular-three/storybook';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

@Component({
  selector: 'ngt-default-gizmo',
  template: `
    <ng-container *ngIf="node$ | async as node">
      <ngt-soba-gizmo-helper [alignment]="alignment" [margin]="margin">
        <ngt-soba-gizmo-viewcube
          [faces]="['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']"
          [opacity]="1"
          color="white"
          strokeColor="gray"
          textColor="black"
          hoverColor="lightgray"
        ></ngt-soba-gizmo-viewcube>
      </ngt-soba-gizmo-helper>
      <ngt-primitive
        [object]="node.scene"
        [scale]="[0.01, 0.01, 0.01]"
      ></ngt-primitive>

      <ngt-soba-orbit-controls [makeDefault]="true"></ngt-soba-orbit-controls>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class DefaultGizmo {
  node$ = this.gltfLoaderService.load('/assets/LittlestTokyo.glb');

  @Input() alignment:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left' = 'bottom-right';
  @Input() margin: [number, number] = [80, 80];

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}
}

@NgModule({
  declarations: [DefaultGizmo],
  exports: [DefaultGizmo],
  imports: [
    CommonModule,
    NgtPrimitiveModule,
    NgtSobaGizmoHelperModule,
    NgtSobaGizmoViewcubeModule,
    NgtSobaOrbitControlsModule,
  ],
})
class DefaultGizmoModule {}

export default {
  title: 'Soba/Abstractions/Gizmo Helper',
  decorators: [
    componentWrapperDecorator(
      setupCanvas({ cameraPosition: [0, 0, 10], controls: false, black: true })
    ),
    moduleMetadata({
      imports: [...setupCanvasModules, DefaultGizmoModule],
    }),
  ],
  argTypes: {
    alignment: {
      options: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
  template: `
    <ngt-default-gizmo [alignment]='alignment' [margin]='margin'></ngt-default-gizmo>
  `,
});

Default.args = {
  alignment: 'bottom-right',
  margin: [80, 80],
};