import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function imieValidator(imie: string): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        let errorFound = false;
        let errorDescripiton = { niedozwolone: false}

        if (control.value === imie) {
            errorFound = true;
            errorDescripiton.niedozwolone = true;
        }

        return errorFound ? errorDescripiton : null;
    }
}