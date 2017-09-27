// Assignment 1 Parts
let games = [
    {'publisher' : 'Namco', 'avatar' : 'https://archive.org/services/img/msdos_Pac-Man_1983', 'subject' : 'Pac-Man', 'body' : 'Pac-Man stars a little, yellow dot-muncher who works his way around to clear a maze of the dots.', 'date' : '1983', 'ifrmSrc' : 'https://archive.org/embed/msdos_Pac-Man_1983'},
    {'publisher' : 'Broderbund', 'avatar' : 'https://archive.org/services/img/msdos_Where_in_the_World_is_Carmen_Sandiego_1985', 'subject' : 'Where in the World is Carmen Sandiego', 'body' : 'Capture the thief that stole the artifact using clues dealing with your knowledge of geography.', 'date' : '1985', 'ifrmSrc' : 'https://archive.org/embed/msdos_Where_in_the_World_is_Carmen_Sandiego_1985'},
    {'publisher' : 'Ingenuity', 'avatar' : 'https://archive.org/services/img/msdos_Crosscountry_Canada_1991', 'subject' : 'Crosscountry Canada', 'body' : 'Drive an 18-wheel truck picking up and delivering a variety of commodities with typed-in commands.', 'date' : '1991', 'ifrmSrc' : 'https://archive.org/embed/msdos_Crosscountry_Canada_1991'},

];

// email = emails[0];
// email = emails[1];
// email = emails[2];


function render(games) {

    let displayEmailSnippet = `
        ${games.map( game => `
            <div class="email-item email-item-selected pure-g">
                <div class="pure-u">
                    <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="${game.avatar}">
                </div>

                <div class="pure-u-3-4">
                    <h5 class="email-name">${game.publisher}</h5>
                    <h4 class="email-subject">${game.subject}</h4>
                    <p class="email-desc">
                        ${game.body}
                    </p>
                </div>
            </div>
        ` )}
        
    `;

    return displayEmailSnippet;
}

let el = document.getElementById('list');
el.innerHTML = render (games);



// let emailColumn = document.getElementById('list');
// console.log(email)
// // emailColumn.innerHTML = snippet;

// let snippet = emails.map( email => `<h1>${email.name}</h1>`)
// emailColumn.innerHTML = snippet;


// render(emails);



// Assignment 1 Parts
// Game Title: Monopoly
// Publisher: VirginGames
// Year Published: 1992
// Description: the classic board game
// Avatar: https://archive.org/services/img/msdos_Monopoly_Deluxe_1992
// iframe URL: https://archive.org/embed/msdos_Monopoly_Deluxe_1992