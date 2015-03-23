var GENRE = {
	HARDSTYLE: "hardstyle",
	METAL: "metal",
	POP: "pop",
	ELECTRO: "electro",
	HOUSE:"house",
	DUBSTEP: "dubstep",
	NINETIES: "90s",
};

var Fuif = function (date, naam, beschrijving, genre)  {
	this.datum = date;
	this.naam = naam;
	this.beschrijving = beschrijving;
};

var fuiven = {
	brusrock : new Fuif(new Date(2015, 3, 23, 0), "brusrock", "awesome lengte fuif in hartje brussel", GENRE.NINETIES),
	newone: new Fuif()
};
