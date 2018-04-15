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
var l_serverName = "Niik's Sandbox";

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
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/8.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 15000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 5000;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 35;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "S1xzKtMqe_4", name: "Warriors To The End"},
	{youtube: "DbyEN2Uvx-k", name: "Leviathan"},
	{youtube: "V_Uq8t45cwc", name: "All Is Hell That Ends Well"},
	{youtube: "Gm6O0Yi8v3o", name: "Over The Wall"},
	{youtube: "OAtbxybYojw", name: "Heartstone"},
	{youtube: "CgtmerhwbK0", name: "Supremacy"},
	{youtube: "-Vtd2qb1NN0", name: "The Lost Continent"},
	{youtube: "16eREt3db2E", name: "The Fire In Her Eyes"},
	{youtube: "8D1AK1T7LzE", name: "Red Valkyrie"},
	{youtube: "Zg8OG-ASwEo", name: "Skyfall"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Добро пожаловать на наш сервер!" , 
"Мы надеемся, что вам понравится наш сервер!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 60000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
