import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [`
      a {
        text-decoration: none;
        padding: 2px 1px 0;
      }
      a:link {
      color: #265301;
      }

      a:visited {
        color: #437A16;
      }

      a:focus {
        background: #BAE498;
      }

      a:hover {
        background: #CDFEAA;
      }

      h1 {
        font-weight: bold;
        margin: 20px;
      }

      li {
        list-style: none;
        margin: 20px;
      }
  `
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
