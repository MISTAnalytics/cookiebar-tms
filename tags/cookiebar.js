<style>
.cookiebarFooter {
    position: fixed;
    left: 0;
    bottom: 0;
    height:40px;
    width: 100%;
    background-color: #633b1b;
    opacity: 0.85;
    filter: alpha(opacity=85); /* For IE8 and earlier */
    color: white;
    z-index:9999999999999999999999999;
    text-align: center;
    line-height: 40px;
    font-size:0.85em;
}
.cookiebarFooter span {
   display: inline-block;
  vertical-align: middle;
  line-height: normal;
   opacity: 1.0;
    filter: alpha(opacity=100); /* For IE8 and earlier */
}
.customForm-class-inputcookiesawanalytics, .customForm-class-inputcookiesawtracking{
  float:right;

  }
.customForm-class-inputcookiesawanalytics{
  margin-top:-10px;
  }

</style>
<script>
  var cookiebar_seen = localStorage.getItem('cookiebar_seen'); 
  var cookies_analytics = localStorage.getItem('cookies_analytics');
  var cookies_tracking = localStorage.getItem('cookies_tracking');
  var cookies_tracking_cookie_delete = localStorage.getItem('cookies_tracking_cookie_delete');
  
/*if (cookiebar_seen == 1 && cookies_tracking == 1 && jQuery.cookie('cc_cookie_accept') != "cc_cookie_accept" && cookies_tracking_cookie_delete === null)
{
  ckdmn = window.location.hostname.split(".");
  dmn = "; domain=" + ckdmn[ckdmn.length-2] + "." + ckdmn[ckdmn.length-1];
  setCookie('cc_cookie_accept', 'cc_cookie_accept', 365, '/', dmn);
  localStorage.setItem("cookies_tracking_cookie_delete", "1");
}*/
if (cookiebar_seen == 1 && cookies_tracking === null && cookies_analytics === null)
{
  localStorage.setItem("cookies_tracking", "1");
  localStorage.setItem("cookies_analytics", "1");
  dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_accept', eventAction:'implicit', eventLabel:'both'});
 /* ckdmn = window.location.hostname.split(".");
  dmn = "; domain=" + ckdmn[ckdmn.length-2] + "." + ckdmn[ckdmn.length-1];
  setCookie('cc_cookie_accept', 'cc_cookie_accept', 365, '/', dmn);*/
}
if(cookiebar_seen === null)
{
jQuery('body').append('<div class="cookiebarFooter"><span>Deze website maakt gebruik van cookies. Klik <a class="fancybox" href="#popup-cookies">hier</a> voor meer informatie over welke cookies worden geplaatst - <a href="#" id="melding_sluiten">melding sluiten</a></span></div>');
}
jQuery('#popup-departure-update-notification').after('<div id="popup-cookies" class="lightbox"> <div class="wrap"> <div class="mail-form"> <div class="heading ie-fix"> <strong class="title">Cookie Instellingen</strong></div><div style="padding-bottom:15px; border-bottom:1px solid grey;"><h3>Functionele cookies </h3>Functionele cookies zorgen ervoor dat deze website goed werkt.</div><div style="padding-bottom:15px;padding-top:10px; border-bottom:1px solid grey;"><h3 id="analytische_cookies_cookiebar">Analytische cookies </h3>Dit zijn cookies waarmee we het gebruik van onze website kunnen meten.</div><div style="padding-bottom:15px;padding-top:10px;"><h3 id="target_cookies_cookiebar">Advertentie cookies</h3>Dit zijn cookies van onszelf en van derden waarmee advertenties van Sawadee afgestemd kunnen worden op jouw internetgedrag.</div><div><span href="#" class="btn-02 sla-voorkeuren-op" style="margin-bottom:15px;"><span>Sla voorkeuren op</span></span></div></div></div></div>'); 
jQuery("#melding_sluiten").on( "click", function() {
   jQuery(".cookiebarFooter").css("visibility","hidden");
   dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_melding_sluiten', eventAction:'explicit', eventLabel:'-'});
});
  
if(cookies_analytics == 0)
{
 jQuery("#analytische_cookies_cookiebar").after('<input type="checkbox" class="inputcookiesawanalytics" />');
}
else
{
 jQuery("#analytische_cookies_cookiebar").after('<input type="checkbox" class="inputcookiesawanalytics" checked/>');
}
  
if(cookies_tracking == 0)
{
 jQuery("#target_cookies_cookiebar").after('<input type="checkbox" class="inputcookiesawtracking" />');
}
else
{
 jQuery("#target_cookies_cookiebar").after('<input type="checkbox" class="inputcookiesawtracking" checked/>');
}
  localStorage.setItem("cookiebar_seen", "1");  
jQuery(".sla-voorkeuren-op").on( "click", function() {
  jQuery(".fancybox-close" ).trigger("click"); 
  jQuery(".cookiebarFooter").css("visibility","hidden");
  if (jQuery('input.inputcookiesawanalytics').is(':checked')) {
    localStorage.setItem("cookies_analytics", "1");
     dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_accept', eventAction:'explicit', eventLabel:'analytics'});
  }
  else
  {
    localStorage.setItem("cookies_analytics", "0");
       dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_dont_accept', eventAction:'explicit', eventLabel:'analytics'});

  }
  if (jQuery('input.inputcookiesawtracking').is(':checked')) {
    localStorage.setItem("cookies_tracking", "1");
         dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_accept', eventAction:'explicit', eventLabel:'tracking'});
  }
  else
  {
      localStorage.setItem("cookies_tracking", "0");
           dataLayer.push({event:'cookiebar', eventCategory:'cookiebar_dont_accept', eventAction:'explicit', eventLabel:'tracking'});
  }
});
</script>
