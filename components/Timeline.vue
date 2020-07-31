<template>
  <section class="timeline-wrapper">
    <div class="timeline">
      <div
        v-for="(entry, idx) in timelineItems"
        :key="entry.title"
        :class="{
          'entry-container': true,
          left: idx % 2 == 0,
          right: idx % 2 != 0,
        }"
      >
        <div class="content">
          <StageCard :background="entry.background" :color="entry.color">
            <template #subtitle>{{ entry.title }}</template>
            <template #heading>{{ entry.description }}</template>
          </StageCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StageCard from '~/components/StageCard.vue'

export default {
  components: {
    StageCard,
  },
  mounted() {
    /* eslint-disable */
    function debounce(func, wait = 15, immediate = true) {
      var timeout
      return function () {
        var context = this,
          args = arguments
        var later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
    // setup timeline item scroll listeners
    const cards = document.querySelectorAll('.content')
    const checkSlide = () => {
      const buffer = 50
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect()
        const slideInAt =
          window.scrollY + window.innerHeight - cardRect.height / 2
        const isHalfShown = slideInAt - buffer > cardRect.bottom
        if (isHalfShown) {
          card.classList.add('active')
        }
      })
    }
    document.addEventListener('scroll', debounce(checkSlide))
  },
  data() {
    return {
      timelineItems: [
        {
          title: 'Stage 1',
          description: 'Laying the Groundwork',
          color: 'white',
          background: 'linear-gradient(126.53deg, #844eff 0.04%, #88f8ff 100%)',
        },
        {
          title: 'Stage 2',
          description: 'Building Comprehension',
          color: 'white',
          background: '#02457A',
        },
        {
          title: 'Stage 3',
          description: 'Basic Fluency',
          color: 'black',
          background: 'rgba(255, 255, 255, 0.6)',
        },
        {
          title: 'Stage  4',
          description: 'Comprehensive Fluency and Beyond',
          color: 'white',
          background: 'linear-gradient(239.91deg, #00C19C 0%, #6A00C1 100%)',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

/* Set a background color */
.timeline-wrapper {
  // background-color: #f2f6ff;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  border-radius: 10px;
  background-color: #2da1e7;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.entry-container {
  padding: 10px 50px;
  margin-bottom: 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.entry-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #61d4e8;
  border: 4px solid #2da1e7;
  // top: 15px;
  top: 50%;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  min-width: 300px;
  min-height: 260px;
  position: relative;
  border-radius: 6px;
  top: 20px;
}

.left .content {
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(-30%) scale(0.95);
}

.right .content {
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(30%) scale(0.95);
}

.content.active {
  opacity: 1;
  transform: translateX(0%) scale(1);
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .entry-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .entry-container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
