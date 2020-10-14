let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let deck = new Array();

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < cards.length; x++)
		{
			let card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(let i = 0; i < 1; i++)
	{
		let card = document.createElement("div");
		let rules = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;
		
		switch (card.innerHTML = deck[i].Value) {
			case 'A':
			  console.log('Bottoms UP for 5 seconds! If on a zoom call chug until the person to your left stops chuggin!');
			  break;
			case '2':
			  console.log('YOU get to choose who drinks!');
			  break;
			case '3':
			  console.log('Three is ME, baby. drink up!');
			  break;
			case '4':
			  console.log('Four is FLOOR! Last person to play the down-emoji takes a sip');
			  break;
			case '5':
			  console.log('Five is GUYS. Fellas take a drink.');
			  break;
			case '6':
			  console.log('Six is CHICKS. Ladies you know what to do.');
			  break;
			case '7':
			  console.log('Seven is HEAVEN. Last person to play the hands up emoji drinks.');
			  break;
			case '8':
				console.log('Eight is MATE. Pick someone else to be your mate and when one of you sips the other must as well.');
				break;
			case '9':
				console.log('Nine is RHYME. DONT GET COCKY.. Its harder when you drink. The person to your right rhymes with your word and whoever messes up must drink.');
				break;
			case '10':
				console.log('Ten is CATEGORIES. Pick a category and go around the table until someone cant come up with an answer.');
				break;
			case 'J':
				console.log('Jack is NEVER-HAVE-I-EVER. Three fingers up.. Go around the table and whoever is left with no fingers first must sip sip sip!');
				break;
			case 'Q':
				console.log('Queen is QUESTIONS. You pose a question to anyone in the game. They in turn answer your question with a question. This goes around until someone does not respond with a question.');
				break;
			case 'K':
				console.log('King is RULE. Pick a rule and whoever breaks that rule must drink. Once another king card is drawn a new rule will be in place.');
				break;
			default:
			  console.log('wanna play a game?');
		  }
		  console.log("Wanna donate to an organization?");

		// value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;
                