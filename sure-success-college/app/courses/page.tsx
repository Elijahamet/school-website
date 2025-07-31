import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      name: "WASSCE Regular",
      duration: "1 Academic Year",
      description:
        "Comprehensive preparation for the West African Senior School Certificate Examination, covering all core and elective subjects.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "NOVDEC Remedial (Morning)",
      duration: "6 Months",
      description:
        "Intensive morning classes designed to help students improve their grades for the November/December WASSCE.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "NOVDEC Remedial (Evening)",
      duration: "6 Months",
      description:
        "Flexible evening classes for working students or those with other commitments, focusing on NOVDEC preparation.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Vacation Classes",
      duration: "School Holidays",
      description:
        "Engaging and productive classes during school breaks to revise, catch up, or get ahead in various subjects.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Adult Education / University Prep",
      duration: "Flexible",
      description:
        "Tailored programs for adult learners and those preparing for university entrance exams or bridging courses.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "International Exams (SAT, IELTS, TOEFL)",
      duration: "Varies",
      description:
        "Specialized coaching for international standardized tests required for overseas university admissions.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Academic Programs</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our diverse range of courses designed to cater to every student&apos;s academic needs and aspirations.
        </p>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-200">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={course.image || "/placeholder.svg"}
              width={400}
              height={250}
              alt={course.name}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">{course.name}</CardTitle>
              <CardDescription className="text-primary font-medium">{course.duration}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
