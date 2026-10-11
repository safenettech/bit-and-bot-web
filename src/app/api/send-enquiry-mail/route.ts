import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"
import { sendEnquiryEmail } from "@/lib/mail/send-mail"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body using Zod schema
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { fullName, email, company, phone, subject, message } =
      validationResult.data

    // Send email using reusable sendEnquiryEmail function (with TO and CC)
    const emailResult = await sendEnquiryEmail({
      fullName,
      email,
      company,
      phone,
      subject,
      message,
      to: process.env.EMAIL_SENDTO || "mskvgames2023@gmail.com",
      cc: process.env.EMAIL_CCTO || "msafvankv786@gmail.com",
    })

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || "Failed to dispatch email",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry email dispatched successfully",
        messageId: emailResult.messageId,
      },
      { status: 200 }
    )
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    )
  }
}
