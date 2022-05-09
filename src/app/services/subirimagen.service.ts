import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubirimagenService {
  data:any  = firebase.initializeApp(environment.firebaseConfig);
  storareref = firebase.app().storage().ref();


  constructor() { }

  async subirImagen(fecha:any,imgBase64:any)
  {
    try {
      
      let respuesta = await this.storareref.child("users/"+fecha).putString(imgBase64,'data_url');
      return await respuesta.ref.getDownloadURL();
      
    } catch (error) {
      console.log(error);
      
      return null;
      
    }
  }
}
