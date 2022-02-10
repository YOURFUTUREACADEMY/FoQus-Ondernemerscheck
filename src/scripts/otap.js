import config from "@/json/config.json"

function setOTAP(){

    // Default Productie
    let OTAP = 0;
    // URL Ontwikkeling 
    if(window.location.href.startsWith(config.settings.OTAP.URLOnt) && !window.location.href.startsWith(config.settings.OTAP.URLPro)){
        OTAP = 3;
    }
    // URL Local Host : npm run serve 
    else if(window.location.href.startsWith(config.settings.OTAP.URLLocHost) && !window.location.href.startsWith(config.settings.OTAP.URLPro)){
        OTAP = 3;
    }
    // URL Acceptatie 
    else if(window.location.href.startsWith(config.settings.OTAP.URLTes) && !window.location.href.startsWith(config.settings.OTAP.URLPro)){
        OTAP = 2;
    }
    // URL Test
    else if(window.location.href.startsWith(config.settings.OTAP.URLAcc) && !window.location.href.startsWith(config.settings.OTAP.URLPro)){
        OTAP = 1;
    }
    
    return OTAP;
}

const OTAP = setOTAP();

export default OTAP;