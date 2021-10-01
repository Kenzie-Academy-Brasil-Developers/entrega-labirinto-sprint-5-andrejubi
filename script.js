const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const main = document.getElementById('main');

let maps = [];
for (let i = 0; i < map.length; i++) {
    maps.push(map[i].split(''));
}
console.log(maps)
for (let i = 0; i < maps.length; i++) {
    for (let j in maps[i]) {
        if (maps[i][j] === 'W') {
            let div = document.createElement('div')
            div.id = `run${i}-${j}`
            main.appendChild(div);
        }

        if (maps[i][j] === ' ') {
            let sec = document.createElement('section')
            sec.id = `run${i}-${j}`
            sec.classList.add('run')
            main.appendChild(sec);
        }

        if (maps[i][j] === 'S') {
            let sec = document.createElement('section')
            sec.id = `run${i}-${j}`
            sec.classList.add('start');
            main.appendChild(sec);
        }

        if (maps[i][j] === 'F') {
            let sec = document.createElement('section')
            sec.id = `run${i}-${j}`
            sec.classList.add('end');
            main.appendChild(sec);
        }
    }
}

const s = document.getElementById('run9-0')
let player = document.createElement('img');
player.id = 'player';
player.src = 'images.jpeg'
s.appendChild(player);

let line = 9
let c = 0
let wins = document.getElementById('wins')

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        if(maps[line - 1][c] === ' ') {
            document.getElementById(`run${line - 1}-${c}`).appendChild(player);
            c = c;
            line = line - 1;
        }        
    }

    if (event.key === 'ArrowDown') {
        if (maps[line + 1][c] === ' ') {
            document.getElementById(`run${line + 1}-${c}`).appendChild(player);
            c = c;
            line = line + 1;
        }
    }

    if (event.key === 'ArrowRight') {
        if (maps[line][c + 1] === ' ' || maps[line][c + 1] === 'F') {
            document.getElementById(`run${line}-${c + 1}`).appendChild(player);
            line = line;
            c = c + 1;
        }
        
        if (maps[line][c] === 'F') {
            wins.style.display = 'initial';
        }
    }

    if (event.key === 'ArrowLeft') {
        if(maps[line][c - 1] === ' ') {
            document.getElementById(`run${line}-${c - 1}`).appendChild(player);
            line = line;
            c = c - 1;
        }
    }
})