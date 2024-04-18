import { AbstractControl, ValidatorFn } from '@angular/forms';

export function innValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    if (value && (value.length !== 10 && value.length !== 12)) {
      return { 'invalidInnLength': true };
    }

    return null;
  };
}
