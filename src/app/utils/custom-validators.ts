import { FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static atLeastOneShouldBeSelected(group: FormGroup) {
    console.log(group.value);
    if (Object.values(group.value).includes(true)) return null;
    return { atLeastOneShouldBeSelected: true }
  }

  static dateShouldBePassed(control): ValidationErrors | null {
    const userDate = Date.parse(control.value);
    if (userDate < Date.now()) return;
    return { dateShouldBePassed: true };
  }
}
