import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ICompany } from "../../types";
import { CompanyService } from "../../service/company.service";
import { CompanyRowComponent } from "../company-row/company-row.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {GetAll} from '../../store/actions/company.action';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CompanyState} from '../../store/states/company.state';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CompanyRowComponent,
    NgForOf,
    AsyncPipe,
    TuiNotificationModule,
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyListComponent implements OnInit {
  @Select(CompanyState.getCompanyList)
  data$: Observable<ICompany[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetAll());
  }
}
