import Vue from 'vue';

const skill = {
  template: '#skill',
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs['color-circle']
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
      )
      const percents = (dashOffset / 100) * (100 - this.skillPercents)

      circle.style.strokeDashoffset = percents
    }
  },
  mounted() {
    this.drawCircle()
  }
}

const skillsRow = {
  template: '#skills-row',
  components: {
    skill
  },
  props: {
    skill: Object
  }
}

new Vue({
  el: '#skills-container',
  components: {
    skillsRow
  },
  
  data: {
    skills: require('../../../data/skills.json')
  },
  created() {
  },
  template: '#skills-list'
})

