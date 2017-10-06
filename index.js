// Games array 
let games = [
    {'publisher' : 'Namco', 'avatar' : 'https://archive.org/services/img/msdos_Pac-Man_1983', 'subject' : 'Pac-Man', 'body' : 'Pac-Man stars a little, yellow dot-muncher who works his way around to clear a maze of the dots.', 'date' : '1983', 'ifrmSrc' : 'https://archive.org/embed/msdos_Pac-Man_1983'},
    // game[1] is deleted - need to make it not deleted
    {'publisher' : 'Broderbund', 'avatar' : 'https://archive.org/services/img/msdos_Where_in_the_World_is_Carmen_Sandiego_1985', 'subject' : 'Where in the World is Carmen Sandiego', 'body' : 'Capture the thief that stole the artifact using clues dealing with your knowledge of geography.', 'date' : '1985', 'ifrmSrc' : 'https://archive.org/embed/msdos_Where_in_the_World_is_Carmen_Sandiego_1985'},
    {'publisher' : 'Ingenuity', 'avatar' : 'https://archive.org/services/img/msdos_Crosscountry_Canada_1991', 'subject' : 'Crosscountry Canada', 'body' : 'Drive an 18-wheel truck picking up and delivering a variety of commodities with typed-in commands.', 'date' : '1991', 'ifrmSrc' : 'https://archive.org/embed/msdos_Crosscountry_Canada_1991'},

];

// email = emails[0];
// email = emails[1];
// email = emails[2];

let selectedGame = 0;


// collecting all elements 
let linkTrash = document.getElementById(`linkTrash`);
let linkInbox = document.getElementById(`inbox`);
let linkCompose = document.getElementById(`compose`);

// trash click function
linkTrash.addEventListener(`click`, function(e) { 
    e.preventDefault();
    let filtered = games.filter( game => game.deleted);
    selectedGame = 0;
    render(filtered);
});

// local storage function
function setLocalStorage() {
    localStorage.setItem(`items`, JSON.stringify(games));
}

// inbox click function
linkInbox.addEventListener(`click`, function(e) {
    e.preventDefault();
    let inbox = games.filter( game => !game.deleted)
    selectedGame = 0;
    render(inbox);
});

// Try and see if this gets the trash to work 
// linkTrash.addEventListener('click', trashOpen);

// function trashOpen(e) {
//     e.preventDefault();
//     let html_trashOpen = `main`;
    
// let main = document.getElementById('main'); 
// main.innerHTML = html_Trash;

linkCompose.addEventListener(`click`, composeForm); 
    
// documnt.forms.newemail.subject.value

// compose new email form
function composeForm(e) {
    e.preventDefault();
    let html_composeForm = `
    <form id="newgame" class="pure-form pure-form-aligned">
    <fieldset>
        <div class="pure-control-group">
            <label for="title">Game Title</label>
            <input id="subject" type="text" placeholder="Game Title">
        </div>

        <div class="pure-control-group">
            <label for="publisher">Publisher</label>
            <input id="publisher" type="text" placeholder="Publisher">
        </div>

        <div class="pure-control-group">
            <label for="year">Year Published</label>
            <input id="year" type="year" placeholder="Year Published">
        </div>

        <div class="pure-control-group">
            <label for="body">Description</label>
            <input id="body" type="text" placeholder="Description">
        </div>

        <div class="pure-control-group">
            <label for="avatar">Avatar URL</label>
            <input id="avatar" type="img" placeholder="">
        </div>

        <div class="pure-control-group">
            <label for="Iframe">Iframe URL</label>
            <input id="Iframe" type="link" placeholder="">
        </div>

        <div class="pure-controls">
            <button id="send" type="submit" class="pure-button pure-button-primary">Send</button>
        </div>
    </fieldset>
</form>
    `;

    let main = document.getElementById(`main`); 
    main.innerHTML = html_composeForm;

    let send = document.getElementById(`newgame`);
    send.addEventListener(`submit`, function(e) {
        e.preventDefault();

        let date = new Date();

        let obj_newGame = {
            subject : document.forms.newgame.subject.value,
            publisher : document.forms.newgame.publisher.value,
            // year : document.forms.newemail.year.value,
            body : document.forms.newgame.body.value,
            date : date.toDateString(),
            // time : date.toLocaleTimeString(),
            avatar : `https://archive.org/services/img/msdos_Monopoly_Deluxe_1992`,
            ifrmSrc : `https://archive.org/embed/msdos_Monopoly_Deluxe_1992`
        }

        games.unshift(obj_newGame);

        setLocalStorage();

        // games[this.dataset.id].deleted = true;

        linkInbox.click();
    });
}

