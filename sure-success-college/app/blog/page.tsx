import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Pass NOVDEC in One Sitting",
      date: "July 25, 2024",
      author: "Sure Success College Team",
      description: "Unlock the secrets to acing your NOVDEC exams with our proven study strategies and expert tips.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "how-to-pass-novdec",
    },
    {
      title: "Choosing the Right WASSCE Electives",
      date: "July 20, 2024",
      author: "Academic Advisor",
      description: "Navigate your WASSCE journey by selecting electives that align with your career aspirations.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "choosing-wassce-electives",
    },
    {
      title: "Benefits of Vacation Classes for Academic Growth",
      date: "July 15, 2024",
      author: "Education Expert",
      description:
        "Discover how utilizing your school breaks for vacation classes can boost your academic performance.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "benefits-of-vacation-classes",
    },
    {
      title: "Preparing for International Exams: SAT, IELTS, TOEFL",
      date: "July 10, 2024",
      author: "International Programs Coordinator",
      description: "A comprehensive guide to preparing for and excelling in international standardized tests.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "preparing-for-international-exams",
    },
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Blog & News</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay informed with the latest educational insights, college news, and study tips from Sure Success College.
        </p>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-200">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={post.image || "/placeholder.svg"}
              width={400}
              height={250}
              alt={post.title}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">{post.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                By {post.author} on {post.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-semibold">
                Read More &rarr;
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Example of a single blog post page (simplified) */}
      <section className="mt-12 md:mt-24 animate-fade-in delay-400">
        <h2 className="text-3xl font-bold text-secondary text-center mb-8">Featured Article</h2>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">How to Pass NOVDEC in One Sitting</CardTitle>
            <CardDescription className="text-muted-foreground">
              By Sure Success College Team on July 25, 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="Student studying"
              className="rounded-lg object-cover w-full"
            />
            <p className="text-muted-foreground leading-relaxed">
              Passing the NOVDEC exams can be challenging, but with the right strategies and dedication, you can achieve
              success in your first attempt. At Sure Success College, we believe in empowering our students with the
              best tools and techniques. Here are some key tips:
            </p>
            <h3 className="text-xl font-semibold text-foreground">1. Understand the Syllabus Thoroughly</h3>
            <p className="text-muted-foreground leading-relaxed">
              Before you begin, get a clear understanding of the NOVDEC syllabus for each subject. Identify key topics,
              weightage, and areas that require more attention. This will help you create a focused study plan.
            </p>
            <h3 className="text-xl font-semibold text-foreground">2. Create a Realistic Study Timetable</h3>
            <p className="text-muted-foreground leading-relaxed">
              Consistency is key. Develop a study timetable that allocates sufficient time for each subject, including
              revision and practice sessions. Stick to it as much as possible.
            </p>
            <h3 className="text-xl font-semibold text-foreground">3. Practice Past Questions Religiously</h3>
            <p className="text-muted-foreground leading-relaxed">
              Past questions are your best friends. They give you insight into the exam pattern, common question types,
              and help you manage your time effectively during the actual exam.
            </p>
            <h3 className="text-xl font-semibold text-foreground">4. Seek Clarification and Extra Help</h3>
            <p className="text-muted-foreground leading-relaxed">
              Don&apos;t hesitate to ask questions. Our dedicated teachers at Sure Success College are always ready to
              provide extra support and clarify any doubts you may have. Join our remedial classes for targeted
              assistance.
            </p>
            <h3 className="text-xl font-semibold text-foreground">5. Maintain a Healthy Lifestyle</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ensure you get enough sleep, eat nutritious meals, and take short breaks. A healthy mind and body are
              crucial for effective learning and retaining information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With these tips and the unwavering support from Sure Success College, your success in NOVDEC is not just a
              possibility, but a certainty. Enroll with us today and let us guide you to academic greatness!
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/blog" className="text-secondary hover:underline font-semibold">
              &larr; Back to Blog
            </Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
