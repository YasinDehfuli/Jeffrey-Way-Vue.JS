import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components:{ AssignmentList, AssignmentCreate },
    template: `

<section class="space-y-5">

<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

<assignment-list :assignments="filters.completed" title="Complete"></assignment-list>

<assignment-create @add="add"></assignment-create>


</section>

    `,
    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: 'false', id: 1 },
                { name: 'Read Chapter 4', complete: 'false', id: 2 },
                { name: 'Work Chapter', complete: 'false', id: 3 },
            ]
        }
    },


    computed: {

        filters() {
            return{
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    methods: {
        add (name) {
            this.assignments.push({
                name: name,
                complete:false,
                id: this.assignments.length + 1
            });
        }
    }

}