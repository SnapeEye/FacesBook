export default class Core {
    constructor(config) {
        this.config = config;
        this.facede = null;
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

    };

    initHeader = () => {

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