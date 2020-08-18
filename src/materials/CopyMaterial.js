import { NoBlending, RawShaderMaterial, Uniform } from 'three';

import vertexShader from '../shaders/CopyPass.vert.js';
import fragmentShader from '../shaders/CopyPass.frag.js';

export class CopyMaterial extends RawShaderMaterial {
    constructor() {
        super({
            uniforms: {
                tMap: new Uniform(null)
            },
            vertexShader,
            fragmentShader,
            blending: NoBlending,
            depthWrite: false,
            depthTest: false
        });
    }
}
