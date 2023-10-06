import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {

    components: {Assignment , AssignmentTags},

    template: `
    <section class="mt-7" v-show="assignments.length">

    <h1 class="font-bold mb-3">
      {{ title }}
        <span class="text-teal-300">
      ({{ assignments.length }})
        </span>
    </h1>
    
    <assignment-tags 
    :initial-Tags="assignments.map(a => a.tag)"
    :current-tag="currentTag"
     @change="currentTag = $event"
     />

    <ul class="border border-gray-600 rounded-sm divide divide-gray-600 mt-4">
      <assignment
      v-for="assignment in filteredAssignments" 
      :key="assignment.id"
      :assignment="assignment"
      ></assignment>
    </ul>

  </section>

    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

    }
}