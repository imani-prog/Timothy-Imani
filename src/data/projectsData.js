import MediLinkImage from '../assets/MediLink.png'
import InspireMeImage from '../assets/InspireMe.png'
import WatulivuImage from '../assets/Watulivu.png'
import ToraImage from '../assets/Tora.png'

export const projects = [
  {
    name: 'MediLink - Healthcare Platform',
    image: MediLinkImage,
    techStack: ['React', 'Vite', 'JavaScript', 'CSS3', 'Responsive Design', 'Healthcare Platform'],
    description:
      'A comprehensive healthcare platform for Africa that connects patients, clinics, and community health workers. Features include patient registration, clinic finder, health worker connectivity, gamified health challenges, and real-time support. Built with modern React architecture and deployed on Vercel for optimal performance.',
    liveUrl: 'https://medilink-public.vercel.app',
    githubUrl: '', // add repo link if public
  },
  {
    name: 'Inspire Me',
    image: InspireMeImage,
    techStack: ['Spring Boot', 'PostgreSQL', 'Docker', 'React', 'AI Integration'],
    description:
      'Daily motivational quotes app for coding inspiration. Integrated with AI to deliver personalized motivation during coding sessions, with a simple and clean interface for staying inspired while debugging.',
    liveUrl: 'https://inspire-me-one.vercel.app/',
    githubUrl: 'https://github.com/imani-prog/InspireMeFrontend.git',
  },
  {
    name: 'Watulivu Barber Shop',
    image: WatulivuImage,
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Responsive Design'],
    description:
      'A modern, fully responsive barber shop website featuring smooth scrolling navigation, service showcase, client testimonials, and contact information. Built with semantic HTML5, custom CSS3 animations, and interactive JavaScript functionality.',
    liveUrl: 'https://imani-prog.github.io/BarberShop/',
    githubUrl: 'https://github.com/imani-prog/BarberShop.git',
  },
  {
    name: 'Tora Dental Clinic',
    image: ToraImage,
    techStack: ['HTML5', 'CSS3', 'Bootstrap 5', 'Animate.css', 'Google Fonts'],
    description:
      'A professional dental clinic website with dynamic carousel, appointment booking system, responsive navigation, team profiles, and comprehensive service listings. Features Bootstrap 5 framework with custom animations and Google Fonts integration.',
    liveUrl: 'https://imani-prog.github.io/ToraDentalClinic/',
    githubUrl: 'https://github.com/imani-prog/ToraDentalClinic.git',
  },
]