import Assignment from "./Assignment.js";

export default {

    components: { Assignment },

    template:`
    <section class="mt-7" v-show="assignments.length">

    <h1 class="font-bold mb-3">
      {{ title }}
    </h1>

    <ul class="border border-gray-600 rounded-sm divide divide-gray-600">
      <assignment
      v-for="assignment in assignments" 
      :key="assignment.id"
      :assignment="assignment"
      ></assignment>
    </ul>

  </section>

    `,

    props:{
        assignments:Array,
        title:String
    }
}