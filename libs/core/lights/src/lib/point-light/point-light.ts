// GENERATED
import {
    AnyConstructor,
    NgtCommonLight,
    provideCommonLightFactory,
} from '@angular-three/core';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    NgModule,
} from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'ngt-point-light',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideCommonLightFactory<THREE.PointLight>(NgtPointLight)],
})
export class NgtPointLight extends NgtCommonLight<THREE.PointLight> {
    static ngAcceptInputType_args:
        | ConstructorParameters<typeof THREE.PointLight>
        | undefined;

    @Input() set args(v: ConstructorParameters<typeof THREE.PointLight>) {
        this.instanceArgs = v;
    }

    @Input() set distance(distance: number) {
        this.set({ distance });
    }

    @Input() set decay(decay: number) {
        this.set({ decay });
    }

    @Input() set power(power: number) {
        this.set({ power });
    }

    override get lightType(): AnyConstructor<THREE.PointLight> {
        return THREE.PointLight;
    }

    protected override get optionFields(): Record<string, boolean> {
        return {
            ...super.optionFields,
            distance: true,
            decay: true,
            power: true,
        };
    }
}

@NgModule({
    declarations: [NgtPointLight],
    exports: [NgtPointLight],
})
export class NgtPointLightModule {}