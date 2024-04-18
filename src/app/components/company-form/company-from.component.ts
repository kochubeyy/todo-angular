import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiCheckboxModule, TuiInputModule, TuiInputNumberModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ICompanyForm} from "../../types";
import {innValidator} from "../../validators/inn.validator";
import {kppValidator} from "../../validators/kpp.validator";

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiLabelModule,
    TuiCheckboxModule,
    TuiButtonModule,
    TuiInputNumberModule,
    NgxsFormPluginModule,
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgForOf,
  ],
  templateUrl: './company-from.component.html',
  styleUrl: './company-from.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyFromComponent implements OnInit {
  @Output() submit = new EventEmitter<ICompanyForm>();

  public form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    shortName: new FormControl('', [Validators.required]),
    inn: new FormControl(null, [Validators.required, innValidator]),
    kpp: new FormControl(null, [Validators.required, kppValidator]),
    postAddress: new FormControl('', [Validators.required]),
    factAddress: new FormControl('', [Validators.required]),
    isAddressEq: new FormControl(false),
  })

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(event: SubmitEvent) {
    event.stopPropagation();

    this.submit.emit({
      fullName: this.form.value.fullName!,
      shortName: this.form.value.shortName!,
      inn: this.form.value.inn!,
      kpp: this.form.value.kpp!,
      postAddress: this.form.value.postAddress!,
      factAddress: this.form.value.factAddress!,
      isAddressEq: this.form.value.isAddressEq!,
    });
  }
}
