import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  telescopes: any[] = [
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/87/98/19887/images/8284/8284.650.gif",
      name: "Телескоп Celestron AstroFi 102",
      desc: "Управляйте телескопом через телефон или планшет. Передовая серия телескопов от Celestron.",
      price: "49.990"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/99/08/10899/images/332/332.650.jpg",
      name: "Телескоп Sky-Watcher Dob 8 (200/1200) Retractable",
      desc: "Это высококачественный зеркальный телескоп на азимутальной монтировке Добсона. Особенностью этой модели является складная конструкция оптической трубы.",
      price: "63.990"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/77/01/20177/images/11028/11028.650.jpg",
      name: "Телескоп Sky-Watcher BK MAK102 AZ-EQ AVANT на треноге Star Adventurer",
      desc: "Телескоп Sky-Watcher BK MAK102 прекрасно подходит для астрономических наблюдений вне городской засветки.",
      price: "39.990"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/48/80/18048/images/10421/10421.650.jpg",
      name: "Телескоп Meade 16 LX600-ACF f/8 с системой StarLock (без треноги)",
      desc: "Уникальное передовое решение Meade для пользователей любого уровня подготовки, которое идеально подходит как для визуальных наблюдений, так и для астрофотографии.",
      price: "3.015.490"
    }
  ]

  microscopes: any[] = [
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/50/24/22450/images/18782/18782.650.jpg",
      name: "Микроскоп Микромед Атом 40x-640x (аметист)",
      desc: "Стильный микроскоп в прозрачном корпусе – серьезный подарок для будущего исследователя, увеличение 40–640х, регулируемая светодиодная подсветка предметного столика, эргономичный наглазник, набор для опытов.",
      price: "2.560"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/71/92/19271/images/9782/9782.650.jpg",
      name: "Микроскоп Bresser Science MTL-201",
      desc: "Микроскоп Bresser Science MTL-201 – это профессиональный металлографический (металлургический) микроскоп, позволяющий изучать непрозрачные объекты на больших увеличениях (50-800 крат).",
      price: "299.990"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/78/22/22278/images/16545/16545.650.jpg",
      name: "Микроскоп цифровой Levenhuk MED D40T LCD, тринокулярный",
      desc: "Levenhuk MED D40T LCD – микроскоп с ЖК-дисплеем, созданный для лабораторных исследований.",
      price: "169.990"
    },
    {
      link: "https://planetarium.ru/wa-data/public/shop/products/84/91/19184/images/5808/5808.650.jpg",
      name: "Микроскоп Микромед МЕТ-3",
      desc: "Микроскоп Микромед МЕТ-3 предназначен для визуального наблюдения микроструктуры металлов, сплавов и других непрозрачных объектов в отраженном свете при прямом освещении в светлом поле.",
      price: "558.620"
    }
  ]

  binoculares: any[] = []

  monoculars: any[] = []

  trumpets: any[] = []

  shtatives: any[] = []

  loupes: any[] = []

  books: any[] = []

  others: any[] = []

  constructor() { }
}
