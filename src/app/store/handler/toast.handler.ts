import { Inject, Injectable } from '@angular/core';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { TuiAlertService } from '@taiga-ui/core';
import { Create, Delete, Update } from '../actions/company.action';
import { mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastHandler {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService, private actions$: Actions) {
    this.actions$
      .pipe(
        ofActionSuccessful(Delete),
        mergeMap(() => this.alerts.open('Комания упешно удалена из списка!', {status: 'success', label: 'Удалено!'}))
      )
      .subscribe();

    this.actions$
      .pipe(
        ofActionSuccessful(Create),
        mergeMap(() => this.alerts.open('Комания упешно добавлна в список!', {status: 'success', label: 'Добавлено!'}))
      )
      .subscribe();

    this.actions$
      .pipe(
        ofActionSuccessful(Update),
        mergeMap(() => this.alerts.open('Данные о компании обновлены!', {status: 'success', label: 'Обновлено!'}))
      )
      .subscribe();
  }
}
