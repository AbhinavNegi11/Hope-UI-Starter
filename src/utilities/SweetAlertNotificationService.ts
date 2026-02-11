import Swal from "sweetalert2";

export class NotificationService {
    static showError(title: string, message: string): void {
        Swal.fire({
            icon: "error",
            title: title,
            text: message,
        });
    }

    static showSuccess(title: string, message: string): void {
        Swal.fire({
            icon: "success",
            title: title,
            text: message,
        });
    }

    static showWarning(title: string, message: string): void {
        Swal.fire({
            icon: "warning",
            title: title,
            text: message,
        });
    }
}