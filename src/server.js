var ChallangeGenerator = {

	/**
	 * @property {String[][]} matrix
	 *
	 * Matriz onde são guardadas as palavras que serão entregues para a
	 * montagem das expressões regulares
	 */
	matrix: [
		[ 'pato', 'sapato', 'gato', 'polones', 'mato', 'rato', 'macaco', 'tacos', 'arco', 'palco', 'ato', 'sapo', 'sapos', 'alto', 'auto', 'assalto', 'atordoado', 'doado', 'salto', 'estado', 'resultado', 'palcos', 'pato', 'sapato', 'gatos', 'matos', 'ratos', 'macacos', 'arcos', 'palcos', 'atos', 'holandes' ],
		[ 'estimulante', 'refrigerante', 'elefante', 'polones', 'repugnante', 'estudante', 'dente', 'diante', 'radiante', 'pente', 'quente', 'caliente', 'detergente', 'presidenta', 'ente', 'anta', 'manta', 'fanta', 'ignorante', 'saltitante', 'holandes' ],
		[ 'horário', 'agrário', 'itinerário', 'polones', 'celibatário', 'otário', 'holandes', 'horas', 'hora', 'ariados', 'desvario', 'casario', 'ontario', 'grégario', 'alfario', 'dario', 'vario', 'donátario', 'hilário', 'cabeçario', 'nario', 'mario', 'hebdomadario', 'romario', 'literario', 'angario', 'monetario', 'corolário', 'signatário' ],
		[ 'ser', 'querer', 'estar', 'polones', 'falar', 'dizer', 'fazer', 'compreender', 'aprender', 'esperar', 'apresentar', 'guardar', 'ir', 'ouvir', 'entender', 'exaltar', 'programar', 'ensinar', 'holandes', 'estimular', 'auxiliar', 'emprestar', 'causar', 'instanciar', 'humilhar', 'por', 'tirar', 'devolver' ],
		[ 'sessão', 'seção', 'cessão', 'polones', 'concessão', 'repressão', 'transgressão', 'impressão', 'digressão', 'expressão', 'sucessão', 'depressão', 'imunodepressão', 'progressão', 'obsessão', 'supressão', 'intercessão', 'opressão', 'acessão', 'secessão', 'reimpressão', 'recessão', 'imunossupressão', 'maldição', 'predição', 'jurisdição', 'erudição', 'condição', 'perdição', 'adição', 'rendição', 'audição', 'medição', 'precondição', 'contradição', 'tradição', 'expedição', 'sedição', 'interdição', 'fundição', 'extradição', 'edição', 'remedição', 'ação' ],
		[ 'dinossauro', 'cobol', 'centauro', 'polones', 'minotauro', 'restauro', 'tauro', 'holandes', 'basquetebol', 'voleibol', 'quadribol', 'futebol', 'handebol', 'beisebol', 'futebol' ],
		[ 'tomate', 'abacate', 'alicate', 'polones', 'holandes', 'até', 'chocolate', 'iate', 'magnate', 'patarate', 'retrate', 'mate', 'mascate', 'escarlate', 'disparate', 'debate', 'abate', 'sabonete', 'banquete', 'bilhete', 'cadete', 'canivete', 'capacete', 'carpete', 'carrete', 'clarinete', 'colchete', 'colete' ],
		[ 'extracurricular', 'ressocialização', 'holandes', 'polones', 'inamovibilidade', 'especificamente', 'interdependente', 'desenvolvimento', 'condescendência', 'dessacralização', 'encarecidamente', 'suscetibilidade', 'antropocêntrico', 'transitoriedade', 'coercitivamente', 'heterogeneidade', 'constrangimento', 'incessantemente', 'descontinuidade', 'sucroalcooleiro', 'eletrodeposição', 'tocoginecologia', 'momentaneamente', 'meticulosamente', 'consubstanciada', 'estandardização', 'operacionalizar', 'sensacionalismo', 'preliminarmente', 'sensacionalista', 'ontognoseologia', 'segregacionismo', 'sistematicidade', 'ressignificação', 'universalização', 'hereditariedade', 'inelegibilidade', 'competitividade', 'conservadorismo', 'suprapartidário', 'unilateralidade', 'reipersecutória', 'tempestivamente', 'dimensionamento', 'inviolabilidade', 'conscientização', 'sorrateiramente', 'morfossintático', 'antropomorfismo', 'características', 'disponibilidade', 'terminantemente', 'fundamentalista', 'confirmadíssimo', 'correligionário', 'contraprestação', 'ontologicamente', 'espontaneamente', 'subsidiariedade', 'inequivocamente', 'inexorabilidade', 'indistintamente', 'previsibilidade', 'homossexualismo', 'primordialmente', 'retromencionado', 'categoricamente', 'principiológico', 'subdimensionado', 'exacerbadamente', 'superintendente', 'desconstituição', 'unilateralmente', 'especificidades', 'superpovoamento', 'desestruturação', 'agradabilíssima', 'transindividual', 'imunossupressão', 'perfectibilizar', 'inevitabilidade', 'importantíssimo' ],
		[ 'pragmático', 'ostentação', 'intrínseco', 'polones', 'holandes', 'iniquidade', 'prepotente', 'antagônico', 'sarcástico', 'excêntrico', 'pervertido', 'prospecção', 'lisonjeado', 'comendador', 'energúmeno', 'vespertino', 'fornicação', 'pejorativo', 'persuasivo', 'infortúnio', 'exacerbado', 'hombridade', 'assessoria', 'alteridade', 'subestimar', 'redundante', 'subversivo', 'hipocrisia', 'meticuloso', 'corroborar', 'estrupício', 'transeunte', 'idoneidade', 'coercitivo', 'recorrente', 'aditamento', 'visualizar', 'auspicioso', 'masoquista', 'emancipado', 'provimento', 'diretrizes', 'famigerado', 'patricinha', 'disseminar', 'parcimônia', 'consensual', 'prostração', 'metafísica', 'tramitação', 'pragmática', 'comunidade', 'desiderato', 'manufatura', 'deplorável', 'ontológico', 'pertinente', 'lambisgóia', 'burocracia', 'patológico', 'inobstante', 'peripécias', 'signatário', 'narcisista', 'incipiente', 'vulnerável', 'logradouro', 'sortilégio', 'compilação', 'inexorável', 'concerteza', 'antológico', 'diligência', 'retrógrado', 'visionário', 'subjacente', 'retaliação', 'homofóbico', 'esporádico', 'democracia', 'incidência', 'profilaxia', 'detrimento', 'integração', 'nostálgico', 'mequetrefe', 'relevância', 'sintetizar', 'emolumento', 'prioridade', 'empreitada', 'instigante', 'caucasiano', 'entretanto', 'divergente', 'mercenário', 'prevaricar', 'compulsivo', 'requerente', 'inferência', 'resiliente', 'eficiência' ]
 	],

 	/**
 	 * Método de auxilio que efetua o random entre um número e outro
 	 * 
 	 * @param {Number} to
 	 * Sortear um número superior em quanto, em relação ao argumento from?
 	 * 
 	 * @param {Number} [from=0]
 	 * Sortear um número, iniciando em quanto?
 	 * 
 	 * @return {Number}
 	 * Número sorteado
 	 */
 	getRandom: function(to, from){
 		if (from === undefined) { from = 0; }
 		return Math.floor(Math.random() * to) + from;
 	},

 	/**
 	 * Retorna uma array aleatório dos que compõe a matriz
 	 * 
 	 * @return {String[]}
 	 * Array sorteado
 	 */
 	getRandomArray: function(){
 		var i = this.getRandom(this.matrix.length);
 		return this.matrix[i];
 	},

 	/**
 	 * Faz o sorteio das palavras que o usuário irá utilizar para
 	 * contruir a expressão regular. O método garante que não haverão
 	 * palavras repetidas
 	 * 
 	 * @param  {Numer} howmuch
 	 * Quantas palavras você deseja que sejam sorteadas
 	 * 
 	 * @return {String[]}
 	 * Sequencia de palavras sorteadas
 	 */
 	getRandomWords: function(howmuch){
 		var baseDePalavras		= this.getRandomArray();
 		var palavrasEscolhidas	= [];

 		//
 		while (palavrasEscolhidas.length < howmuch) {
 			var i = this.getRandom(baseDePalavras.length);
 			if (palavrasEscolhidas.indexOf(baseDePalavras[i]) == -1)
 				palavrasEscolhidas.push(baseDePalavras[i]);
 		}

 		return palavrasEscolhidas;
 	}
};

