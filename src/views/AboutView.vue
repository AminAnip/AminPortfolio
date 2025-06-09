<template>
  <!-- About Me Section -->
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="img/amin.jpg" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; Hi everyone! I am Muhammad Nur Amin Bin Mohamad Anip, a passionate and goal-oriented 
            Computer Science student with a strong enthusiasm for technology and creativity. 
            My journey in the field has equipped me with skills in software development, web design, 
            and graphic design, allowing me to bring innovative ideas to life.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; Currently pursuing my Bachelor's degree at Universiti Teknologi MARA (UITM) Shah Alam, 
            I am eager to explore new opportunities that allow me to grow, innovate, and make a meaningful impact in 
            the world of technology.
          </p>
        </div>

      </section>

    </article>
  </div>

  <!-- Skills Section -->
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>

  <!-- Work Experience Section -->
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <header class="mb-8">
          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
              data-aos-duration="600"></div>
            &nbsp; Work Experience
          </div>
        </header>
        
        <div class="flex flex-col gap-6 md:px-20 fade-zoom-up">
          <div v-for="experience in experiences" :key="experience.id" 
               class="bg-[#1e1e1f] border border-[#383838] rounded-xl text-left text-white p-6 md:p-8 hover:bg-[#282828] transition-all duration-300">
            
            <div class="flex flex-col md:flex-row gap-4 md:gap-6">
              <!-- Company Logo/Image -->
              <div class="flex-shrink-0">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-amber-200 bg-opacity-10 rounded-lg flex items-center justify-center">
                  <img v-if="experience.image" :src="experience.image" :alt="experience.company" 
                       class="w-12 h-12 md:w-16 md:h-16 object-contain rounded">
                  <div v-else class="text-amber-200 font-bold text-lg md:text-xl">
                    {{ experience.company.charAt(0) }}
                  </div>
                </div>
              </div>
              
              <!-- Experience Details -->
              <div class="flex-grow">
                <div class="mb-3">
                  <h3 class="text-lg md:text-xl font-bold text-amber-200 mb-1">{{ experience.position }}</h3>
                  <h4 class="text-md md:text-lg text-white font-semibold">{{ experience.company }}</h4>
                  <div class="flex flex-col md:flex-row md:items-center gap-2 mt-2 text-sm text-slate-400">
                    <div class="flex items-center">
                      <div class="h-[1px] w-4 bg-amber-200 mr-2"></div>
                      {{ experience.duration }}
                    </div>
                    <div class="hidden md:block text-slate-500">•</div>
                    <div>{{ experience.location }}</div>
                  </div>
                </div>
                
                <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  {{ experience.description }}
                </p>
                
                <!-- Skills/Technologies -->
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in experience.skills" :key="skill"
                        class="px-3 py-1 bg-amber-200 bg-opacity-10 text-amber-200 text-xs rounded-full border border-amber-200 border-opacity-30">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      experiences: [
        {
          id: 1,
          company: 'Akademi NLP Malaysia',
          position: 'Intern',
          duration: 'Mac 2023 - Sep 2023',
          location: 'Shah Alam, Selangor, Malaysia',
          description: 'Designed and developed custom WordPress themes and plugins using PHP, HTML, CSS, and JavaScript. Also contributed to the creation of digital content, including videos, graphics, and social media posts, using tools such as Adobe Premiere Pro, CapCut, and Canva. Additionally, assisted in organizing and coordinating company programs, including workshops, product launches, and internal events.',
          image: 'img/nlp.png',
          skills: ['Html', 'CSS', 'JavaScript']
        }
      ],
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Advance'
        },
        {
          id: 5,
          name: 'Python',
          imageUrl: 'img/python_logo.png',
          status: 'Intermediate'
        },
        {
          id: 6,
          name: 'Java',
          imageUrl: 'img/java_logo.png',
          status: 'Advanced'
        },
        {
          id: 7,
          name: 'C++',
          imageUrl: 'img/c++_logo.png',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Beginner'
        },
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
      ]
    };
  },
  methods: {
    // You can add methods here if needed for future functionality
  }
}
</script>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}

@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>
