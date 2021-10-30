Hooks.once('ready', async function () {
    if (game.settings.get("VAM_DND5E","ShowIntro") == true) {
        let d = new Dialog({
            title: "Welcome!",
            content: `<div style="text-align: justify;"><h2>Greetings, Stranger! </h2>


<p> Welcome to the VividAdventureMaps Sampler Topdown module!<br><br><b>Current features we're supporting: </b><br>
Action triggered animation macros (<u>Requires MidiQOL</u>)
<br>Death/0Hp triggered death animation macros (<u>Requires C.U.B.</u>)<br> </p>
<p><a href="https://storage.googleapis.com/vividadventuremaps/Documentation/TDTutorial.html">Link to our written setup guide</a> 
  <br>Follow this guide to enable all the features listed above if you like!<br><br></p>
<p><b>Legend for our actor terms: </b><br>
<u>TD:</u> Topdown<br>
<u>Anim:</u>Fully animated with idle/attack and death animations.<br>
<u>Stat:</u>Static images often wildcarded along with death pose.<br>
<u>Stat-L:</u>Static images with a single image and no death pose.<br>
<u>Legacy:</u>Simple looping animations. No macro drivers<br>
<u>FIS:</u>Fill in stats. This is due to non SRD Content licensing.<br>
<u>WC:</u>WildCard. Drop this down multiple times to get random variants!<br>
<br></p>



<p>We are constantly working on improving your experience. If you have any issues or feedback please reach out to us on discord!</p>
<p>This is just but a taste of our complete library with over 75 assets at time of writing! Interested in our complete module? Subscribe to us on patreon for full access!</p>
<p>&#x1F37B Cheers! &#x1F37B<br>
  Thorsten & Kelanel<br>Team Vivid</p>


<hr><h4>
Our Links: 
</h4><p><a href="https://www.patreon.com/vividadventuremaps">Patreon</a><br><a href="https://discord.gg/rD9AWVXkMc"> Discord</a><br><a href="https://www.youtube.com/channel/UCHMgBtzK9rV0HlkW_P0MCYg">Youtube</a><br><a href="https://twitter.com/VividAdvMaps"> Twitter</a><br><a href="https://www.instagram.com/vividadventuremaps/"> Instagram</a></p><p><hr><div style="font-style:italic;">This intro can always be activated in the settings of our menu if you disable it.</div></p></div>`,
            buttons: {
                one: {
                    icon: '<i class="fas fa-clipboard-list"></i>',
                    label: "OK",                    
                },
                two: {
                    icon: '<i class="fas fa-clipboard-check"></i>',
                    label: "Don't show again",
                    callback: () => game.settings.set("VAM_DND5E","ShowIntro", false)                     
                },               
            },
                  
        });
        d.render(true);
    }
})
//YT Link HTML <p><a href="http://jb2a.com/templates/Resources.html">Link to our setup tutorial video</a> 
//<br>This tutorial will help guide you through all the features we've carved out so far to be used with our assets!<br><br></p>


