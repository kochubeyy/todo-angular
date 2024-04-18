import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { Read } from '../../store/actions/company.action';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ICompany } from '../../types';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    ContainerComponent,
    NgIf
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
  company$: ICompany;
  id:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new Read(this.id)).subscribe(({ company: { data } }) => {
      const [company] = data;
      this.company$ = company;
    });
  }
}
