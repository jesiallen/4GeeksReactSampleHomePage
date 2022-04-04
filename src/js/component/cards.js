import React from "react";

// Create Images

const images = [
	"https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
	"https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
	"https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
	"https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs",
	"https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts",
	"https://i.picsum.photos/id/1037/5760/3840.jpg?hmac=fZe213BcO2KPQEJKChsdHnVYg-6kAtQMTZV24f1fS94",
	"https://i.picsum.photos/id/1039/6945/4635.jpg?hmac=tdgHDygif2JPCTFMM7KcuOAbwEU11aucKJ8eWcGD9_Q",
	"https://i.picsum.photos/id/1041/5184/2916.jpg?hmac=TW_9o6HeD7H7I7NVo-S1Fa1iAvzQ10uvmJqsXvNoi0M",
	"https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc",
	"https://i.picsum.photos/id/1045/3936/2624.jpg?hmac=PMfAbC94Asle_jgeRYsj7zQHFabfTfsIwL247Ewetwc",
];

export const RandomImage = () => {
	let image = images[Math.floor(Math.random() * images.length)];

	return image;
};

// Create Title & Content

const words = [
	"amuck",
	"observe",
	"decorate",
	"amusement",
	"perfect",
	"scarecrow",
	"mask",
	"beam",
	"extend",
	"glossy",
	"partner",
	"feigned",
	"scrawny",
	"futuristic",
	"notice",
	"cent",
	"fax",
	"dynamic",
	"man",
	"subsequent",
	"absurd",
	"pack",
	"seashore",
	"lethal",
	"quickest",
	"noiseless",
	"natural",
	"table",
	"creepy",
	"lush",
	"remain",
	"mug",
	"afternoon",
	"violent",
	"soft",
	"somber",
	"stew",
	"mind",
	"purpose",
	"bite-sized",
	"hard-to-find",
	"helpless",
	"current",
	"bizarre",
	"pastoral",
	"agonizing",
	"noisy",
	"bait",
	"dirt",
	"curious",
	"cemetery",
	"deranged",
	"sincere",
	"love",
	"historical",
	"summer",
	"selfish",
	"decorous",
	"sound",
	"offer",
	"divergent",
	"efficacious",
	"slow",
	"exciting",
	"axiomatic",
	"squealing",
	"pipe",
	"radiate",
	"rod",
	"cagey",
	"cute",
	"noxious",
	"thinkable",
	"ratty",
	"breezy",
	"useful",
	"frighten",
	"car",
	"excuse",
	"needless",
	"reduce",
	"branch",
	"unwieldy",
	"fowl",
	"quill",
	"stick",
	"snail",
	"hapless",
	"elated",
	"fearful",
	"undesirable",
	"amused",
	"acoustics",
	"worm",
	"burn",
	"unpack",
	"occur",
	"flaky",
	"popcorn",
	"play",
];

let randomized = [];
function getWords(times) {
	randomized.length = 0;
	for (let i = 1; i <= times; i++) {
		let randomWord = words[Math.floor(Math.random() * words.length)];
		randomized.push(randomWord);
	}
	return randomized;
}

export const LoremTitle = () => {
	getWords(3);
	for (let i = 0; i < randomized.length; i++) {
		randomized[i] =
			randomized[i][0].toUpperCase() + randomized[i].substr(1);
	}

	return randomized.join(" ");
};

export const LoremContent = () => {
	getWords(20);
	let sentence = randomized.join(" ");

	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

// Create Card //

export const Cards = () => {
	return (
		<div className="col-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={RandomImage()} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{LoremTitle()}</h5>
					<p className="card-text">{LoremContent()}.</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
