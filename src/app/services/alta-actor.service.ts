import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class AltaActorService {

  private dbPath = '/altaActor';

  MensajesRef: AngularFirestoreCollection<Actor>;
 
  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Actor> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef;
  }

  create(mensajes: Actor): any {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: Actor): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).delete();
  }
}
