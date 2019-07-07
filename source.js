var hoverEffect = false; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks

blockName[1] = 'Home';
blockName[2] = 'Various';
blockName[3] = 'Info';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();


// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// 1. BLOCK
bookmark[0][0] = {
'title':'Facebook',
'url':'https://facebook.com',
'thumb':'facebook.png'
};
bookmark[0][1] = {
'title':'Instagram',
'url':'https://instagram.com',
'thumb':'instagram.png'
};
bookmark[0][2] = {
'title':'Onet',
'url':'https://onet.pl',
'thumb':'onet.png'
};
bookmark[0][3] = {
'title':'AntyWeb',
'url':'https://antyweb.pl',
'thumb':'antyweb.png'
};
bookmark[0][4] = {
'title':'Wykop',
'url':'https://wykop.pl',
'thumb':'wykop.png'
};
bookmark[0][5] = {
'title':'GMail',
'url':'https://gmail.com',
'thumb':'gmail.png'
};
bookmark[0][6] = {
'title':'pepper',
'url':'https://pepper.pl',
'thumb':'pepper.png'
};
bookmark[0][7] = {
'title':'Allegro',
'url':'https://allegro.pl',
'thumb':'allegro.png'
};
bookmark[0][8] = {
'title':'AliExpress',
'url':'https://aliexpress.com',
'thumb':'aliexpress.png'
};
bookmark[0][9] = {
'title':'Netflix',
'url':'https://netflix.com',
'thumb':'netflix.png'
};
bookmark[0][10] = {
'title':'YouTube',
'url':'https://youtube.com',
'thumb':'youtube.png'
};
bookmark[0][11] = {
'title':'RMF ON',
'url':'https://rmfon.pl/play,6',
'thumb':'rmfon.png'
};
// end of 1. BLOCK
// 2. BLOCK
bookmark[1][0] = {
'title':'Lublin112',
'url':'https://lublin112.pl',
'thumb':'lublin112.png'
};
bookmark[1][1] = {
'title':'Niebezpiecznik',
'url':'https://niebezpiecznik.pl',
'thumb':'niebezpiecznik.png'
};
bookmark[1][2] = {
'title':'Mistrzowie',
'url':'https://mistrzowie.org',
'thumb':'mistrzowie.png'
};
bookmark[1][3] = {
'title':'Sadistic',
'url':'https://sadistic.pl',
'thumb':'sadistic.png'
};
bookmark[1][4] = {
'title':'JoeMonster',
'url':'https://joemonster.org',
'thumb':'joemonster.png'
};
bookmark[1][5] = {
'title':'RuneScape',
'url':'http://runescape.com',
'thumb':'runescape.png'
};
bookmark[1][6] = {
'title':'DobreProgramy',
'url':'https://dobreprogramy.pl',
'thumb':'dobreprogramy.png'
};
bookmark[1][7] = {
'title':'Chip',
'url':'https://chip.pl',
'thumb':'chip.png'
};
bookmark[1][8] = {
'title':'Android',
'url':'http://android.com.pl',
'thumb':'android.png'
};
bookmark[1][9] = {
'title':'DarkW',
'url':'https://darkw.pl',
'thumb':'darkw.png'
};
bookmark[1][10] = {
'title':'P2mForum',
'url':'https://p2mforum.info',
'thumb':'p2mforum.png'
};
bookmark[1][11] = {
'title':'WinClub',
'url':'https://winclub.pl',
'thumb':''
};
// end of 2. BLOCK
// 3. BLOCK
bookmark[2][0] = {
'title':'LinkedIn',
'url':'https://www.linkedin.com/',
'thumb':'linkedin.png'
};
bookmark[2][1] = {
'title':'lifehacker',
'url':'http://lifehacker.com/',
'thumb':'lifehacker.png'
};
bookmark[2][2] = {
'title':'IMDb',
'url':'http://www.imdb.com/',
'thumb':'imdb.png'
};
bookmark[2][3] = {
'title':'Last.fm',
'url':'https://www.last.fm/',
'thumb':'lastfm.png'
};
bookmark[2][4] = {
'title':'wikipedia',
'url':'https://pl.wikipedia.org/',
'thumb':'wikipedia.png'
};
bookmark[2][5] = {
'title':'StackOverflow',
'url':'https://stackoverflow.com/',
'thumb':'stackoverflow.png'
};
bookmark[2][6] = {
'title':'engadged',
'url':'https://www.engadget.com/',
'thumb':'engadget.png'
};
bookmark[2][7] = {
'title':'dropbox',
'url':'https://www.dropbox.com/',
'thumb':'dropbox.png'
};
bookmark[2][8] = {
'title':'weather',
'url':'https://www.weather.com/',
'thumb':'weather.png'
};
bookmark[2][9] = {
'title':'Reddit',
'url':'https://www.reddit.com/',
'thumb':'reddit.png'
};
bookmark[2][10] = {
'title':'BBC news',
'url':'https://www.bbc.com/news',
'thumb':'bbcnews.png'
};
bookmark[2][11] = {
'title':'Eurosport',
'url':'https://www.eurosport.com/',
'thumb':'eurosport.png'
};
// end of 3. BLOCK