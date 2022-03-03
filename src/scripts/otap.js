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
        console.log("Loc");
        if(locStatus){
            OTAP = 3;
        }
    }
    // URL Ontwikkeling
    if (ontURL != undefined && ontURL != ""){
        console.log("Ont");
        if(ontStatus){
            OTAP = 3;
        }
    }
    // URL Test
    if (tesURL !== undefined && tesURL !== ""){
        console.log("Tes");
        if(tesStatus){
            OTAP = 2;
        }   
    }
    // URL Acceptatie
    if (accURL && accURL !== ""){
        console.log("Acc");
        if(accStatus){
            OTAP = 1;
        }   
    }
    if (proURL && proURL !== ""){
        console.log("Acc");
        if(proStatus){
            OTAP = 0;
        }   
    }

    config.OTAP.Value = OTAP;
    return OTAP;
}

const OTAP = setOTAP();

export default OTAP;
