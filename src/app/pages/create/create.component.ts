import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContainerComponent} from '../../components/container/container.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ICompany, ICompanyForm} from '../../types';
import {TuiCheckboxModule, TuiInputModule, TuiInputNumberModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {ButtonComponent} from '../../components/button/button.component';
import {Store} from '@ngxs/store';
import {Create} from '../../store/actions/company.action';
import {CompanyFromComponent} from "../../components/company-form/company-from.component";
import {ResetForm} from "@ngxs/form-plugin";

@Component({
  selector: 'app-create',
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
    CompanyFromComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(
      new ResetForm({
        path: 'company.selected'
      })
    );
  }

  onSubmit(company: ICompanyForm) {
    this.store.dispatch(new Create({
      ...company
    }))
  }
}
