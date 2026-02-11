import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Partnera } from "../Entity/Partnera";

import { NotificationService } from "@/utilities/SweetAlertNotificationService";
import { showToast } from "@/utilities/ToastNotification";

export async function validatePartneraForm(payload: any): Promise<boolean> {
    const partnera = plainToInstance(Partnera, payload);
    const errors = await validate(partnera);

    if (errors.length > 0) {
        // Extract and display the first validation error
        const firstError = errors[0].constraints
            ? Object.values(errors[0].constraints)[0]
            : "Validation failed.";
        NotificationService.showError("Validation Error", firstError);
        return false;
    }

    //NotificationService.showSuccess("Success", "Form validation passed!");   
    return true;
}