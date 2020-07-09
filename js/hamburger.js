function menuDrop(){
    var nbar = document.getElementById('ndrop');
    var tgt = document.getElementById('mobile-menu')
    tgt.appendChild(nbar)
    if(nbar.className === 'menu'){
        nbar.className += ' expand';
    }
    else{
        nbar.className = 'menu';
    }
}

function menuToggle(){
    var nbar = document.getElementById('ndrop');
    if(nbar.className === 'menu'){
        nbar.className += ' expand';
    }
    else{
        nbar.className = 'menu';
    }
}

function switchTab(ev, target, tabclass){
    var i
    const ACTIVE = " active"
    const TAB = "tab "
    const TABCONTENT = "tabcontent "

    var tabcontent = document.getElementsByClassName(TABCONTENT + tabclass);
    for( i = 0; i < tabcontent.length; i++ ){
        tabcontent[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName(TAB + tabclass)
    for( i = 0; i < tabs.length; i++ ){
        tabs[i].className = TAB + tabclass
    }

    document.getElementById(target).style.display = "block";
    ev.currentTarget.className += ACTIVE
}

function closeGdprBanner() {
    document.getElementById('gdpr').style.display = 'none'
}

function showGdprBanner() {
    document.getElementById('gdpr').style.display = 'block'
}

function gdprOK(){
    // GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-162948019-2');

    console.log('gdprOK');
}

function gdprNOK(){
    console.log('gdprNOK');
    // GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-162948019-2', {
        'client_storage' : 'none'
    });

}

function cookieDecision() {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('accepting'));
}

window.addEventListener('load', function(event){
    var decn = cookieDecision();

    if(decn) {
        closeGdprBanner();
        const accept = decn.split('=')[1];
        accept == 1 ? gdprOK() : gdprNOK();
        return;
    }

    document.getElementById('reject').addEventListener('click', function (){
        document.cookie = 'accepting=0;path=/;samesite=strict;';
        gdprNOK();
        closeGdprBanner();
    });

    document.getElementById('accept').addEventListener('click', function (){
        document.cookie = 'accepting=1;path=/;max-age=31536000;samesite=strict;';
        gdprOK();
        closeGdprBanner();
    });

    showGdprBanner();

});

window.addEventListener('unload', function(event){
    var decn = cookieDecision();
    if(decn == null){
        gdprNOK()
    }
})

