var questions = [
	{ letter: "a", answer: ["alita", "azeroth", "anakin", "arcade"], status: 0, pre: "CON LA A:", question: [
	    ("La película que adapta éste manga de los 90' se estrenará en diciembre de 2018. Su título es GUNNM o ... angel de batalla."),
	    ("Mundo original de World of Warcraft."),
	    ("Nombre original de Darth Vader."),
	    ("Término genérico para refererise a las máquinas recreativas o videojuegos que recuerdan al estilo de éstas.")
	    ]},
	{ letter: "b", answer: ["bulma", "bioshock", "bb8", "bug"], status: 0, pre: "CON LA B:", question: [
	    ("Creadora del radar para detectar las bolas de dragón."),
	    ("Shooter en primera persona ambientado durante una ucronía del año 1960, en Rapture."),
	    ("R2-D2 naranja."),
	    ("Error de programación, hace referencia a un error causado por un bicho que se introdujo en un ordenador en los años 40.")
	    ]},
    { letter: "c", answer: ["clamp", "cloud", "crucio", "cthulhu"], status: 0, pre: "CON LA C:", question: [
	    ("El nombre del cuarteto femenino de dibujantes japonesas creadoras de Cardcaptor Sakura, Chobits, X y RG Veda entre otros."),
	    ("Protagonista de Final Fantasy VII."),
	    ("Conjuro de la una de las tres maldiciones imperdonables, genera un dolor insoportable y torturador a la víctima."),
	    ("Monstruo humanoide con cabeza de pulpo, creado por Lovecraft.")
	    ]},
    { letter: "d", answer: ["doraemon", "draenei", "darth", "daenerys"], status: 0, pre: "CON LA D:", question: [
	    ("Nombre del gato cósmico amante de los dorayakis."),
	    ("Esta facción de Eredar, proveniente del planeta Argus, se asentó en la Isla Bruma Azur al noroeste de Kalimdor."),
	    ("Título que reciben los Señores Oscuros de la Orden Sith."),
	    ("...de la Tormenta de la Casa Targaryen, la Primera de su Nombre, Reina de los Ándalos, los Rhoynar y los Primeros Hombres, Señora de los Siete Reinos, " +
			"Khaleesi del Gran Mar de Hierba, La que no Arde, Protectora del Reino, Rompedora de Cadenas, Madre de Dragones y Señora de Rocadragón.")
	    ]},
    { letter: "e", answer: ["eva", "edea", "edward", "et"], status: 0, pre: "CON LA E:", question: [
	    ("Acronimo de los mechas pilotados por Rei Ayanami, Asuka Langley Sohryu y Shinji Ikari."),
	    ("Bruja poseída por Artemisa, embajadora de Galbadia y mujer de Cid Kramer."),
	    ("En dos de las tres películas de los 90 de Tim Burton, Johnny Deep interpreta a dos protagonistas que se llaman así (en inglés)."),
	    ("Atari enterró miles de ejemplares de este videojuego en el vertedero de Alamogordo.")
	    ]},
    { letter: "f", answer: ["freezer", "fallout", "filosofal", "fps"], status: 0, pre: "CON LA F:", question: [
	    ("Los alienígenas de esta raza de Dragon Ball, tienen nombres relacionados con el frío."),
	    ("Videojuego en el que aparece el Vault Boy."),
	    ("Esta piedra es una substacia alquímica legendaria, utilizada en Harry Potter."),
	    ("Éste acrónimo es utilizado o para medir el frame rate o para definir el subgénero de los shooters en primera persona.")
	    ]},
    { letter: "g", answer: ["guts", "geralt", "galactica", "gremlins"], status: 0, pre: "CON LA G:", question: [
	    ("Mercenario protagonista de Berserk."),
	    ("Protagonista de la saga de Andrzej Sapkowski y de los videojuegos basados en ésta: The Witcher."),
	    ("Dirk Benedict interpretó a Fénix en el Equipo A y al teniente Starbuck en esta serie."),
	    ("En cantonés un mogwai es un espíritu maligno, en occidente conocemos esta palabra por esta película "+
	    	"en la que no debías exponerlos al sol, mojarlos o alimentarlos pasada la media noche.")
	    ]},
	{ letter: "h", answer: ["himura", "halo", "han", "hidromiel"], status: 0, pre: "CON LA H:", question: [
	    ("Apellido de Kenshin, el guerrero samurai pelirrojo con una cicatriz en el ojo."),
	    ("Shooter de ciencia ficción distribuido por Microsoft y desarrollado por Bungie Studios."),
	    ("Nombre de pila del capitán del Halcón Milenario más conocido."),
	    ("Bebida alcohólica real mostrada a menudo en mundos fantásticos o medievales tales como series, películas o juegos de rol.")
	    ]},
    { letter: "i", answer: ["inuyasha", "inquisition", "invernalia", "ia"], status: 0, pre: "CON LA I:", question: [
	    ("Medio perro-demonio, medio humano; protagonista de un manga de Rumiko Takahashi."),
	    ("Título del tercer juego de la franquicia Dragon Age."),
	    ("En castellano, este asentamiento de la casa Stark, es considerada la capital del Norte."),
	    ("Acrónimo de la técnica que trata de reproducir con mayor o menor precisión la inteligencia de los seres vivos dentro de un entorno virtual.")
	    ]},
    { letter: "j", answer: ["james", "jabba", "jaime", "joystick"], status: 0, pre: "CON LA J:", question: [
	    ("Nombre del chico del Team Rocket, que iba junto a Jesse y Meowth."),
	    ("Alienígena con forma de gran gusano baboso de Star Wars."),
	    ("Nombre del Lannister conocido como el matarreyes."),
	    ("En inglés, la palanca de mando o dispositivo de control que se usa desde una computadora o videoconsola hasta un transbordador espacial.")
	    ]},
    { letter: "k", answer: ["kaneki", "kairi", "kirk", "kamikaze"], status: 0, pre: "CON LA K:", question: [
	    ("Apellido del protagonista de Tokio Ghoul."),
	    ("Una de los personajes principales de Kingdom Hearts."),
	    ("Nombre del capitán del Enterprise en la serie original."),
	    ("Piloto suicida de la Segunda Guerra Mundial y ataque de los Bom.")
	    ]},
    { letter: "l", answer: ["luci", "lemmings", "luke", "laguna"], status: 0, pre: "CON LA L:", question: [
	    ("Amiga del salamander Natsu Dragneel y miembro del gremio de Fairy Tail, es una maga rubia de espíritus celestiales."),
	    ("Estos personajes de pelo verde y vestido azul, llamados del mismo modo que su videojuego, " +
			"están basados en la creencia popular de que cierto tipo de roedores miomorfos se suicidan en masa en situaciones de peligro."),
	    ("Nombre del hijo de Anakin Skywalker."),
	    ("Depósito de agua natural que tiene el nombre del antiguo soldado de Galbadia.")
	    ]},
	{ letter: "m", answer: ["midori", "mario", "mcfly", "mana"], status: 0, pre: "CON LA M:", question: [
	    ("Nombre de la profesora de Shin-Chan."),
	    ("Éste es el considerado el personaje de videojuegos más famoso del mundo."),
	    ("Apellido del acompañante del inventor de la máquina del tiempo montada en un DeLorean."),
	    ("En algunas religiones, se refiere a una fuerza sobrenatural e impersonal o anónima que existe en el mundo, en muchos videojuegos, energía o magia.")
	    ]},
	{ letter: "n", answer: ["nausicaa", "navi", "namco", "naruto"], status: 0, pre: "CON LA N:", question: [
	    ("Princesa del Valle del Viento y protagonista de la película de Miyazaki. Es la única descendiente del rey Jihl."),
	    ("Esta pequeña hada acompaña a Link en Ocarina of Time."),
	    ("Nombre de la importante empresa de videojuegos que se fusionó con Bandai, ha desarrollado entre otros: Pacman, Soul Calibur, Time Crisis y Tekken."),
	    ("Ingrediente utilizado en el ramen, también es una serie de anime y manga y el nombre del protagonista de ésta.")
	    ]},
	{ letter: "ny", answer: ["castaña", "española", "apuñalado", "ibañez"], status: 0, pre: "CONTIENE LA Ñ:", question: [
	    ("La forma de la cabeza del profesor Kurigashira de Arale tiene la forma de este fruto."),
	    ("Ivy de Soul Calibur, es la hija de un pirata de esta nacionalidad."),
	    ("¿Cómo muere el Lord Comandante de la Guardia de la Noche?"),
	    ("Creador de Mortadelo y Filemón, El botones Sacarino y 13, rue del Percebe entre otros.")
	    ]},
	{ letter: "o", answer: ["oliver", "oblivion", "oraculo", "otaku"], status: 0, pre: "CON LA O:", question: [
	    ("Junto con Benji, era el mago del balón."),
	    ("Cuarta parte del videojuego The Elder Scrolls."),
	    ("Ella posee el poder de premonición, que usa para aconsejar y guiar a los humanos que intentan luchar contra el sistema Matrix."),
	    ("Un aficionado al manga o al anime recibe este nombre que proviene de Japón.")
	    ]},
	{ letter: "p", answer: ["panda", "pacman", "picard", "pvp"], status: 0, pre: "CON LA P:", question: [
	    ("El padre de Ranma, Genma Saotome, se transforma en este animal."),
	    ("Para poder escapar, este personaje debe comerse todos los puntitos de la pantalla, vigilando siempre que los fantasmas no se lo coman a él."),
	    ("Capitán del Enterprise en la nueva generación."),
	    ("En juegos multijugador en línea, generalmente en MMOs, acrónimo del modo en el que es posible competir contra otros jugadores.")
	    ]},
	{ letter: "q", answer: ["quimera", "quina", "quinto", "quest"], status: 0, pre: "CON LA Q:", question: [
	    ("Segun Fullmetal Alchemist, el ser creado a partir de la síntesis alquímica de dos o más seres vivos."),
	    ("Personaje de Final Fantasy IX armado con un tenedor, de aspecto extravagante, lengua larga y vestimenta estilo cocinero."),
	    ("Apellido del actor que interpreta a Spock desde 2009."),
	    ("Akira Toriyama diseñó los personajes del videojuego de Dragon...")
	    ]},
	{ letter: "r", answer: ["ryuk", "rabbids", "relojero", "robocop"], status: 0, pre: "CON LA R:", question: [
	    ("Shinigami amante de las manzanas, creador del cuaderno de la muerte."),
	    ("Estos raros conejos, que aparecen por primera vez junto a Rayman, tienen su propio videojuego, aparecen en otro con Mario y tienen hasta serie de televión."),
	    ("Sylar, quien robaba los superpoderes abriendo el cráneo de los héroes, tiene esta profesión."),
	    ("Si Terminator tuviera un primo cíborg ingenuo y justiciero, de la misma raza que él, se llamaría asi.")
	    ]},
	{ letter: "s", answer: ["saotome", "shiva", "sheldon", "sakura"], status: 0, pre: "CON LA S:", question: [
	    ("Apellido del chico que al mojarse con agua fría se convierte en chica."),
	    ("Deidad del hinduismo, aparece en la mayor parte de la saga de Final Fantasy representado como 'mujer'."),
	    ("Nombre del friki más intolerante, brillante, maniático, frío y poco sociable de la televisión."),
	    ("Múltiples personajes se llaman así, flor de cerezo; como la cazadora de cartas, la amiga de naruto, la colegiala de Street Fighter etc.")
	    ]},
	{ letter: "t", answer: ["totoro", "tekken", "three", "tolkien"], status: 0, pre: "CON LA T:", question: [
	    ("Espíritu del bosque creaado por Hayao Miyazaki que viaja en gatobús."),
	    ("Videojuego de lucha en el que aparecen, entre otros Jin, Yoshimitsu y Nina, entre otros."),
	    ("En inglés: ¿Cuantas conchas habían en los lavabos de Demolition Man?"),
	    ("Peter Jackson pudo llevar la obra de este autor a la gran pantalla porque éste no quiso que fuera interpretada por los Beatles.")
	    ]},
	{ letter: "u", answer: ["urusei", "ultima", "uhura", "unreal"], status: 0, pre: "CON LA U:", question: [
	    ("Primera palabra del título original de Lamu la pequeña extraterrestre."),
	    ("La llave espada más poderosa de Kingdom Hearts 1 es la .... Weapon, conocida en castellano como Arma Artema."),
	    ("Oficial de comunicaciones del Enterprise."),
	    ("Este motor de juego de Epic Games, es la base de videojuegos como Deus Ex, BioShock, Mass Effect o Gears of War, entre otros.")
	    ]},
	{ letter: "v", answer: ["vampiro", "vega", "vikings", "venom"], status: 0, pre: "CON LA V:", question: [
	    ("¿Qué tipo de criatura es Alucard, protagonista de Hellsing?"),
	    ("Luchador callejero de videojuegos (originalmente) procedente de España, armado con garras y que cubre su hermoso rostro para que no sea dañado."),
	    ("Título en inglés de la serie de Ragnar Lothbrok."),
	    ("Nombre original del enemigo enfundado en un traje negro azulado con el dibujo de una araña blanca en el tronco, con la boca a menudo babeante y poblada de afilados dientes de entre los que suele sobresalir una larga lengua.")
	    ]},
	{ letter: "w", answer: ["wanted", "wario", "wayne", "wiki"], status: 0, pre: "CON LA W:", question: [
	    ("Recopilación de 5 oneshots creados por Eiichiro Oda, donde en la quinta historieta podremos ver a Luffy, el que sería protagonista de One Piece."),
	    ("Antagonista de Mario."),
	    ("Apellido del superhéroe huérfano y multimillonario de DC Comics."),
	    ("Este tipo de sitio web colaborativo puede ser modificado por los usuarios.")
	    ]},
	{ letter: "x", answer: ["xxxholic", "xiaoyu", "xirtam", "xavier"], status: 0, pre: "CON LA X:", question: [
	    ("Crossover de CLAMP estrenado en 2004, donde el protagonista va a parar a la tienda de los deseos de la bruja Yuko."),
	    ("Apellido de Ling, aparecida en todas las entregas desde Tekken 3."),
	    ("Neo descubre que el mundo en el que creía vivir no es más que una simulación virtual a la que estaba conectado, este mundo se llama...").split("").reverse().join(""),
	    ("Este nombre catalán es el apellido del Profesor X de los X-Men.")
	    ]},
	{ letter: "y", answer: ["yamcha", "yoshi", "yoda", "yggdrasil"], status: 0, pre: "CON LA Y:", question: [
	    ("Compañero de Bulma y Goku, era un bandido que temía a las mujeres y que siempre iba acompañado por su amigo Puar."),
	    ("Este dinosaurio antropomórfico, aparece en varios videojuegos de Nintendo, sobre todo con Super Mario, aunque también tiene su propia serie de juegos."),
	    ("Maestro Jedi más conocido."),
	    ("Éste arbol nórdico de la vida aparece en comics, animes, películas y series y hasta hay un videojuego de rol con su nombre.")
	    ]},
	{ letter: "z", answer: ["zodiaco", "zidane", "zombis", "zelda"], status: 0, pre: "CON LA Z:", question: [
	    ("Los cinco caballeros de bronze, son los Caballeros de esto."),
	    ("Protagonista con cola de mono de Final Fantasy IX."),
	    ("Los principales antagonistas y eje de la trama de The Walking Death lo son (en castellano)."),
	    ("Robin Williams puso el nombre a su hija por este videojuego que lleva el nombre de la princesa, no del protagonista.")
	    ]},
];