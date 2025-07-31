document.addEventListener("DOMContentLoaded", () => {
  // --- Configuration ---
  const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER_HERE" // Replace with your WhatsApp number (e.g., 233241234567, no + or 00)

  // --- Mobile Menu Toggle ---
  const menuButton = document.getElementById("menu-button")
  const closeMenuButton = document.getElementById("close-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileNavLinks = document.querySelectorAll("#mobile-menu .nav-links-mobile a")

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.add("open")
      document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
    })
  }

  if (closeMenuButton && mobileMenu) {
    closeMenuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("open")
      document.body.style.overflow = "" // Restore scrolling
    })
  }

  // Close mobile menu when a link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open")
      document.body.style.overflow = ""
    })
  })

  // --- Dark Mode Toggle ---
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
      // Save preference to localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
      updateDarkModeIcon()
    })

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode")
    }
    updateDarkModeIcon() // Set initial icon
  }

  function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector("svg")
    if (document.body.classList.contains("dark-mode")) {
      icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>' // Moon icon
    } else {
      icon.innerHTML =
        '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M17.66 6.34l1.41-1.41"/>' // Sun icon
    }
  }

  // --- Gallery Lightbox ---
  const galleryImages = document.querySelectorAll(".gallery-grid img")
  const lightboxOverlay = document.getElementById("lightbox-overlay")
  const lightboxImage = document.getElementById("lightbox-image")
  const lightboxClose = document.getElementById("lightbox-close")

  if (galleryImages.length > 0 && lightboxOverlay && lightboxImage && lightboxClose) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src
        lightboxImage.alt = img.alt
        lightboxOverlay.style.display = "flex"
        document.body.style.overflow = "hidden" // Prevent scrolling
      })
    })

    lightboxClose.addEventListener("click", () => {
      lightboxOverlay.style.display = "none"
      document.body.style.overflow = "" // Restore scrolling
    })

    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) {
        lightboxOverlay.style.display = "none"
        document.body.style.overflow = ""
      }
    })
  }

  // --- Form Submission (Admissions & Contact) ---
  const admissionsForm = document.getElementById("admissions-form")
  const contactForm = document.getElementById("contact-form")

  if (admissionsForm) {
    admissionsForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const fullName = admissionsForm.querySelector("#fullName").value
      const phoneNumber = admissionsForm.querySelector("#phoneNumber").value
      const program = admissionsForm.querySelector("#program").value
      const message = admissionsForm.querySelector("#message").value
      const resultSlipInput = admissionsForm.querySelector("#resultSlip")
      const resultSlipFileName = resultSlipInput.files.length > 0 ? resultSlipInput.files[0].name : "N/A"

      let whatsappMessage = `*New Admission Inquiry from Sure Success College Website*\n\n`
      whatsappMessage += `*Full Name:* ${fullName}\n`
      whatsappMessage += `*Phone Number:* ${phoneNumber}\n`
      whatsappMessage += `*Desired Program:* ${program || "Not selected"}\n`
      whatsappMessage += `*Result Slip Uploaded:* ${resultSlipFileName}\n`
      if (message) {
        whatsappMessage += `*Additional Message:*\n${message}\n`
      }
      whatsappMessage += `\n_Please follow up with this prospective student._`

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

      window.open(whatsappUrl, "_blank")

      alert("Application details prepared for WhatsApp! Please send the message to complete.")
      admissionsForm.reset() // Clear the form
    })
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Your message has been sent! We will get back to you soon.")
      contactForm.reset() // Clear the form
    })
  }

  // --- Fade-in Animations using Intersection Observer ---
  const animateElements = document.querySelectorAll(".animate-fade-in, .animate-fade-in-up")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target) // Stop observing once visible
      }
    })
  }, observerOptions)

  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // --- Gallery Category Filter ---
  const filterButtons = document.querySelectorAll(".gallery-filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-grid .gallery-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("underline"))
      // Add active class to clicked button
      button.classList.add("underline")

      const category = button.dataset.category

      galleryItems.forEach((item) => {
        if (category === "All" || item.dataset.category === category) {
          item.style.display = "block" // Show item
        } else {
          item.style.display = "none" // Hide item
        }
      })
    })
  })

  // --- FAQ Accordion ---
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling
      const isActive = question.classList.contains("active")

      // Close all other open answers
      faqQuestions.forEach((q) => {
        if (q !== question && q.classList.contains("active")) {
          q.classList.remove("active")
          q.nextElementSibling.classList.remove("open")
        }
      })

      // Toggle current answer
      if (isActive) {
        question.classList.remove("active")
        answer.classList.remove("open")
      } else {
        question.classList.add("active")
        answer.classList.add("open")
      }
    })
  })

  // --- Scroll-to-Top Button ---
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      scrollToTopBtn.style.display = "block"
    } else {
      scrollToTopBtn.style.display = "none"
    }
  })

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
})
