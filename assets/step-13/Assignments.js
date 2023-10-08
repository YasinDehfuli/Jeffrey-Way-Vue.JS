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
            assignments: []
        }
    },

    created(){
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                // Handle the successful response here
                this.assignments = assignments;
            })
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