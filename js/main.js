function appear(){
	sitesdiv = document.getElementById("sites");
	sitesdiv.style.display="block";
	searchdiv = document.getElementById("search");
	searchdiv.style.display="block";

	//only do for page 0 because other pages are hidden by default
	for(var i=0;i<sitesdiv.childNodes[0].childNodes.length;i++){
		sitesdiv.childNodes[0].childNodes[i].style.display="inline-block";
	};
}

var config =
{
    "sites":
    [
		{ "url": "https://www.google.be/",                                "text": "GOOGLE" },
        { "url": "http://facebook.com/",                             "text": "FB" },
        { "url": "https://www.youtube.com/",                              "text": "YT" },
        { "url": "https://www.messenger.com/",                                "text": "SMS" },
		{ "url": "https://docs.google.com/spreadsheets/d/1iXquVwsTdNzzXkIJISu4x67eLrNEk27P2o-vYUP-YMQ/edit#gid=0",                                "text": "SHEET" },
        { "url": "https://mijn.telenet.be/mijntelenet/login/login.do?goto=https%3A%2F%2Fmijn.telenet.be%2Fmijntelenet%2Fnavigation%2Fnavigation.do%3Ffamily%3DDEFAULT%26identifier%3DDEFAULT",         			 "text": "NET" },
		{ "url": "http://gmail.com/",                                "text": "MAIL" },
		{ "url": "https://www.reddit.com/r/2007scape/",                                "text": "REDDIT" },
        { "url": "https://drive.google.com/drive/my-drive",                    "text": "DRIVE" },
		{ "url": "https://www.copterlabs.com/creating-an-app-from-scratch-part-2/",         			 "text": "APP" },
        { "url": "https://login.ugent.be/login?service=https%3A%2F%2Fminerva.ugent.be%2Fplugin%2Fcas%2Flogincas.php",                               "text": "MINERVA"},
		{ "url": "https://login.ugent.be/login?service=https%3A%2F%2Fprip.ugent.be%2Fmodule.php%2Fcas%2Flinkback.php%3FstateID%3D_9dfcb292adcceee2da2b7a8b8ff84d5cf1173c1037%253Ahttps%253A%252F%252Fprip.ugent.be%252Fsaml2%252Fidp%252FSSOService.php%253Fspentityid%253Dhttps%25253A%25252F%25252Foasis.ugent.be%25253A443%25252Foasis-web%25252Fsaml%25252Fmetadata%25252Falias%25252FdefaultAlias%2526cookieTime%253D1549442590&renew=true",         			 "text": "OASIS" },
    ],
    "search":
    {
        "url"  : "https://duckduckgo.com/",
        "name" : "Search...",
        "query": "q"
    }
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12, //used for navigation
        site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

		//navigation stuff
        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }

    var form = d.querySelector("#search form"), text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
});
