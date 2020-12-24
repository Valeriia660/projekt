import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  telescopes: any[] = [
    {
      link: "https://sun9-5.userapi.com/fwMi8qBO8bj6CXBgrLAhLYl9NULgEcDJIMQOIg/jFkFYgqeGnE.jpg",
      name: "Телескоп Супер крутой",
      desc: "длиииииииииииииииииииигной паравдорпдвоыла",
      price: 12000,
      height: 120
    },
    {
      link: "https://sun9-5.userapi.com/fwMi8qBO8bj6CXBgrLAhLYl9NULgEcDJIMQOIg/jFkFYgqeGnE.jpg",
      name: "Телескоп Супер круто 242142345й",
      desc: "длиииииииииииииииии пыавпывап выап ыва пыв павыииигной паравдорпдвоыла",
      price: 150,
      height: -1
    }
  ]

  microscopes: any[] = []

  constructor() { }
}
