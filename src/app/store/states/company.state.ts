import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ICompany} from '../../types';
import {CompanyService} from '../../service/company.service';
import {Create, Delete, GetAll, Read, Update} from '../actions/company.action';
import {tap} from 'rxjs';
import {ResetForm} from "@ngxs/form-plugin";
import {Navigate} from "@ngxs/router-plugin";

export interface CompanyStateModel {
  data: ICompany[];
  selected: {
    model: ICompany | null,
    dirty: boolean,
    status: string,
    errors: any
  },
}

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    data: [],
    selected: {
      model: null,
      dirty: false,
      status: '',
      errors: {}
    },
  },
})
@Injectable()
export class CompanyState {
  constructor(
    private companyService: CompanyService,
  ) {
  }

  @Selector()
  static getCompanyList(state: CompanyStateModel) {
    return state.data;
  }

  @Selector()
  static getCompany(state: CompanyStateModel) {
    return state.selected;
  }

  @Action(GetAll)
  getAll(ctx: StateContext<CompanyStateModel>, action: GetAll) {
    return this.companyService.getAll().pipe(
      tap<ICompany[]>((company) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          data: [...company],
        })
      })
    )
  }

  @Action(Create)
  create(ctx: StateContext<CompanyStateModel>, action: Create) {
    return this.companyService.create(action.payload).pipe(
      tap<ICompany>(company => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          data: [...state.data, company],
        });

        // ctx.dispatch(
        //   new ResetForm({
        //     path: 'company.selected'
        //   })
        // );

        ctx.dispatch(new Navigate(['/']));
      })
    )
  }

  @Action(Read)
  read(ctx: StateContext<CompanyStateModel>, action: Read) {
    return this.companyService.read(action.id).pipe(
      tap<ICompany>(company => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          selected: {
            ...state.selected,
            model: company
          },
        })
      })
    )
  }

  @Action(Update)
  update(ctx: StateContext<CompanyStateModel>, action: Update) {
    return this.companyService.update(action.payload).pipe(
      tap<ICompany>(company => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          data: state.data.map(c => c.id === action.payload.id ? company : c)
        });

        // ctx.dispatch(
        //   new ResetForm({
        //     path: 'company.selected'
        //   })
        // );

        ctx.dispatch(new Navigate(['/']));
      })
    )
  }

  @Action(Delete)
  delete(ctx: StateContext<CompanyStateModel>, action: Delete) {
    return this.companyService.delete(action.payload.id).pipe(
      tap<ICompany>(company => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          data: state.data.filter(company => company.id !== action.payload.id)
        });
      })
    )
  }
}
