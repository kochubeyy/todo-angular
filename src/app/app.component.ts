import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER, TuiNotificationModule
} from '@taiga-ui/core';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from "@angular/common";
import { ButtonComponent } from './components/button/button.component';
import { CompanyListComponent } from "./components/company-list/company-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperCasePipe,
    ButtonComponent,
    CompanyListComponent,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiNotificationModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [
      {
        provide: TUI_SANITIZER, useClass: NgDompurifySanitizer
      },
    ]
})


export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor() {
  }

  ngOnInit() {
  }
}
