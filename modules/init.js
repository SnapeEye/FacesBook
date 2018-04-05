import { config } from './config/config';
import Core from './core/Core';

window.onload = function () {
    window.core = new Core(config);
};