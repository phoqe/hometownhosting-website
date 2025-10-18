"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  interests: string[]
  message: string
}) {
  if (!process.env.CONTACT_EMAIL) {
    console.error("[v0] CONTACT_EMAIL environment variable is not set")
    return { success: false, error: "Email configuration error" }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Hometown Hosting <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Interested in:</strong></p>
        <ul>
          ${formData.interests.map((interest) => `<li>${interest}</li>`).join("")}
        </ul>
        ${formData.message ? `<p><strong>Additional Message:</strong></p><p>${formData.message}</p>` : ""}
      `,
    })

    if (error) {
      console.error("[v0] Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
