console.log('Hi');

function switchChannel(channelName) {
	console.log('Tuning into channel', channelName);
	document.getElementById('name').innerHTML=channelName;
	document.getElementById('location').innerHTML='<a href="http://w3w.co/upgrading.never.helps" target="_blank"> upgrading.never.helps</a>';
	document.getElementById('location').style.fontSize='24px';
	$('#list>li').removeClass('selected');
	$(channelName).addClass('selected');
}

function unfillStar() {
	$('#filled').attr("src","http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function fillStar() {
	$('#filled').attr("src","http://ip.lfe.mw.tum.de/sections/star.png");
}

function selectTab(tabId) {
	$('#tab-bar>button').removeClass('selected');
	$(tabId).addClass('selected');
	console.log('Changing to', tabId); 
}

function showEmojis() {
	//$('#emojis').show();
	$('#emojis').toggle();
}
