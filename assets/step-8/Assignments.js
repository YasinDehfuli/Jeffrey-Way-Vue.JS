import AssignmentList from "./AssignmentList.js";

export default {
    components:{ AssignmentList },
    template: `

<section class="space-y-5">

<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

<assignment-list :assignments="filters.completed" title="Complete"></assignment-list>

<form @submit.prevent="add">
    <div class="border border-gray-600 text-black p-1 rounded-sm">
        <input v-model="newAssignment" class="text-black p-2" type="text" placeholder="Add task">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
</form>

</section>

    `,
    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: 'false', id: 1 },
                { name: 'Read Chapter 4', complete: 'false', id: 2 },
                { name: 'Work Chapter', complete: 'false', id: 3 },
            ],
            newAssignment : ''
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
        add () {
            this.assignments.push({
                name: this.newAssignment,
                complete:false,
                id: this.assignments.length + 1
            });
            this.newAssignment = '';
        }
    }

}