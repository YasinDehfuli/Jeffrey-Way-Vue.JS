export default {

    template: `
    <form @submit.prevent="add">
    <div class="border border-gray-600 text-black p-1 rounded-sm">
        <input v-model="newAssignment" class="text-black p-2" type="text" placeholder="Add task">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
    </form>
    `,

    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}