// show games 
function render(games) {

    // Display email contents 
    let displayGameSnippet = `
        ${games.map((game, index) => `
            <div class="email-item pure-g" data-id="${index}">
                <div class="pure-u">
                    <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${game.avatar}">
                </div>

                <div class="pure-u-3-4">
                    <h5 class="email-name">${game.publisher}</h5>
                    <h4 class="email-subject">${game.subject}</h4>
                    <p class="email-desc">
                        ${game.body.length > 100 ? `${game.body.substr(0, 99)}...` : game.body}
                    </p>
                </div>
            </div>
        ` ).join('')} 
        
    `;
    
    return displayGameSnippet;
}

let el = document.getElementById(`list`);
el.innerHTML = render(games);

initialize(games);


function initialize(games) {
    let gameList = [...(document.querySelectorAll(`[data-id]`))];
    gameList.map( (game, index) => game.addEventListener(`click`, function(e) {

        gameList[selectedGame].classList.remove(`email-item-selected`);
        game.classList.add(`email-item-selected`);
        selectedGame = index;
        showGameBody(index, games);
    }));

    // if trash is empty show message "No emails" 
    if (games.length) {
        gameList[selectedGame].classList.add(`email-item-selected`);
        showGameBody(selectedGame, games);
    } else {
        let main = document.getElementById(`main`);
        main.innerHTML = `<h1 style="color: #aaa">No emails</h1>`;
    }
}

function showGameBody(idx, games) {
    let displayGameBody = `
        <div class="email-content">
            <div class="email-content-header pure-g">
                <div class="pure-u-1-2">
                    <h1 class="email-content-title">${games[idx].subject}</h1>
                    <p class="email-content-subtitle">
                        From <a>${games[idx].publisher}</a> <span>${games[idx].date}</span>
                    </p>
                </div>

                <div class="email-content-controls pure-u-1-2">
                    <button id="delete" class="secondary-button pure-button" data-id="${idx}">${games[idx].deleted ? 'Deleted': 'Delete'}</button>
                    <button class="secondary-button pure-button">Forward</button>
                    <button class="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div class="email-content-body">
                <iframe src="${games[idx].ifrmSrc}" width = "600px" height = "500px"></iframe></div> 
            </div>
        </div>
    `;

    let main = document.getElementById(`main`);
    main.innerHTML = displayGameBody;

    
    ///////// see if this works to show inbox
    // let linkInbox = document.getElementById(`inbox`);

    // linkInbox.addEventListener(`click`, function(e) {
    //     e.preventDefault();
    //     selectedGame = 0;
    //     render(inbox);
    // });

    // inbox.innerHTML = idx;
    
    

    let btn_delete = document.getElementById(`delete`);
    btn_delete.addEventListener(`click`, () => deleteGame(btn_delete.dataset.id, games)); 
}

// show email in trash if deleted 
function deleteGame(index, games) {
    if (!games[index].deleted) {
    games[index].deleted = true;

    setLocalStorage();

        // games[this.dataset.id].deleted = true;

        let inbox = games.filter( game => !game.deleted)
        // selectedEmail = 0;
        render(inbox);
    } else {
        delete games[index].deleted;
    }
}



// let gameColumn = document.getElementById('list'); 
// gameColumn.innerHTML = displayGameSnippet;

// let displayGameSnippet = games.map((game, index) => `<h1>${game.name}</h1>`)     
// gameColumn.innerHTML = displayGameSnippet;


if (localStorage.getItem(`items`)) {
    games = JSON.parse(localStorage.getItem(`items`));
    let filtered = games.filter( game => !game.deleted);
    render(filtered);
} else {
    render(games);
}

render(games);

// render(filtered);



// Assignment 1 Parts to be used to try and see if the compose form works 
// Game Title: Monopoly
// Publisher: VirginGames
// Year Published: 1992
// Description: the classic board game
// Avatar: https://archive.org/services/img/msdos_Monopoly_Deluxe_1992
// iframe URL: https://archive.org/embed/msdos_Monopoly_Deluxe_1992