import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [],
})
export class DemoComponent {
  public static sharedStyles = [
    '.tooltipTrigger { color:#710ECC; cursor: help; }',
    '.label { display:inline-block; width:250px; }',
    '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
    '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
    '.superButtonSecondary { border-color: rgb(164, 227, 254); background-color:rgb(164, 227, 254); }',
    '.superButtonSecondary:hover { border-color:rgb(164, 227, 254); background-color:#fff; color:rgb(164, 227, 254);  }',
    '.superButton:disabled, .superButtonSecondary:disabled { border-color:#777; background-color:#777; color:#fff; cursor:not-allowed;  }',
  ]
}
