
import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().required("*Please enter your username"),
  password: Yup.string().min(8).required("*Please enter your password")
});