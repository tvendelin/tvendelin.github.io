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

function switchTab(ev, target){
    var i
    const ACTIVE = " active"
    const TAB = "tab"
    const TABCONTENT = "tabcontent"

    var tabcontent = document.getElementsByClassName(TABCONTENT);
    for( i = 0; i < tabcontent.length; i++ ){
        tabcontent[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName(TAB);
    for( i = 0; i < tabs.length; i++ ){
        tabs[i].className = TAB
    }

    document.getElementById(target).style.display = "block";
    ev.currentTarget.className += ACTIVE
}
