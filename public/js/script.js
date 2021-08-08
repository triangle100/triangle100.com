// Mobile check (http://detectmobilebrowsers.com/)
// check = True (mobile)
// check = False (pc, mac, tablet, etc)
// window.mobileCheck = function() {
//     let check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };

let platform = "";

function updateResponsiveness() {
    // Was oringally split into multiple functions hence the unnecessary if statements.
    var viewportWidth = this.innerWidth;
        if (viewportWidth <= 1200) {
            console.log("Mobile detected...");
            platform = "mobile"
        }
        else {
            console.log("PC detected...");
            platform = "pc"
        }
    // updateResponsiveness(platform);
    if (platform == "mobile") {
        for (var i1 = 0; i1 < RESprojectbox.length; i1++) {
            RESprojectbox[i1].style.width = "95%";
            RESprojectbox[i1].style.height = "550px";
        }
        document.getElementsByTagName("BODY")[0].style.fontSize = "200%"
        
        // for (var ii1=0; ii1<RESprojectcontainer.length; ii1++) {
        //     RESprojectcontainer[ii1].style.width = "100vw";
        // }
        console.log("Site updated to Mobile!")
    }
    else {
        for (var i2 = 0; i2 < RESprojectbox.length; i2++) {
            RESprojectbox[i2].style.width = "410px";
            RESprojectbox[i2].style.height = "275px";
        }
        document.getElementsByTagName("BODY")[0].style.fontSize = "100%"
        // for (var ii2=0; ii2<RESprojectcontainer.length; ii2++) {
        //     RESprojectcontainer[ii2].style.width = "80vw";
        // }
        console.log("Site updated to PC!")
    }
}

// Both work the same
// window.addEventListener("resize", updateResponsiveness);
window.onresize = function() {updateResponsiveness();}

// Basic responsive window.onresize =

// Theme toggle handler
// Toggles favicon, body class and theme buttons
// FAVICON TOGGLE WILL ONLY WORK ON A LOCAL DEPLOYMENT
function toggleTheme() {
    var body = document.getElementsByTagName("BODY")[0];
    var lightbtn = document.getElementById("lightbtn");
    var darkbtn = document.getElementById("darkbtn");

    // CODE var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    // LIGHT MODE
    if (body.classList == "dark") {
        body.classList.remove("dark");
        body.classList.add("light");
        lightbtn.style.display = "none";
        darkbtn.style.display = "block";
        document.getElementById("social4").style.color = "#333";
        // CODE link.href = 'img/favicon1.png'; //Dark foreground, light background
    }

    // DARK MODE
    else {
        body.classList.remove('light');
        body.classList.add('dark');
        darkbtn.style.display = "none";
        lightbtn.style.display = "block";
        document.getElementById("social4").style.color = "#FFFFFF";
        // CODE link.href = "img/favicon.png2"; //Light foreground, dark background
    }
    // CODE document.getElementsByTagName('head')[0].appendChild(link);
}

// Navigation buttons handler
function changePage(id) {
    id = id.split('btn')[0];
    if (id == "home") {
        document.getElementById("home").style.display = "block";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "none";
    }
    else if (id == "projects") {
        document.getElementById("home").style.display = "none";
        document.getElementById("projects").style.display = "block";
        document.getElementById("about").style.display = "none";
    }
    else if (id == "about") {
        document.getElementById("home").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "block";
    }
}

// Used to copy discord username to clipboard. Ripped from https://www.30secondsofcode.org/js/s/copy-to-clipboard
const copy = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    alert('Copied to clipboard!');
};

// Preperation stuff
function main()
{
    document.getElementById("lightbtn").style.display = "block";
    document.getElementById("home").style.display = "block";
    // var scriptdir = document.getElementById('script').src.split("/")
    // const scriptname = scriptdir[scriptdir.length - 1]
    // console.log(scriptname + " has loaded successfully!")
    updateResponsiveness();
    console.log("%cscript.js has loaded successfully!", "color: #008000");
}
