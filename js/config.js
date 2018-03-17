/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Последняя Война";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 10;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "YXYYCFaUUHQ", name: "Noisestorm - Heist"},
	{youtube: "YnwsMEabmSo", name: "Marshmello - Alone"},
	{youtube: "QMokMQ8Bu7Y", name: "Pegboard Nerds & Tristam - Razor Sharp"},
	{youtube: "YnopHCL1Jk8", name: "O-Zone - Dragostea Din Tei"},
	{youtube: "JS7S2dVPjXU", name: "Mattafix - Big City Life"},
	{youtube: "KlujizeNNQM", name: "Snoop Dogg - Smoke Weed Everyday"},
	{youtube: "JU9TouRnO84", name: "Rick Ross - Hustlin'"},
	{youtube: "WwoCsaJ5w4A", name: "DJ Striden – Level One"},
	{youtube: "UbQgXeY_zi4", name: "Caravan Palace - Lone Digger"},
	{youtube: "r_9Kf0D5BTs", name: "Twenty One Pilots - Heavydirtysoul"},
	{youtube: "SNE2oCZH_4k", name: "M.O.O.N. - Hydrogen"},
	{youtube: "AVblOqZBlJw", name: "M.O.O.N. - Crystals"},
	{youtube: "8wXRvvGr8Ug", name: "M.O.O.N - Paris"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 20;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Добро пожаловать на наш сервер!" , 
"Мы надеемся, что вам понравится наш сервер!" , 
"Легко набрать тысячу солдат—новобранцев, но где найти хорошего генерала?" , 
" От солдата требуется прежде всего выносливость и терпение; храбрость — дело второе" , 
"Почти каждый генерал начинает с солдата и лишь потом берется за офицеров" , 
"Чтобы стать хорошим солдатом, нужно отказаться от всех умных мыслей."
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
