"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [filterCategory, setFilterCategory] = useState("All")

  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Students in Classroom", category: "Classrooms" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Graduation Ceremony", category: "Graduation" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Science Lab Experiment", category: "Labs" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Campus Exterior", category: "Campus" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Students Collaborating", category: "Events" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Library Interior", category: "Campus" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Sports Day Event", category: "Events" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Computer Lab", category: "Labs" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Student Presentation", category: "Classrooms" },
  ]

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedImage(null)
  }

  const handleCategoryClick = (category: string) => {
    setFilterCategory(category)
  }

  const filteredImages = images.filter((img) => filterCategory === "All" || img.category === filterCategory)

  return (
    <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <section className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A visual journey through the vibrant life at Sure Success College.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8 animate-fade-in delay-100">
        <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "All" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "Events" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("Events")}
        >
          Events
        </span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "Classrooms" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("Classrooms")}
        >
          Classrooms
        </span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "Graduation" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("Graduation")}
        >
          Graduation
        </span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "Labs" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("Labs")}
        >
          Labs
        </span>
        <span
          className={`text-sm font-medium text-primary cursor-pointer hover:underline ${filterCategory === "Campus" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("Campus")}
        >
          Campus
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in delay-200">
        {filteredImages.map((img, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleImageClick(img.src)}
          >
            <CardContent className="p-0">
              <Image
                src={img.src || "/placeholder.svg"}
                width={600}
                height={400}
                alt={img.alt}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">{img.alt}</p>
                <p className="text-xs text-muted-foreground mt-1">Category: {img.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <Image
              src={selectedImage || "/placeholder.svg"}
              width={1200}
              height={800}
              alt="Enlarged image"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
