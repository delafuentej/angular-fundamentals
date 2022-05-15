import { Directive } from "@angular/core";
import { Validators, FormGroup, NG_VALIDATORS } from "@angular/forms"; 

@Directive({
    selector:'[validateLocation]',
    providers: [
        {
            provide: NG_VALIDATORS, 
            useExisting:LocationValidator,
            multi:true
        }

    ]


})
export class LocationValidator implements Validators{
    validate(formGroup: FormGroup):{[key:string]: any}{
        const adressControl =formGroup.controls['adress'];
        const cityControl =formGroup.controls['city'];
        const countryControl =formGroup.controls['country'];
        const onlineUrlControl =(<FormGroup>formGroup.root).controls['onlineUrl'];

        if((adressControl && adressControl.value && cityControl &&cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
            return null;
        }else{
            return {validateLocation :false}
        }
    }
}