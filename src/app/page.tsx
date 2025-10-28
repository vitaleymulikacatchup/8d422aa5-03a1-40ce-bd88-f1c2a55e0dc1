"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, Star, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "services" },
            { name: "Solutions", id: "solutions" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Support", id: "support" }
          ]}
          brandName="HQ Travel"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Global Ground Transportation at Your Fingertips"
          description="Enterprise-grade transportation solutions powered by AI technology. Trusted by leading companies worldwide for reliable, efficient ground transportation services."
          tag="Enterprise Transportation"
          tagIcon={Zap}
          imageSrc="https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium business transportation service"
          imagePosition="right"
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Transportation Solutions"
          description="Choose from our comprehensive fleet of vehicles designed for every business need"
          tag="Our Fleet"
          tagIcon={Car}
          products={[
            {
              id: "sedan",
              brand: "HQ Travel",
              name: "Executive Sedan",
              price: "From $85/hour",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/8425043/pexels-photo-8425043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury executive sedan"
            },
            {
              id: "suv",
              brand: "HQ Travel",
              name: "Premium SUV",
              price: "From $125/hour",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/31959282/pexels-photo-31959282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium SUV for business transport"
            },
            {
              id: "van",
              brand: "HQ Travel",
              name: "Group Van",
              price: "From $175/hour",
              rating: 5,
              reviewCount: "950",
              imageSrc: "https://images.pexels.com/photos/6646951/pexels-photo-6646951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive van for group transportation"
            },
            {
              id: "coach",
              brand: "HQ Travel",
              name: "Corporate Coach",
              price: "From $250/hour",
              rating: 5,
              reviewCount: "642",
              imageSrc: "https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern coach bus for large groups"
            }
          ]}
          buttons={[
            { text: "View All Vehicles", href: "fleet" }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on our transportation services"
          tag="Enterprise Clients"
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={50}
          showCard={true}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from enterprise clients who trust HQ Travel"
          tag="Client Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "VP Operations",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Manager",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Executive Assistant",
              company: "Fortune Dynamics",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Operations Director",
              company: "MetroTech Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5989928/pexels-photo-5989928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our transportation services"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How do I book a ride for my company?",
              content: "You can book through our online platform, mobile app, or by calling our dedicated corporate line. We offer account management for enterprise clients with custom billing and reporting."
            },
            {
              id: "2",
              title: "What areas do you service?",
              content: "We provide ground transportation services in major metropolitan areas across North America and Europe. Contact us to confirm availability in your specific location."
            },
            {
              id: "3",
              title: "Do you offer 24/7 service?",
              content: "Yes, our service operates 24 hours a day, 7 days a week. Our customer support team and drivers are available around the clock for your transportation needs."
            },
            {
              id: "4",
              title: "How does your AI technology work?",
              content: "Our AI system optimizes routing, predicts traffic patterns, and matches the best available vehicles to your needs in real-time, ensuring efficient and reliable service."
            },
            {
              id: "5",
              title: "What safety measures do you have in place?",
              content: "All drivers undergo comprehensive background checks and regular training. Our vehicles are equipped with GPS tracking, and we maintain commercial insurance coverage for all rides."
            }
          ]}
          buttons={[
            { text: "Contact Support", href: "support" }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Get Started?"
          description="Contact our team to discuss your transportation needs and set up your enterprise account"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your transportation needs...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="HQ Travel office reception area"
          mediaPosition="right"
          buttonText="Get Quote"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Corporate Transportation", href: "corporate" },
                { label: "Airport Transfers", href: "airport" },
                { label: "Event Transportation", href: "events" },
                { label: "Executive Services", href: "executive" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "help" },
                { label: "Contact Us", href: "contact" },
                { label: "Safety", href: "safety" },
                { label: "Terms of Service", href: "terms" }
              ]
            }
          ]}
          copyrightText="© 2025 HQ Travel. All rights reserved."
          logoWidth={140}
          logoHeight={45}
        />
      </div>
    </ThemeProvider>
  );
}