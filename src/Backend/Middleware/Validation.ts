import { ValidationChain, body } from 'express-validator'
import { NextHandler } from 'next-connect'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const signUpValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required!')
    .isString()
    .isLength({ max: 100, min: 5 })
    .withMessage('Username must be at least 5 to 100 char.'),
  body('password')
    .notEmpty()
    .withMessage('Password is required!')
    .isLength({ min: 5, max: 20 })
    .withMessage('password should be greater than 5 to 20 characters.'),
  body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail({ allow_display_name: true })
    .withMessage('Please enter a valid email address.'),
]

//ZOD VALIDATION
export const getSignupSchema = () => {
  return z.object({
    name: z.string().nonempty({ message: 'Name is required!' }),
    email: z
      .string()
      .nonempty({ message: 'Email is required!' })
      .email({ message: 'Invalid email' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required!' })
      .max(30, { message: 'password must be upto 30 characters' })
      .min(3, { message: 'password is too short' }),
  })
}

export const getLoginSchema = () => {
  return z.object({
    email: z
      .string()
      .nonempty({ message: 'Email is required!' })
      .email({ message: 'Invalid email' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required!' })
      .max(15, { message: 'password must be upto 15 characters' })
      .min(3, { message: 'password is too short' }),
  })
}

export const getAddPasswordSchema = () => {
  return z.object({
    catagory: z
      .string({ message: 'Catagory must be string' })
      .nonempty({ message: 'Catagory  is required' }),
    name: z.string().nonempty({ message: 'name is required!' }),
    password: z.string().nonempty({ message: 'Password is required!' }),
    url: z.string({ message: 'Catagory must be string' }).optional(),
    image: z.string({ message: 'Image must be string' }).optional(),
    notes: z.string({ message: 'notes must be string' }).optional(),
    description: z.string({ message: 'description must be string' }).optional(),
  })
}

export const Validation = {
  add_password_validatioon: z.object({
    catagory: z.string().nonempty({ message: 'Chooose One Catagory' }),
    password_name: z
      .string()
      .nonempty({ message: 'Enter a password name' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    password: z
      .string()
      .nonempty({ message: 'Enter Password' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    url: z
      .string()
      .nonempty({ message: 'Enter URL' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  }),
  add_task_validation: z.object({
    task_name: z
      .string()
      .nonempty({ message: 'Enter a Task name' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    description: z
      .string()
      .nonempty({ message: 'Enter description' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    priority: z
      .string()
      .nonempty({ message: 'Selected Priority' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  }),
  add_notes_validation: z.object({
    title: z
      .string()
      .nonempty({ message: 'Enter note name' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    description: z
      .string()
      .nonempty({ message: 'Enter note description' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
    priority: z
      .string()
      .nonempty({ message: 'Select Priority' })
      .refine((arg) => !/[!$%^&*()<>]/.test(arg)),
  }),
}


//account or auth validation 

export const SCHEMA_VALIDATION = {
  signup_schema: z.object({
      name: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
      email: z.string().nonempty({ message: 'Cannot leave the empty field!' }).email().refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
      password: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!$%^&()|/]/.test(data))
  }),
  login_schema: z.object({
      email: z.string().nonempty({ message: 'Cannot leave the empty field!' }).email().refine(data => !/[*<>?!#$%^&()|/]/.test(data)),
      password: z.string().nonempty({ message: 'Cannot leave the empty field!' }).refine(data => !/[*<>?!$%^&()|/]/.test(data))
  }),
}