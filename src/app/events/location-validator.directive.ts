import { Directive } from "@angular/core";
import { Validators, FormGroup } from "@angular/forms"; 

@Directive({
    selector:'[validateLocation]',


})
export class LocationValidator implements Validators{
    validate(formGroup: FormGroup):{[key:string]: any}{
        let adressControl =formGroup.controls['adress'];
        let cityControl =formGroup.controls['city'];
        let countryControl =formGroup.controls['country'];
        let onlineUrlControl =(<FormGroup>formGroup.root).controls['onlineUrl'];

        if((adressControl && adressControl.value && cityControl &&cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
            return null;
        }else{
            return {validateLocation :false}
        }
    }
}