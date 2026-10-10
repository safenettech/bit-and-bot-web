import { z } from "zod"

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name must be less than 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid business email address." }),
  company: z.string().max(100).optional().or(z.literal("")),
  phone: z.string().max(25).optional().or(z.literal("")),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(3000, { message: "Message must be less than 3,000 characters." }),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const projectEnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  company: z.string().max(100).optional().or(z.literal("")),
  serviceType: z.string().min(1, { message: "Please select a service category." }),
  budget: z.string().min(1, { message: "Please select an estimated budget range." }),
  timeline: z.string().optional(),
  projectOverview: z
    .string()
    .min(15, { message: "Please describe your project in at least 15 characters." })
    .max(4000),
})

export type ProjectEnquiryFormValues = z.infer<typeof projectEnquirySchema>
