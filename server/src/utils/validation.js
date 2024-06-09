import { body, validationResult} from "express-validator"
export const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req)
      if (result.isEmpty()) {
        break
      }
    }
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(422).json({errors: errors.array()})
  }
}
export const signUpValidator = [
  body("name").notEmpty().withMessage("Name field is required"),
  body("email").trim().isEmail().withMessage("Email field is required"),
  body("password").trim().isLength({min: 6}).withMessage("Password should contain at least 6 characters")
]


export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email field is required"),
  body("password").trim().isLength({min: 6}).withMessage("Password should contain at least 6 characters")
]


export const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message is required"),
]