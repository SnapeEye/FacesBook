import { config } from './config/config';
import Core from './core/Core';

window.onload = function () {
    console.log('RE-RE');
    window.core = new Core(config);
};