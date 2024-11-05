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

const pcsgifs = ["Images/optimized/PCS_zeta.gif",'Images/optimized/PCS_delta.gif','Images/optimized/PCS_E.gif'];
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


const smallpcs = ['Images/optimized/PCS_zeta_small.gif','Images/optimized/PCS_delta_small.gif','Images/optimized/PCS_E_small.gif']
let currentsmallPCSImage  =0;
function switchsmallpcsImage() {
    currentsmallPCSImage = (currentsmallPCSImage + 1) % smallpcs.length;
    document.getElementById('smallPCS').src = smallpcs[currentsmallPCSImage];
    document.getElementById("smallpcs_text").innerHTML = L_funcs[currentsmallPCSImage];
}
let currrentLfunc = 0;
function switchL() {
    currrentLfunc = (currrentLfunc + 1) % L_funcs.length;
    document.getElementById("L_text").innerHTML = L_funcs[currrentLfunc]
}

const intro_gifs = ['Images/PCSv3.gif','Images/TCS_Trace.gif'];
const intro_text =['Pair Correlation', 'Triple Correlation'];
let curcor = 0;

function switchintro() {
    curcor = (curcor +1) % intro_gifs.length;
    document.getElementById("intro_text").innerHTML = intro_text[curcor];
    document.getElementById("intro_pic").src = intro_gifs[curcor];
}