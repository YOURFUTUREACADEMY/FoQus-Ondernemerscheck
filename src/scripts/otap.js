import config from '@/json/config.json';

function setOTAP() {
    // Default Productie
    let OTAP = 0;

    const locURL = config.OTAP.URLLocHost;
    const ontURL = config.OTAP.URLOnt;
    const tesURL = config.OTAP.URLTes;
    const accURL = config.OTAP.URLAcc;
    const proURL = config.OTAP.URLPro;

    const locStatus = window.location.href.startsWith(locURL);
    const ontStatus = window.location.href.startsWith(ontURL);
    const tesStatus = window.location.href.startsWith(tesURL);
    const accStatus = window.location.href.startsWith(accURL);
    const proStatus = window.location.href.startsWith(proURL);

    // URL LocHost
    if (locURL != undefined && locURL != ""){
        if(locStatus){
            OTAP = 3;
        }
    }
    // URL Ontwikkeling
    if (ontURL != undefined && ontURL != ""){
        if(ontStatus){
            OTAP = 3;
        }
    }
    // URL Test
    if (tesURL !== undefined && tesURL !== ""){
        if(tesStatus){
            OTAP = 2;
        }   
    }
    // URL Acceptatie
    if (accURL && accURL !== ""){
        if(accStatus){
            OTAP = 1;
        }   
    }
    if (proURL && proURL !== ""){
        if(proStatus){
            OTAP = 0;
        }   
    }

    config.OTAP.Value = OTAP;
    return OTAP;
}

const OTAP = setOTAP();

export default OTAP;
