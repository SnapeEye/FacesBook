import Facade from './../facade/Facade';
import Header from './../header/Header';

export default class Core {
    constructor(config) {
        this.config = config;
        this.facade = null;
        this.header = null;
        this.sidebar = null;
        this.footer = null;
        this.mainArea = null;
        this.init();
    }

    init() {
        document.title = this.config.title;
        this.initFacade();
        this.initHeader();
        this.initSidebar();
        this.initFooter();
        this.initMainArea();
        this.initDialogs();
    };

    initFacade = () => {
        this.facade = new Facade(this.config);
    };

    initHeader = () => {
        this.header = new Header({
           facade: this.facade,
        });
    };

    initSidebar = () => {

    };

    initFooter = () => {

    };

    initMainArea = () => {

    };

    initDialogs = () => {

    };
}