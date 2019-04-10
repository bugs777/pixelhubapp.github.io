var config = {
	appname:"HustBee",
	title:"Hustbee - Best cloud hosting",
	header:{
		mobileopen:"Open",
        vk:"Group VK",
        helpdeskz:"Knowledge base",
        main:"Home",
        whyus:"Why us",
        tarif:"Tariffs",
        status:"Status of the platform",
        login:"Login",
        register:"Join"
	},
	main:{
		title:"Best cloud hosting",
		p1:"Our services are used by",
		p2:"developers",
		youremail:"Your Email",
		youremailpl:"Enter your Email",
		buttonstart:"Start",
        whyus:"Why us?",
        whyusfull:"We are specialists in the field of cloud technologies.",
        fasthost:"Fast hosting",
        fasthostfull:"Our hosting was independently tested and recognized as the fastest free hosting in the world.",
        unlimitedhost:"Ulimited hosting",
        unlimitedhostfull:"HustBee - it is hosting sites with unlimited disk space and unlimited bandwidth.",
        noadsfull:"Your site is your own, we will never impose advertising on your site.",
        h5title:"In recognition of our hard work and commitment to providing you with the highest quality hosting, we are proud to inform you that iFastNet(the sponsor of HustBee) has received the TMT Telecoms Award 2017 for "Best premium hosting"!",
        sites:"Sites",
        clients:"Active clients",
        servers:"More than 100 servers with 32 cores per node",
        plans:"Tariff plan",
        selectplan:"Select Tariff plan",
        planmore:"All sites are hosted on a grid cluster network, making Your site incredibly fast and resilient to crashes.",
        svgctatitle:"Want to create a website for free?",
        svgctap:"Free and unlimited hosting forever - what could be better?",
        createbutton:"Create"
	},
	plans:{
		econom:"Econom",
		premium:"Premium",
		cp2:"25% discount",
		limitcpu1:"Limited server capacity",
		limitcpu2:"Average server capacity",
		limitcpu3:"Large server capacity",
		unlimtftp:" ∞ user account FTP",
		stoftp:"100 user account FTP",
		oneftp:"1 account FTP",
		stomail:"100 accounts e-mail",
		tenmail:"10 accounts e-mail",
		unlimail:" ∞ accounts e-mail",
		freehits:"50 000 daily hits",
		unlimthits:"Unlimited hits",
		premiumsupport:"Premium support",
		selectbutton:"Select",
		month:"month",
        ptos:"By choosing a tariff, you agree with our",
        ptos2:"terms of service",
	},
	required:{
		email:"Please,enter your Email",
	},
	footer:{
		info:"Information",
		about:"About us",
		company:"Company",
		forum:"Forum",
		contact:"Contacts",
		contactmail:"Contact Email",
		p1:"Cooperation",
		abuse:"Report abuse"
	}
};
var templateScript = $('#app').html();
var template = Handlebars.compile(templateScript);
$(document.body).append(template(config));
document.title = config["title"];
