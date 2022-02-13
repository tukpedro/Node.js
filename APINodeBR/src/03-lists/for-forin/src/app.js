const service = require("./service");

async function main() {
  try {
    const result = await service.getPerson("anak");

    const char = result.results[0].name;

    const homeUrl = result.results[0].homeworld;

    const filmsUrls = result.results[0].films;

    const shipsUrls = result.results[0].starships;

    const films = [];

    const ships = [];

    for (let i in filmsUrls) {
      const film = await service.getData(filmsUrls[i]);
      films.push(film.title);
    }

    for (let i in shipsUrls) {
      const ship = await service.getData(shipsUrls[i]);
      ships.push(ship.name);
    }

    let home = await service.getData(homeUrl);
    home = home.name;

    console.log(`
		Character: ${char};
		Films: ${films};
		Homeworld: ${home};
		Ships: ${ships};
		`);

    let c = null;
    console.log(typeof c)

    return {
      Character: char,
      Films: films,
      Homeworld: home,
      Ships: ships,
    };
  } catch (e) {
    console.error(e);
  }
}

main();
