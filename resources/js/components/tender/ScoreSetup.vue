<template>
    <div class="space-y-4">
        <h3 class="text-lg font-medium">Score</h3>
        
        <!-- Score Settings -->
        <div class="flex items-end space-x-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Max Score *
                </label>
                <input 
                    type="number"
                    v-model="maxScore"
                    class="w-24 border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Increment *
                </label>
                <input 
                    type="number"
                    v-model="increment"
                    step="0.1"
                    class="w-24 border rounded-md px-3 py-2"
                />
            </div>
            <button 
                @click="generateScores"
                class="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
                Set Score
            </button>
        </div>

        <!-- Score Table -->
        <div class="border rounded-md overflow-hidden">
            <table class="w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2 text-left w-24">Score</th>
                        <th class="px-4 py-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="score in scores" :key="score.value" 
                        class="border-t">
                        <td class="px-4 py-2">{{ score.value.toFixed(1) }}</td>
                        <td class="px-4 py-2">{{ score.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScoreSetup',
    data() {
        return {
            maxScore: 3,
            increment: 0.5,
            scores: []
        }
    },
    methods: {
        generateScores() {
            const descriptions = {
                0.0: 'Not Fulfilled',
                0.5: 'Poor',
                1.0: 'Failed',
                1.5: 'Passed',
                2.0: 'Fair',
                2.5: 'Good',
                3.0: 'Excellent'
            }

            this.scores = []
            for (let i = 0; i <= this.maxScore; i += this.increment) {
                this.scores.push({
                    value: i,
                    description: descriptions[i] || ''
                })
            }

            this.$emit('update:scores', this.scores)
        }
    },
    mounted() {
        this.generateScores()
    }
}
</script> 