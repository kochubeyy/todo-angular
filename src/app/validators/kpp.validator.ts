import { AbstractControl, ValidatorFn } from '@angular/forms';

export function kppValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    if (value && value.length !== 9) {
      return { 'invalidKppLength': true };
    }

    return null;
  };
}
