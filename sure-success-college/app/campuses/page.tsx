import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function CampusesPage() {
  const campuses = [
    {
      name: "Legon Campus",
      address: "Behind Legon Botanical Gardens, Accra",
      phone: "+233 244 123 456",
      email: "legon@suresuccesscollege.edu.gh",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      name: "Kasoa Campus",
      address: "Near Kasoa Interchange, Central Region",
      phone: "+233 208 765 432",
      email: "kasoa@suresuccesscollege.edu.gh",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      name: "Kumasi Campus",
      address: "Adum, Opposite Kumasi City Mall, Ashanti Region",
      phone: "+233 555 987 654",
      email: "kumasi@suresuccesscollege.edu.gh",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      name: "Tamale Campus",
      address: "Dungu, Near Tamale Technical University, Northern Region",
      phone: "+233 267 112 233",
      email: "tamale@suresuccesscollege.edu.gh",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Campuses</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Sure Success College has multiple branches across Ghana, bringing quality education closer to you.
        </p>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 animate-fade-in delay-200">
        {campuses.map((campus, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={campus.image || "/placeholder.svg"}
              width={600}
              height={350}
              alt={`${campus.name} building`}
              className="rounded-t-lg object-cover w-full h-64"
            />
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">{campus.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" /> {campus.address}
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" /> {campus.phone}
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" /> {campus.email}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12 md:mt-24 text-center animate-fade-in delay-400">
        <h2 className="text-3xl font-bold text-primary mb-6">Find Us on the Map</h2>
        <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          {/* Placeholder for Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6000000000004!2d-0.19800000000000003!3d5.6000000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQwJzQ4LjAiTiAwwrAxMSc0OC4wIlc!5e0!3m2!1sen!2sgh!4v1678901234567!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Placeholder for Sure Success College"
          ></iframe>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          *Map shows a general placeholder location. Please contact individual campuses for precise directions.
        </p>
      </section>
    </div>
  )
}
