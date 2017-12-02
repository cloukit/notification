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
    '.row { display: flex }',
    '.col { flex: 1 }',
    `.eventLog { display:flex; flex-direction: column; padding: 10px; 
                 margin:10px 20px 10px 0; overflow-y: scroll;
                 height:100px; background-color: #efefef; }`,
    '.eventLogEntry { padding: 5px; }',
    '.eventLogEntry-1 { border-left:8px solid #FE8A29; color: #FE8A29; }',
    '.eventLogEntry-2 { border-left:8px solid #FE2929; color: #FE2929;}',
    '.eventLogEntry-3 { border-left:8px solid #21CC21; color: #21CC21;}',
    '.eventLogEntry-4 { border-left:8px solid #189999; color: #189999;}',
    '.eventLogEntry-5 { border-left:8px solid #CC2182; color: #CC2182;}',
  ]
}
