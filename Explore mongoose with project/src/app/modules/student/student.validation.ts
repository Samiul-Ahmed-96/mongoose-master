import { z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'First name cannot be more than 20 characters' })
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: '{VALUE} is not in capitalize format',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: '{VALUE} is not supported',
    }),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
});

// Define the LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z.string(),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' }),
});

// Define the main Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }),
  password: z.string().max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: '{VALUE} is not a valid gender' }),
  }),
  email: z
    .string()
    .email({ message: '{VALUE} is not supported' })
    .min(1, { message: 'Email is required' }),
  profileImg: z.string().optional(),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], {
      errorMap: () => ({ message: '{VALUE} is not a valid blood group' }),
    })
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({ message: '{VALUE} is not a valid status' }),
    })
    .default('active'),
});

export default studentValidationSchema;
