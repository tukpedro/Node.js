# pokemon-api

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Example](#example)

## About <a name = "about"></a>

API to search for a specific pokemon, by consuming the official Pokemon API, filtering data and returning interesting data for mostly Pokemon players. 

## Getting Started <a name = "getting_started"></a>

You just need to download it and run after the instructions below

### Prerequisites

1. Node.js
2. Yarn


### Installing

After downloading the project you need to install the dependencies. Open the terminal an run:

```
yarn
```

After installing the dependencies, just run the project with:

```
yarn start
```

## Usage <a name = "usage"></a>

Request:

```bash
localhost:<port>/pokemon-name
```
or

```bash
localhost:<port>/pokemon-number
```

Response:
```json
{
    "name": "pokemon-name",
    "id": "pokemon-number",
    "types": [
        "pokemon-type"
    ],
    "habitat": "pokemon-habitat",
    "sprites": {
        "front_default": "pokemon-img",
        "back_default": "pokemon-img",
        "front_shiny": "pokemon-img",
        "back_shiny": "pokemon-img"
    },
    "evolution_chain": {
        "first_form": {
            "name": "pokemon-name",
            "evolution_trigger": "evolution_trigger",
            "evolution_level": "level"
        },
        "final_form": {
            "name": "pokemon-name",
        }
    },
    "moves": [
        "move_1",
        "move_2",
        "move_3",
        "...",
    ]
}
```

## Example <a name = "example"></a>

Request:

```bash
localhost:<port>/charmander
```
or

```bash
localhost:<port>/4
```

Response:
```json
{
    "name": "Charmander",
    "id": 4,
    "types": [
        "Fire"
    ],
    "habitat": "Mountain",
    "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png"
    },
    "evolution_chain": {
        "first_form": {
            "name": "Charmander",
            "evolution_trigger": "level-up",
            "evolution_level": 16
        },
        "second_form": {
            "name": "Charmeleon",
            "evolution_trigger": "Level-up",
            "evolution_level": 36
        },
        "final_form": {
            "name": "Charizard"
        }
    },
    "moves": [
        "Mega-punch",
        "Fire-punch",
        "Thunder-punch",
        "Scratch",
        "Swords-dance",
        "Cut",
        "Wing-attack",
        "Mega-kick",
        "Headbutt",
        "Body-slam",
        "Take-down",
        "Double-edge",
        "Leer",
        "Bite",
        "Growl",
        "Ember",
        "Flamethrower",
        "Submission",
        "Counter",
        "Seismic-toss",
        "Strength",
        "Dragon-rage",
        "Fire-spin",
        "Dig",
        "Toxic",
        "Rage",
        "Mimic",
        "Double-team",
        "Smokescreen",
        "Defense-curl",
        "Reflect",
        "Bide",
        "Fire-blast",
        "Swift",
        "Skull-bash",
        "Fury-swipes",
        "Rest",
        "Rock-slide",
        "Slash",
        "Substitute",
        "Snore",
        "Curse",
        "Protect",
        "Scary-face",
        "Belly-drum",
        "Mud-slap",
        "Outrage",
        "Endure",
        "False-swipe",
        "Swagger",
        "Fury-cutter",
        "Attract",
        "Sleep-talk",
        "Return",
        "Frustration",
        "Dynamic-punch",
        "Dragon-breath",
        "Iron-tail",
        "Metal-claw",
        "Hidden-power",
        "Sunny-day",
        "Crunch",
        "Ancient-power",
        "Rock-smash",
        "Beat-up",
        "Heat-wave",
        "Will-o-wisp",
        "Facade",
        "Focus-punch",
        "Helping-hand",
        "Brick-break",
        "Secret-power",
        "Weather-ball",
        "Air-cutter",
        "Overheat",
        "Rock-tomb",
        "Aerial-ace",
        "Dragon-claw",
        "Dragon-dance",
        "Natural-gift",
        "Fling",
        "Flare-blitz",
        "Dragon-pulse",
        "Dragon-rush",
        "Shadow-claw",
        "Fire-fang",
        "Captivate",
        "Hone-claws",
        "Flame-burst",
        "Flame-charge",
        "Round",
        "Echoed-voice",
        "Incinerate",
        "Acrobatics",
        "Inferno",
        "Fire-pledge",
        "Dragon-tail",
        "Work-up",
        "Confide",
        "Power-up-punch"
    ]
}
```