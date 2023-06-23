// =================================================================================================================== Button Hover Effect Variables
var pointerX = -1;
var curBtn = null;

// =================================================================================================================== Logo and core message animation Variables
const lerp = (x, y, a) => x * (1 - a) + y * a;
const FPS = 60;
const FRAME_DURATION = 1000 / 60;
const MESSAGE = "We Make Video Games And Tools For Developers";
const ANIMATION_DURATION = 1500; // Milliseconds
const LOGO_FRAME_DURATION_0 = 16; // Milliseconds // (Initial Animation speed)
const LOGO_FRAME_DURATION_1 = 160; // Milliseconds // (Final Animation speed)

var currentAnimationTime = 0;
var nextLogoTime = LOGO_FRAME_DURATION_0;
var currentLogoFrame = 1; // 1 or 2 or 3 // From svg file name

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
    PageOnLoad();
};

var animationIntervalID = setInterval(function() {
    UpdateAnimation();
  }, FRAME_DURATION);

function triangleGotoCreationsOnClick()
{
    document.getElementById('creations').scrollIntoView({
        behavior: 'smooth'
      });
}

function triangleGotoWelcomeOnClick()
{
    document.getElementById('welcome').scrollIntoView({
        behavior: 'smooth'
      });
}

function triangleGotoContactOnClick()
{
    document.getElementById('welcome').classList.add("welcome-slide-to-left");
    document.getElementById('contact').classList.add("contact-slide-to-left");
}

function triangleGotoWelcomeFromContactOnClick()
{
    document.getElementById('welcome').classList.remove("welcome-slide-to-left");
    document.getElementById('contact').classList.remove("contact-slide-to-left");
}

function triangleGotoJoinOnClick()
{
    document.getElementById('welcome').classList.add("welcome-slide-to-right");
    document.getElementById('join').classList.add("join-slide-to-right");
}

function triangleGotoWelcomeFromJoinOnClick()
{
    document.getElementById('welcome').classList.remove("welcome-slide-to-right");
    document.getElementById('join').classList.remove("join-slide-to-right");
}

function PageOnLoad()
{
    document.getElementById('logo').classList.add('logo-neon');
}

function UpdateAnimation()
{
    // Update animation time
    currentAnimationTime += FRAME_DURATION;
    var t = currentAnimationTime / ANIMATION_DURATION;
    var logoFrameDuration = lerp(LOGO_FRAME_DURATION_0, LOGO_FRAME_DURATION_1, t);
    
    // Check animation end
    if (currentAnimationTime >= ANIMATION_DURATION)
    {
        document.getElementById('message').innerHTML = MESSAGE;
        document.getElementById('message').classList.add("message-quiet");
        clearInterval(animationIntervalID);
        return;
    }
    
    // Core message animation
    var c = Math.round(MESSAGE.length * t);
    document.getElementById('message').innerHTML = MESSAGE.substring(0,c) + GetRandomString(1) + "<span class='msg-cursor' id='msg-cursor'>|</span>";
    
    // Logo animation
    if (currentAnimationTime >= nextLogoTime)
    {
       nextLogoTime = currentAnimationTime + logoFrameDuration;
    }
}

function GetRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}