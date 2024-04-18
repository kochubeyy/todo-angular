export interface ICompany {
  id: string;
  fullName: string;
  shortName: string;
  inn: number;
  kpp: number;
  postAddress: string;
  factAddress: string;
  isAddressEq: boolean;
}

export type ICompanyForm = Omit<ICompany, 'id'>;
