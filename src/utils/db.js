class Data {
    constructor(place, description, lat, lon) {
        this.place = place;
        this.description = description;
        this.lat = lat;
        this.lon = lon;
    }
}

const place1 = new Data(
    "Nasze mieszkanie w Waiblingen",
    "kliknij aby sprawdzic dojazd",
    48.835399,
    9.3219832
);

const place2 = new Data(
    "Lotnisko w Stuttgarcie",
    "Kliknij zeby sprawdzic dojazd",
    48.6876365,
    9.203382
);

const place3 = new Data("Schlossplatz", "Zobacz dojazd", 48.7784785, 9.177354);

const place4 = new Data(
    "Killesberg",
    "Park z wierza widokowa",
    48.8027721,
    9.1588529
);

const place5 = new Data(
    "Stadtbibliothek",
    "Piekna miejska biblioteka z tarasem widokowym",
    48.7906217,
    9.1788886
);

const place6 = new Data(
    "Rittersport Shop & Museum",
    "Swiat czekolady",
    48.6391417,
    9.1196332
);

const place7 = new Data(
    "Stare miasto Waiblingen",
    "Zabytki i nie tylko",
    48.8313349,
    9.3134918
);

const place8 = new Data(
    "Böblingen",
    "Nasze poprzednie mieszkanie",
    48.6905613,
    8.997566
);

const place9 = new Data(
    "Körber Kopf",
    "Punkt widokowy, winnice",
    48.851387,
    9.3652809
);

const place10 = new Data(
    "Remstalkino",
    "Punkt widokowy, winnice",
    48.7998444,
    9.4037382
);

const place11 = new Data(
    "Max-Eyth-See",
    "Piekne jeziorko w dolinie rzeki",
    48.8341194,
    9.2127327
);

export const dataBase = [
    place1,
    place2,
    place3,
    place4,
    place5,
    place6,
    place7,
    place8,
    place9,
    place10,
    place11,
];
