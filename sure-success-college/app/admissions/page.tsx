"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    program: "",
    resultSlip: null as File | null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, program: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resultSlip: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // In a real application, you would send this data to a backend API
    alert("Application submitted successfully! We will contact you soon.")
    setFormData({
      fullName: "",
      phoneNumber: "",
      program: "",
      resultSlip: null,
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Admissions</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Start your journey to academic success. Fill out the form below to apply to Sure Success College.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 animate-fade-in delay-200">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Application Form</CardTitle>
            <CardDescription className="text-muted-foreground">
              Please fill in your details and select your desired program.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+233 24 123 4567"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="program">Select Program</Label>
                <Select onValueChange={handleSelectChange} value={formData.program} required>
                  <SelectTrigger id="program">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wassce-regular">WASSCE Regular</SelectItem>
                    <SelectItem value="novdec-morning">NOVDEC Remedial (Morning)</SelectItem>
                    <SelectItem value="novdec-evening">NOVDEC Remedial (Evening)</SelectItem>
                    <SelectItem value="vacation-classes">Vacation Classes</SelectItem>
                    <SelectItem value="adult-education">Adult Education / University Prep</SelectItem>
                    <SelectItem value="international-exams">International Exams (SAT, IELTS, TOEFL)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="resultSlip">Upload Result Slip (PDF/Image)</Label>
                <Input
                  id="resultSlip"
                  name="resultSlip"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                {formData.resultSlip && (
                  <p className="text-sm text-muted-foreground">File selected: {formData.resultSlip.name}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your academic goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="space-y-4 animate-fade-in delay-300">
            <h2 className="text-3xl font-bold text-secondary">Registration Guide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Follow these simple steps to complete your registration process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Fill the Online Form: Complete the application form on this page with accurate details.</li>
              <li>Upload Documents: Attach your previous academic result slips (e.g., BECE, WASSCE) as required.</li>
              <li>Submission & Review: Submit the form. Our admissions team will review your application.</li>
              <li>Interview/Assessment (if applicable): You may be contacted for a brief interview or assessment.</li>
              <li>Admission Offer: Successful applicants will receive an admission offer via email or phone.</li>
              <li>Payment & Enrollment: Complete the payment of fees to secure your enrollment.</li>
              <li>Orientation: Attend our orientation program to get familiar with the college environment.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              For any assistance during the application process, please do not hesitate to{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
          <div className="space-y-4 animate-fade-in delay-400">
            <h2 className="text-3xl font-bold text-secondary">Required Documents</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Completed Application Form (online)</li>
              <li>Copy of Birth Certificate or Ghana Card</li>
              <li>Recent Passport-sized Photographs (2)</li>
              <li>Previous Academic Transcripts/Result Slips (e.g., BECE, WASSCE)</li>
              <li>Recommendation Letter (optional, for certain programs)</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              *Specific requirements may vary based on the program.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
