import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../appservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public url: String
  public img_urls: String[]



  constructor(private http: HttpClient, private appservice: AppService, private router: Router) { }

  ngOnInit() {

    this.appservice.changeCurrentPage('landingPage')

    let header_node = {
      headers: new HttpHeaders(
        // { 'Accept': 'application/json' },
        { 'rejectUnauthorized': 'false' })
    };

    // this.http.post<any>("https://localhost/isLoggedIn", {}, { withCredentials: true })
    //   .subscribe(
    //     data => {
    //       console.log(data)
    //       if (data.result == 'suc') {
    //         this.appservice.changeLoginState("loggedIn");
    //         this.router.navigateByUrl("/admin");


    //       }
    //       else {
    //         this.appservice.changeLoginState("loggedOut");

    //       }

    //     }
    //     // // console.log

    //   )

    this.img_urls = [
      //   "https://posterspy.com/wp-content/uploads/2022/01/Avatar-The-Way-Of-Water.jpg",
      // "https://img.youtube.com/vi/RPjzg7S1K2Q/sddefault.jpg",
      // "https://assets.thehansindia.com/h-upload/2022/03/03/1279698-vikram.webp",
      // "https://c4.wallpaperflare.com/wallpaper/982/102/351/movie-poster-star-wars-leia-organa-darth-vader-wallpaper-preview.jpg",
      // "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
      "https://wallpapercave.com/wp/wp1946040.jpg",
      "https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg",
      "https://w0.peakpx.com/wallpaper/156/622/HD-wallpaper-avengers-endgame-all-characters-superheroes-movies.jpg",
      "https://wallpaperaccess.com/full/1076854.jpg",
      "https://i.pinimg.com/originals/be/d6/3e/bed63e4fa1a1be8cea48b3c630218778.jpg",
      "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg"



    ];

    this.url = "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg";
    setInterval(() => {
      console.log('change img')
      console.log(this.url)
      console.log(this.img_urls);
      var imgNo = Math.floor(Math.random() * this.img_urls.length)
      console.log(imgNo)
      this.url = this.img_urls[imgNo]
    }, 5000)

    // 
  }

  // changeImg()

}
