namespace App {
    // Validation
    export interface Validatable {
        value: string | number;
        required?: boolean;
        // in case the value is a string it should have minLength and maxLength
        minLength?: number;
        maxLength?: number;
        // in case value is a number it should be in a range of min to max
        min?: number;
        max?: number;
    }

    export function validate(validatableInput: Validatable) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0
        }
        if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
            isValid = isValid && validatableInput.value.length >= validatableInput.minLength
        }
        if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
            isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
        }
        if (validatableInput.min != null && typeof validatableInput.value == 'number') {
            isValid = isValid && validatableInput.value >= validatableInput.min
        }
        if (validatableInput.max != null && typeof validatableInput.value == 'number') {
            isValid = isValid && validatableInput.value <= validatableInput.max
        }
        return isValid
    }

}