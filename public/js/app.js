	"use strict";

	class App{
	constructor(){
	this.animes = [

	{
		"id": 1,
		"title":"Attack on Titan",
		"image":"img/shingeki.png",
		"other":"Shingeki no Kyojin",
		"year":"2015",
		"genre":"Thriller"
	},
	{
		"id": 2,
		"title":"Death Note",
		"image":"img/deathnote.png",
		"other":"Death Note",
		"year":"2006",
		"genre":"Action"
	},
	{
		"id": 3,
		"title":"Your Lie In April",
		"image":"img/shigatsu.png",
		"other":"Shigatsu Kimi no Uso",
		"year":"2014",
		"genre":"Romance"
	},
	{
		"id": 4,
		"title":"GTO",
		"image":"img/onizuka.png",
		"other":"Great Teacher Onizuka",
		"year":"1999",
		"genre":"Comedy"
	},
	{
		"id": 5,
		"title":"Slam Dunk",
		"image":"img/slamdunk.png",
		"other":"Slam Dunk",
		"year":"1993",
		"genre":"Sports"
	},
	{
		"id": 6,
		"title":"Future Diary",
		"image":"img/mirainikki.png",
		"other":"Mirai Nikki",
		"year":"2011",
		"genre":"Horror"
	} 

	];
	}

	render(html, component){

	component.innerHTML += html;
	}

	reRender(html, component){

	component.innerHTML = html;
	}



	animeCreate() {
	let title = document.getElementById('animetitle');
	let image = document.getElementById('animepic');
	let other = document.getElementById('animeother');
	let year = document.getElementById('animeyear');
	let genre = document.getElementById('animegenre');

	let animeitem = {
	"title": title.value,
	"image": image.value,
	"other": other.value,
	"year" : year.value,
	"genre": genre.value,
	};

	title.value = image.value = other.value = year.value = genre.value = '';
	this.animes.push(animeitem);
	this.refreshlist();
	this.refreshlist2();

	}

	readList(){
	let textsearchanime = document.getElementById('textsearchanime');
	let animeList = document.getElementById('animeList');
	let html = ``;
	for(let index=0;index<this.animes.length;index++){
	html +=`                   


	<div id="cards" class="col-md-3" >
		<img class="card-img-top" src="${this.animes[index].image}" alt="Card image cap">
		<div class="card-block">
			<h4 class="card-title">${this.animes[index].title}</h4>
			<p class="card-text">${this.animes[index].genre}</p>
			<a href="#" class="btn btn-primary" onclick="component.animeDetails(${index})">More Info</a>
		</div>
	</div>

	`; 
	}
	animeList.innerHTML = html;
	}


	refreshlist(){
	let torefresh = document.getElementById('refresh');
	let html =`
	<div id="row">
		<div id="refresh">
			<div class="">									 
				<input oninput="component.searchanime(this.value)" id="txtsearchanime" type="text" placeholder="Search">
				<br>
				<br>
				`;

				for(let index=0;index<this.animes.length;index++){
				html +=`                   

				<div id="cards" class="col-md-3" >
					<img class="card-img-top" src="${this.animes[index].image}" alt="Card image cap">
					<div class="card-block">
						<h4 class="card-title">${this.animes[index].title}</h4>
						<p class="card-text">${this.animes[index].genre}</p>
						<a href="#" class="btn btn-primary" onclick="component.animeDetails(${index})">More Info</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	</div>



	`; 
	}

	this.reRender(`${html}`,torefresh);
	}



	refreshlist2(){
	let recentrefresh = document.getElementById('refresh2');
	let html =` `;

	let r = this.animes;
	let count = 0;
	for(let i=(r.length-1);i>=0;i--){
	if(count++ === 3)break;
	html+= `
	<div id="cards" class="col-md-3" >
		<img class="card-img-top" src="${this.animes[i].image}" alt="Card image cap">
		<div class="card-block">
			<h4 class="card-title">${this.animes[i].title}</h4>
			<p class="card-text">${this.animes[i].genre}</p>
			
		</div>
	</div>

	`; 
	}

	this.reRender(`${html}`,recentrefresh);
	}



	animeDetails(key){
	this.reRender(
	`
	<h1>Anime Details</h1>
	<div class="media">
		<div class="media-left">
			<a href="#">
				<img class="media-object img-thumbnail" src="${this.animes[key].image}" width="220" />
			</a>
		</div>
		<div class="media-body" id="animeDetailsInfo">
			<h4 class="media-heading">${this.animes[key].title}</h4>
			Other Name: ${this.animes[key].other}<br/>
			Year: ${this.animes[key].year}<br/>
			Genre: ${this.animes[key].genre}<br/>
			<button class="btn btn-success" onclick="component.animeupdate(${key})">Update</button>
			<button class="btn btn-danger" onclick="component.deleteanime(${key})">Delete</button>
			<button class="btn btn-info" onclick="component.list(${key})">Back</button>
		</div>	
	</div>			
	`,document.getElementById('animeDetails'));
	this.showUpdateDelete();
	}


	deleteanime(key){		

	let todelete = this.animes;
	let dummy = [];
	for(let i=0;i<todelete.length;i++){
	if(key!=i){
	dummy.push(todelete[i]);
	}
	}
	this.animes = dummy;

	this.list();	
	this.refreshlist();
	this.refreshlist2();
	}


	animeupdate(key){
	this.reRender(
	`

	<div class="input-group input-group-md">
		<span class="input-group-addon">
			<span>Title</span>
		</span>
		<input class="form-control" id="updatetitle" type="text" value="${this.animes[key].title}" /><br/>
	</div>
	<br/>
	<div class="input-group input-group-md">
		<span class="input-group-addon">
			<span>Other Name</span>
		</span>
		<input class="form-control" id="updateother" type="text" value="${this.animes[key].other}" /><br/>
	</div>	
	<br/>
	<div class="input-group input-group-md">
		<span class="input-group-addon">
			<span>Year</span>
		</span>
		<input class="form-control" id="updateyear" type="text" value="${this.animes[key].year}" /><br/>
	</div>	
	<br/>
	<div class="input-group input-group-md">
		<span class="input-group-addon">
			<span>Actors</span>
		</span>
		<input class="form-control" id="updategenre" type="text" value="${this.animes[key].genre}" /><br/>
	</div>	
	<br/>
	<button class="btn btn-success btn-block" onclick="component.updateanime(${key})">Save</button>
	`,document.getElementById('animeDetailsInfo'));
	}


	updateanime(key){
	let t = document.getElementById('updatetitle');
	let o = document.getElementById('updateother');
	let y = document.getElementById('updateyear');
	let g = document.getElementById('updategenre');

	let m = this.animes[key];
	let anime = {"id":m.id,"title":t.value,"other":o.value,"year":y.value,"image":m.image,"genre":g.value};

	this.animes[key] = anime;
	let details = document.getElementById('animeDetails');
	details.innerHTML = "";




	this.list();
	this.refreshlist();
	this.refreshlist2();
	}




	searchanime(key){
	let txtsearchanime = document.getElementById("txtsearchanime");
	let listanime = document.getElementById("animeList");



	let html = ``;
	for(let i=0;i<this.animes.length;i++){
	if(this.animes[i].genre.toLowerCase().includes(txtsearchanime.value)||
	this.animes[i].title.toLowerCase().includes(txtsearchanime.value)||
	this.animes[i].genre.toUpperCase().includes(txtsearchanime.value)||
	this.animes[i].title.toUpperCase().includes(txtsearchanime.value)||
	this.animes[i].genre.includes(txtsearchanime.value)||
	this.animes[i].title.includes(txtsearchanime.value)){
	html += `

	<div id="cards" class="col-md-3" >
		<img class="card-img-top" src="${this.animes[i].image}" alt="Card image cap">
		<div class="card-block">
			<h4 class="card-title">${this.animes[i].title}</h4>
			<p class="card-text">${this.animes[i].genre}</p>
			<a href="#" class="btn btn-primary" onclick="component.animeDetails(${i})">More Info</a>
		</div>
	</div>
	`;
	}
	}
	listanime.innerHTML = html;
	}



	}

	class Component extends App{
	constructor(){
	super();
	}

	animeApp(){
	let html = `    

	<div id="tophead" class="header">
		<h3 class="titletext">
			<a href="#!" onclick="component.back()"><img class="anime-logo" src="img/animelogo.png"  /></a>
			Anime Site <br>
			<div id="navlist">
				<a href="#!" onclick="component.welcome()">Home</a> 
				<a href="#!" onclick="component.list()">List</a> 
				<a href="#!" onclick="component.createanime()">Create</a> 
			</div>
		</h3>	
	</div>



	<div id="loginf" class="container2">
		<div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 60px 100px 60px 100px; border: 1px solid #EEE;">

			<form>
				<div class="form-group">
					<h4 class="wow">Registration</h4>
					<br>
					<label for="namereg">Your Name</label>
					<input id="nameregs" placeholder="Enter Here">
					<large class="form-text text-muted">Just for fun</small>
					</div>
					<br>
					<br>
					<br>
					<br>
					<a href="#!" class="btn" onclick="component.welcome()" >Submit</a>

				</form>
			</div>
		</div>


		<div id="home" class="container">
			<div id="row">
				<div id="recentanime">
					<div id="refresh2">
						<h4 class="recenttext"> Recent Anime Release </h4>
						<br>
						`;
						let r = this.animes;
						let count = 0;
						for(let i=(r.length-1);i>=0;i--){
						if(count++ === 3)break;
						html+= `
						<div id="cards" class="col-md-3" >
							<img class="card-img-top" src="${this.animes[i].image}" alt="Card image cap">
							<div class="card-block">
								<h4 class="card-title">${this.animes[i].title}</h4>
								<p class="card-text">${this.animes[i].genre}</p>
								
							</div>
						</div>
						`;
					}
					html += `
				</div>
			</div>
		</div>
	</div>



	<div id="updatedeletepage">
		<div class="container">
			<div class="row">
				<div id="animeDetails">

				</div>
			</div>
		</div>
	</div>




	<div id="createanime" class="container">
		<div id="row">
			<div class =" col col-md-4">
				<h1>Anime Create</h1>
				Title: <input class="form-control" id="animetitle" type="" placeholder="Enter Title" /><br/>
				Picture: <input class="form-control" id="animepic" type="" placeholder="Enter Picture" /><br/>
				Other Name: <input class="form-control" id="animeother" type="" placeholder="Enter Name" /><br/>
				Year: <input class="form-control" id="animeyear" type="" placeholder="Enter Year" /><br/>
				Genre: <input class="form-control" id="animegenre" type="" placeholder="Enter Genre" /><br/>
				<button class="btn btn-primary" onclick="component.animeCreate()">Create</button>

			</div>
		</div>
	</div>
	<br>
	<br>




	<div id="list" class="container">
		<div id="row">
			<div id="refresh">

				<div class="">									 
					<input oninput="component.searchanime(this.value)" id="txtsearchanime" type="text" placeholder="Search">

					<div id="animeList">
					</div>


				</div>
			</div>
		</div>
	</div>


	<div id="footerlogo">
		<footer class="footer">
			<a href="#!"><img class="foot-logo" src="img/fblogo.png"  /></a>
			<a href="#!"><img class="foot-logo1" src="img/twitlogo.png"  /></a>
			<a href="#!"><img class="foot-logo1" src="img/goologo.png"  /></a>
		</footer>   
	</div>
	</br>


	`;

	this.reRender(`${html}`,document.getElementById('app'));

	$('#tophead').show();
	$('#loginf').show();
	$('#footerlogo').show();
	$('#home').hide();
	$('#list').hide();
	$('#navlist').hide();
	$('#createanime').hide();
	$('#updatedeletepage').hide();		
	}

	welcome(){
	$('#tophead').show();
	$('#loginf').hide();
	$('#footerlogo').show();
	$('#home').show();
	$('#list').hide();
	$('#navlist').show();
	$('#createanime').hide();
	$('#updatedeletepage').hide();	
	}

	list(){
	$('#tophead').show();
	$('#loginf').hide();
	$('#footerlogo').show();
	$('#home').hide();
	$('#list').show();
	$('#navlist').show();
	$('#createanime').hide();
	$('#updatedeletepage').hide();	
	}

	back(){
	$('#tophead').show();
	$('#loginf').show();
	$('#footerlogo').show();
	$('#home').hide();
	$('#list').hide();
	$('#navlist').hide();
	$('#createanime').hide();
	$('#updatedeletepage').hide();	
	}

	createanime(){
	$('#tophead').show();
	$('#loginf').hide();
	$('#footerlogo').show();
	$('#home').hide();
	$('#list').hide();
	$('#navlist').show();
	$('#createanime').show();
	$('#updatedeletepage').hide();	
	}


	showUpdateDelete(){
	$('#tophead').show();
	$('#loginf').hide();
	$('#footerlogo').show();
	$('#home').hide();
	$('#list').hide();
	$('#navlist').show();
	$('#createanime').hide();
	$('#updatedeletepage').show();	
	}

	}

	let component = new Component();
	component.animeApp();
	component.readList();