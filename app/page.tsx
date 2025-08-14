import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, School } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="container relative z-10 flex flex-col items-center justify-center space-y-6 text-center px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-up">
            Welcome to Sure Success College
          </h1>
          <p className="max-w-[800px] text-lg md:text-xl lg:text-2xl opacity-90 animate-fade-in-up delay-200">
            Helping students achieve academic greatness in NOVDEC, WASSCE & more.
          </p>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-105 animate-fade-in-up delay-400"
          >
            <Link href="/admissions">Register Now</Link>
          </Button>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-200">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">WASSCE Regular</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-muted-foreground">
                  Comprehensive preparation for the West African Senior School Certificate Examination.
                </p>
                <Button variant="link" asChild className="mt-4 text-primary hover:text-primary/80">
                  <Link href="/courses">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-400">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <BookOpen className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-2xl font-bold">Remedial Classes</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-muted-foreground">
                  Targeted support for students looking to improve their NOVDEC results.
                </p>
                <Button variant="link" asChild className="mt-4 text-secondary hover:text-secondary/80">
                  <Link href="/courses">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-600">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <School className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold">Vacation Classes</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-muted-foreground">
                  Engaging and productive classes during school breaks to stay ahead.
                </p>
                <Button variant="link" asChild className="mt-4 text-accent hover:text-accent/80">
                  <Link href="/courses">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Slider (simplified to grid) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">What Our Students Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-200">
            <Card className="bg-card text-card-foreground p-6 shadow-md">
              <p className="text-lg italic mb-4">
                "Sure Success College truly lives up to its name! The teachers are dedicated, and the learning
                environment is fantastic. I improved my WASSCE grades significantly."
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Student 1"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Ama Serwaa</p>
                  <p className="text-sm text-muted-foreground">Former WASSCE Student</p>
                </div>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground p-6 shadow-md">
              <p className="text-lg italic mb-4">
                "The NOVDEC remedial classes were a game-changer for me. I finally understood concepts I struggled with
                for years. Highly recommend Sure Success College!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Student 2"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Kwame Nkrumah</p>
                  <p className="text-sm text-muted-foreground">NOVDEC Remedial Student</p>
                </div>
              </div>
            </Card>
            <Card className="bg-card text-card-foreground p-6 shadow-md">
              <p className="text-lg italic mb-4">
                "Vacation classes here are not just about academics; they also focus on personal development. It was a
                great way to prepare for the next academic year."
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Student 3"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Adwoa Mensah</p>
                  <p className="text-sm text-muted-foreground">Vacation Class Student</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
