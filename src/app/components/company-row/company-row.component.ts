import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { ICompany } from '../../types';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { tuiIconEdit2, tuiIconX } from '@taiga-ui/icons';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiDialogContext, TuiDialogService, TuiHintModule } from '@taiga-ui/core';
import { Store } from '@ngxs/store';
import { Delete} from '../../store/actions/company.action';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-company-row',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
    TuiHintModule,
    TuiButtonModule,
  ],
  templateUrl: './company-row.component.html',
  styleUrl: './company-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CompanyRowComponent implements OnInit {
  @Input() company: ICompany;

  protected readonly tuiIconX = tuiIconX;
  protected readonly tuiIconEdit2 = tuiIconEdit2;
  constructor(
    private store: Store,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
  ) {}

  showDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogs.open(content, {
      closeable: false,
    }).subscribe();
  }

  delete(event: MouseEvent, observer: { complete: () => void; }) {
    event.preventDefault();
    observer.complete();
    this.store.dispatch(new Delete(this.company));
  }

  ngOnInit() {
  }
}
