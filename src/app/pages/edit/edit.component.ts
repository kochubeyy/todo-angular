import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContainerComponent} from '../../components/container/container.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxModule, TuiInputModule, TuiInputNumberModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {ButtonComponent} from '../../components/button/button.component';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngxs/store';
import {Read, Update} from '../../store/actions/company.action';
import {NgxsFormPluginModule, ResetForm} from "@ngxs/form-plugin";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {ICompanyForm} from "../../types";
import {CompanyFromComponent} from "../../components/company-form/company-from.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ContainerComponent,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiLabelModule,
    ButtonComponent,
    TuiCheckboxModule,
    TuiButtonModule,
    TuiInputNumberModule,
    NgxsFormPluginModule,
    AsyncPipe,
    JsonPipe,
    CompanyFromComponent,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  private id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.store.dispatch(
      new ResetForm({
        path: 'company.selected'
      })
    );
    this.store.dispatch(new Read(this.id));
  }

  onSubmit(company: ICompanyForm) {
    this.store.dispatch(
      new Update({
        id: this.id,
        ...company
      })
    )
  }
}
