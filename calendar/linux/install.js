/* ***************
Desc: Installation script
Last modified: October 2th, 2003
****************** */
const displayName = "Mozilla Calendar";
const name        = "Mozilla/Calendar";
const version     = "0.8";

initInstall(displayName, name, version);

calendarDir = getFolder("Chrome","calendar");

setPackageFolder(calendarDir);

addDirectory( "resources" );

addDirectory("", "components", getFolder( "Components" ), "" );

addDirectory( "", "", "icons", getFolder( "Chrome", "icons" ), "", true );

var err = getLastError();
  
if ( err == SUCCESS ) { 
  
   var calendarContent = getFolder(calendarDir, "content");
   var calendarSkin    = getFolder(calendarDir, "skin");
   var calendarLocale  = getFolder(calendarDir, "locale");

   var returnval = registerChrome(CONTENT | DELAYED_CHROME, calendarContent );
   var returnval = registerChrome(SKIN | DELAYED_CHROME, calendarSkin, "modern/");
   var returnval = registerChrome(SKIN | DELAYED_CHROME, calendarSkin, "classic/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "cs-CZ/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "cy-GB/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "de-AT/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "en-US/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "es-ES/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "fr-FR/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "hu-HU/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "ja-JP/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "lt-LT/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "nl-NL/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "pl-PL/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "pt-BR/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "sk-SK/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "sl-SI/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "sv-SE/");
   var returnval = registerChrome(LOCALE | DELAYED_CHROME, calendarLocale, "wen-DE/");

   err = performInstall();
  
   if ( err == SUCCESS || err == 999 ) {
      alert("The Mozilla Calendar has been successfully installed. \n"
      +"Please restart your application to continue.");
   } else { 
    alert("performInstall() failed. \n"
    +"_____________________________\nError code:" + err);
    cancelInstall(err);
   }
} 
else { 
   alert("Failed to create directory. \n"
    +"You probably don't have appropriate permissions \n"
    +"(write access to <mozilla>/chrome directory). \n"
    +"If you installed Mozilla as root then you need to install calendar as root as well.\n"
    +"Or, you can change ownership of your Mozilla directory to yourself and install calendar."
    +"_____________________________\nError code:" + err);
    cancelInstall(err);
}