var connections			= { };
var screenConnection	= null;
var fs					= require("fs");

var Main = function(client) {
	console.info('Conexão iniciada.');
	client.on('sou controle', function(){
		console.info('Novo controle estabelecido.');
		
		var token			= client.id;
		var connVariables	= connections[token] = {
			token:		token,
			nome:		'',
			regex:		'',
			palavras:	null,
			pontos:		0
		};

		if (screenConnection)
			screenConnection.emit('novo participante', connVariables);

		//
		client.on('pedindo por palavras', function(){
			var words		= ChallangeGenerator.getRandomWords(4);

			connVariables.palavras = {
				unmatch:	words.slice(0, 2),
				match:		words.slice(2)
			};

			client.emit('pegando palavras', connVariables.palavras);
			
			if (screenConnection)
				screenConnection.emit('alteracao de palavras', { token: token, palavras: connVariables.palavras });
		});

		//
		client.on('escrever nome', function(text){
			connVariables.nome	= text;
			
			if (screenConnection)
				screenConnection.emit('escreveu nome', { token: token, nome: text });
		});

		//
		client.on('escrever regex', function(text){
			connVariables.regex	= text;
			
			if (screenConnection)
				screenConnection.emit('escreveu regex', { token: token, regex: text });
		});

		//
		client.on('usar esta regex', function(){
			var match		= connVariables.palavras.match;
			var unmatch		= connVariables.palavras.unmatch;
			var regex		= new RegExp(connVariables.regex, 'i');
			// posições que a combinação foi invalida
			var wrongs		= { match: [], unmatch: [] };

			for (var i = 0; i < match.length; i++)
				if (!regex.test(match[i]))
					wrongs.match.push(i);

			for (var i = 0; i < unmatch.length; i++)
				if (regex.test(unmatch[i]))
					wrongs.unmatch.push(i);

			if (!wrongs.match.length && !wrongs.unmatch.length)
				connVariables.pontos++;

			else
				connVariables.pontos--;

			if (screenConnection)
				var resultadosDaConclusao = {
					token:		token,
					acertou:	(!wrongs.match.length && !wrongs.unmatch.length),
					pontos:		connVariables.pontos,
					wrongs:		wrongs
				};

				client.emit('concluiu regex');
				if (screenConnection)
					screenConnection.emit('concluiu regex',	resultadosDaConclusao);
		});

		//
		client.on('disconnect', function(){
			connections[token] = null;
			delete connections[token];

			if (screenConnection)
				screenConnection.emit('remover participacao', token);
		});
	});

	client.on('sou tela', function(){
		console.info('Tela estabelecida.');

		screenConnection	= client;
		client.emit('iniciar tela', connections);

		client.on('disconnect', function(){
			screenConnection = null;
		});
	});

	client.on('disconnect', function(){
		console.info('Conexão encerrada.');
	});
};

fs.readFile('config.json', function(err, content){
	content = JSON.parse(content);
	console.info('Iniciando servidor em ' + content.ip + ':' + content.port);
	require('socket.io')(content.port).on('connection', Main);
});