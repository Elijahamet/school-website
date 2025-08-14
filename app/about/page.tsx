import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Sure Success College</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          “Your Success, Our Priority.” Discover our journey, values, and commitment to academic excellence.
        </p>
      </section>

      {/* History Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-24 animate-fade-in delay-200">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-secondary">Our History</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sure Success College was founded in [Year] with a vision to provide quality education and empower students
            to achieve their full academic potential. Starting as a small remedial center, we have grown into a
            reputable institution known for our dedicated faculty, rigorous curriculum, and student-centered approach.
            Over the years, we have helped thousands of students pass their WASSCE and NOVDEC exams with flying colors,
            opening doors to higher education and successful careers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to excellence and continuous improvement has made us a preferred choice for students seeking
            a supportive and effective learning environment. We pride ourselves on our proven track record of success
            and the positive impact we have on the lives of our students.
          </p>
        </div>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Sure Success College History"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mb-12 md:mb-24 animate-fade-in delay-400">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Mission, Vision & Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <Target className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Mission</h3>
            <p className="text-muted-foreground">
              To provide high-quality, accessible, and results-oriented education that equips students with the
              knowledge, skills, and confidence to excel in their examinations and future endeavors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <Lightbulb className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Vision</h3>
            <p className="text-muted-foreground">
              To be the leading academic institution in Ghana, recognized for our innovative teaching methods,
              exceptional student success rates, and commitment to holistic development.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <CheckCircle className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Core Values</h3>
            <ul className="text-muted-foreground list-disc list-inside text-left">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Dedication</li>
              <li>Innovation</li>
              <li>Student-Centeredness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories / Awards */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-24 animate-fade-in delay-600">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg order-last md:order-first">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Success Stories"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-secondary">Success Stories & Highlights</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our greatest pride lies in the achievements of our students. Year after year, Sure Success College boasts
            impressive pass rates in WASSCE and NOVDEC, with many of our alumni gaining admission to top universities
            both in Ghana and abroad. We celebrate numerous distinctions and awards earned by our students in various
            academic competitions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From overcoming academic challenges to achieving their dream scores, our students' journeys are a testament
            to our effective teaching methodologies and supportive environment. We are committed to nurturing every
            student's potential and guiding them towards their personal and academic goals.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-primary text-primary-foreground rounded-lg shadow-xl animate-fade-in delay-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Success Journey!</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Ready to achieve your academic goals? Enroll with Sure Success College today and become part of our legacy of
          excellence.
        </p>
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <Link href="/admissions">Register Now</Link>
        </Button>
      </section>
    </div>
  )
}
