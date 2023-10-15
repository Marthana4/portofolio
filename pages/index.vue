<template>
  <div>
    <!-- ======= Header ======= -->
    <Navbar />
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <Introduction />
    <!-- End Hero -->

    <main id="main">

      <!-- ======= About Section ======= -->
      <About/>
      <!-- End About Section -->

      <!-- ======= Facts Section ======= -->
      <Facts/>
      <!-- End Facts Section -->

      <!-- ======= Skills Section ======= -->
      <Skills/>
      <!-- End Skills Section -->

      <!-- ======= Resume Section ======= -->
      <Resume/>
      <!-- End Resume Section -->

      <!-- ======= Portfolio Section ======= -->
      <Portofolio/>
      <!-- End Portfolio Section -->

      <!-- ======= Services Section ======= -->
      <Services/>
      <!-- End Services Section -->

      <!-- ======= Testimonials Section ======= -->
      <Testimonial/>
      <!-- End Testimonials Section -->

      <!-- ======= Contact Section ======= -->
      <Contact/>
      <!-- End Contact Section -->

    </main>=

    <!-- ======= Footer ======= -->
    <Footer/>
    <!-- End Footer -->
    
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Introduction from '~/components/Introduction.vue'
import About from '~/components/About.vue'
import Facts from '~/components/Facts.vue'
import Skills from '~/components/Skills.vue'
import Resume from '~/components/Resume.vue'
import Portofolio from '~/components/Portofolio.vue'
import Services from '~/components/Services.vue'
import Testimonial from '~/components/Testimonial.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Introduction,
    About,
    Facts,
    Skills,
    Resume,
    Portofolio,
    Services,
    Testimonial,
    Contact,
    Footer
  },
}
</script>
