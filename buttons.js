function changeImage()
{
    var img = document.getElementById('Avg');
    img.scr = '\Images\S_av_Delta_plot.png'
}
let cur_av_image =0;
const av_images =['Images/S_av_plot.png','Images/S_av_Delta_plot.png'];
function switch_avg_Image() {
    currentImage = (cur_av_image + 1) % av_images.length;
    document.getElementById('Avg').src = images[currentImage];
}

const avimages = ['Images/S_av_plot.png', 'Images/S_av_Delta_plot.png','Images/S_av_E_plot.png'];

const L_funcs = ['Current L function: ζ(s)', 'Current L function: L(s,Δ)','Current L function: L(s,E)'];
let currentavgImage = 0;
function switchavImage() {
    currentavgImage = (currentavgImage + 1) % avimages.length;
    document.getElementById('Average').src = avimages[currentavgImage];
    document.getElementById('av_text').innerHTML = L_funcs[currentavgImage];
}

const SDimages = ['Images/SD_zeta.png','Images/SD_Delta.png', 'Images/SD_E.png' ];
let currentSDImage =0;

function switchSDImage() {
    currentSDImage = (currentSDImage + 1) % SDimages.length;
    document.getElementById('SD').src = SDimages[currentSDImage];
    document.getElementById('SD_text').innerHTML = L_funcs[currentSDImage];
}

const pcsgifs = ['Images/PCS_zeta.gif','Images/PCS_delta.gif','Images/PCS_E.gif'];
let currpcsgif = 0;
function switchPCSImage() {
    currpcsgif = (currpcsgif + 1) % pcsgifs.length;
    document.getElementById('PCS').src = pcsgifs[currpcsgif];
    document.getElementById('pcs_text').innerHTML = L_funcs[currpcsgif];

}
const tracepdfs = ['Images/half_zeta.png','Images/half_delta.png','Images/half_E.png']
let currenttraceImage  =0;
function switchtraceImage() {
    currenttraceImage = (currenttraceImage + 1) % tracepdfs.length;
    document.getElementById('trace').src = tracepdfs[currenttraceImage];
    document.getElementById('trace_text').innerHTML = L_funcs[currenttraceImage];
}


const smallpcs = ['Images/Distortion_zeta.png','Images/Distortion_Delta.png','Images/Distortion_E.png']
let currentPCSImage  =0;
function switchsmallpcsImage() {
    currentPCSImage = (currentPCSImage + 1) % smallpcs.length;
    document.getElementById('smallPCS').src = smallpcs[currentPCSImage];
    document.getElementById("smallpcs_text").innerHTML = L_funcs[currentPCSImage];
}
let currrentLfunc = 0;
function switchL() {
    currrentLfunc = (currrentLfunc + 1) % L_funcs.length;
    document.getElementById("L_text").innerHTML = L_funcs[currrentLfunc]
}