export interface ForgotPasswordRequest {
  email: string;
  newPassword: string;
  mobileNumber: string; // <-- must exist here
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  newPassword: string;
}
