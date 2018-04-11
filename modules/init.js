import { config } from './config/config';
import Core from './core/Core';

import './main.less';

window.onload = function () {
    window.core = new Core(config);
};