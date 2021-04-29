const drp_prd = document.querySelector('#drp-product');
const drp_comp = document.querySelector('#drp-company');
const drp_conn = document.querySelector('#drp-connect');
let drp_prd_state = false;
let drp_comp_state = false;
let drp_conn_state = false;

const i_prd = document.querySelector("#i-prd");
const i_com = document.querySelector("#i-com");
const i_conn = document.querySelector("#i-conn");

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
let menuState = false;

const dropdown = (str) => {
    switch(str){
        case 'product':
            if(!drp_prd_state) { setClassAct(drp_prd); drp_prd_state = true; rotateUp(i_prd); } 
            else { setClassDeac(drp_prd); drp_prd_state = false; rotateDown(i_prd); }
            break;
        case 'company':
            if(!drp_comp_state) { setClassAct(drp_comp); drp_comp_state = true; rotateUp(i_com); } 
            else { setClassDeac(drp_comp); drp_comp_state = false; rotateDown(i_com); }
            break;
        case 'connect':
            if(!drp_conn_state) { setClassAct(drp_conn); drp_conn_state = true; rotateUp(i_conn); } 
            else { setClassDeac(drp_conn); drp_conn_state = false; rotateDown(i_conn); }
            break;
        default:
            break;
    }
}

const setClassDeac = (obj) => {
    obj.removeAttribute('class', 'activate');
    obj.setAttribute('class', 'deactivate');
    return;
}
const setClassAct = (obj) => {
    obj.removeAttribute('class', 'deactivate');
    obj.setAttribute('class', 'activate');
    return;
}

const rotateUp = (icon) => {
    if(icon.classList.contains("rotate-anim2")) { icon.removeAttribute("class", "rotate-anim2"); }
    icon.setAttribute("class", "rotate-anim");
}
const rotateDown = (icon) => {
    if(icon.classList.contains("rotate-anim")) { icon.removeAttribute("class", "rotate-anim"); }
    icon.setAttribute("class", "rotate-anim2");
}

const menuOn = () => {
    if(menuState === false){
        menu.removeAttribute("class", "deactivate");
        menu.setAttribute("class", "activate ph4 pt3 pb4 menu shadow-4 br4 mt3 bg-white");
        hamburger.setAttribute("class", "deactivate")
        menuState = true;
    }
}
const menuOff = () => {
    if(menuState === true){
        menu.removeAttribute("class", "activate");
        menu.setAttribute("class", "deactivate");
        hamburger.removeAttribute("class", "deactivate")
        menuState = false;
    }
}