import { Component} from '@angular/core';
 //tuk ni e importnat samiq class

import { of } from 'rxjs';
import { map } from 'rxjs/operators';


// const promise = new Promise((resolve, reject)=>{//(promisite ne sa marzelivi, obzurvalite-da), edin promise v momenta v koito se suzdava , avtomati4no se startira i si stoi dori da ne bude izvikan(minus za razlika ot obzurvalite,)
//   setTimeout(()=> resolve(3000), 3000)
//   //promisite nqma kak da gi cancelirame
//   //po promise verigata kogato tq se suzdade, moje da premine samo edna stoinost, sled koeto promisa umira, dokato pri obzurvalite moje da prmine po edna veriga mnojestvo st-sti
// })

// promise.then((value)=> console.log(value)
// )

[1000, 200, 300].map((x) => x + 100).map(console.log); //sinhronno

Promise.resolve(1000)
  .then((x) => x + 1)
  .then(console.log); //asinhronno

of(1000, 200, 300)
  .pipe(map((x) => x + 100))
  .subscribe((x) => console.log(x)); //obzurvable, moje sinhronno e asinhronno. kakto iskame nie.
//4rez pipe bindvame, toest podavame conteinera(obzurvala na operatora map. tui kato nemojem da go izpolzvame direktno, go podavame 4rez pipe()),
//sus subscribe, sujivqvame obzurvala, toest kazvame mu sega napravi tova za koeto si suzdaden, nie re6avame momenta koga toi da izvur6i dadena operaciq

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //ako e public 6te bude dostupno i vuv html file(view)
  // constructor(public userService: UserService){// a tova koeto izpolzvame tuk e instanziq, toest obekt koito idva ot UserService

  // }

}
