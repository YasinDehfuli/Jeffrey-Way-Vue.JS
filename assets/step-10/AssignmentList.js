import Assignment from "./Assignment.js";

export default {

    components: {Assignment},

    template: `
    <section class="mt-7" v-show="assignments.length">

    <h1 class="font-bold mb-3">
      {{ title }}
        <span class="text-teal-300">
      ({{ assignments.length }})
        </span>
    </h1>
    
    <div class="flex gap-4">
    <button
    @click="currentTag = tag"
     v-for="tag in tags" 
     class="border rounded px-2 py-px text-xs"
     :class="{ 
     'border-blue-500 text-blue-500': tag === currentTag
      }"
      
      >{{ tag }}
    </button>
    </div>

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
        tags() {
            return ['all',...new Set(this.assignments.map(a => a.tag))];
        }
    }
}