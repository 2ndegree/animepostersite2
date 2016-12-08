"use strict";

class App{
	constructor(){
		this.animes = [
			
           
			 {
				"id": 1,
				"title":"Death Note",
				"image":"img/deathnote.png",
				"genre":"Thriller"
			},
			{
				"id": 2,
				"title":"Attack on Titan",
				"image":"img/shingeki.png",
				"genre":"Action"
			},
			{
				"id": 3,
				"title":"Your Lie In April",
				"image":"img/shigatsu.png",
				"genre":"Romance"
			},
			{
				"id": 4,
				"title":"GTO",
				"image":"img/onizuka.png",
				"genre":"Comedy"
			},
			{
				"id": 5,
				"title":"SlamDunk",
				"image":"img/slamdunk.png",
				"genre":"Sports"
			},
			{
				"id": 6,
				"title":"Future Diary",
				"image":"img/mirainikki.png",
				"genre":"Horror"
			},

			
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

    /*  remove soon
	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let a = document.getElementById('newActors');

		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();	
		this.showMovieList();	
	}

	updateMovie(key){
		let t = document.getElementById('updateTitle');
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		let a = document.getElementById('updateActors');

		let m = this.movies[key];
		let movie = {"id":m.id,"Title":t.value,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();
		this.showMovieList();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchMovie(value=""){
		let objects = [];
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			let expr2 = (r[i].Year.toUpperCase().indexOf(value.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr1 || expr2){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
	*/
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		let html = `    
		<div id="tophead" class="header">
                       
            <h3 class="titletext">
            	<a href="#!" onclick="component.back()"><img class="anime-logo" src="img/animelogo2.png"  /></a>
            	Anime Site <br>
            </h3>	
          </div>


		<div id="loginf" class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 60px 100px 60px 100px; border: 1px solid #EEE;">

        	<form>
        		<div class="form-group">
        		    <h4 class="wow">Registration</h4>
        		    <br>
        			<label for="namereg">User Name</label>
        			<input id="nameregs" placeholder="Enter Here">
        			<large class="form-text text-muted">You may enter only your first name</small>
        		</div>
        		<br>
        		<br>
        		<br>
        		<br>
        		<a href="#!" class="btn" onclick="component.Welcomes()" >Submit</a>

   
        	</form>

        </div>
        </div>

 		<div id="home" class="container">
 		<div id="row">
        
        	 `; 

        for(let index=0;index<this.animes.length;index++){
            html +=`

                     <div id="cards col-md-3 col-sm-offset-5" class="col-md-3 col-sm-offset-5">
                            <div class="card-block">
                              <img class="card-img-top" src="${this.animes[index].image}">
                              <div class="card-block">
                                <h4 class="card-title"> ${this.animes[index].title} </h3>
                                <p class="card-text">  ${this.animes[index].genre} </p>
                                <p><a href="#" class="btn btn-primary" role="button">More Infos</a>
                            </div>
                        </div>
                    </div>

            `; 
        }
        html+=  `
        

	
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

	}

    Welcomes(){
		$('#tophead').show();
		$('#loginf').hide();
		$('#footerlogo').show();
		$('#home').show();
	}
	back(){
		$('#tophead').show();
		$('#loginf').show();
		$('#footerlogo').show();
   		$('#home').hide();
	}


	Appbackground(){
		this.render(
			``
			,document.getElementById('appback'));
	}	

	

}

let component = new Component();
component.movieList();
