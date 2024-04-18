import {ICompany, ICompanyForm} from '../../types';

export class Add {
  static readonly type = '[Company] Add';
  constructor(public payload: ICompany) {}
}

export class Update {
  static readonly type = '[Company] Edit';
  constructor(public payload: ICompany) {}
}

export class Create {
  static readonly type = '[Company] Create';
  constructor(public payload: ICompanyForm) {}
}

export class Read {
  static readonly type = '[Company] Read';
  constructor(public id: string) {}
}

export class GetAll {
  static readonly type = '[Company] Get All';
}

export class Delete {
  static readonly type = '[Company] Delete';
  constructor(public payload: ICompany) {}
}
