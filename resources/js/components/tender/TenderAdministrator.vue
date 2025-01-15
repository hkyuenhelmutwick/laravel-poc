<template>
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
            Tender Administrator *
        </label>
        <div class="flex items-center gap-2">
            <div class="relative flex-1">
                <select 
                    v-model="selectedAdmin"
                    class="w-full appearance-none border rounded-md px-3 py-2 pr-8 bg-white"
                >
                    <option value="">Select Administrator</option>
                    <option 
                        v-for="admin in availableAdmins" 
                        :key="admin" 
                        :value="admin"
                    >
                        {{ admin }}
                    </option>
                </select>
                <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <button 
                @click="addAdmin"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Add
            </button>
        </div>

        <!-- Selected Administrators -->
        <div class="flex flex-wrap gap-2 mt-2">
            <div 
                v-for="admin in modelValue" 
                :key="admin"
                class="inline-flex items-center bg-blue-50 px-3 py-1 rounded"
            >
                <span class="text-blue-700">{{ admin }}</span>
                <button 
                    @click="removeAdmin(admin)"
                    class="ml-2 text-blue-400 hover:text-blue-600"
                >
                    ×
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TenderAdministrator',
    props: {
        modelValue: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedAdmin: '',
            availableAdmins: ['Raymond', 'Vincent', 'Admin']
        }
    },
    methods: {
        addAdmin() {
            if (this.selectedAdmin && !this.modelValue.includes(this.selectedAdmin)) {
                this.$emit('update:modelValue', [...this.modelValue, this.selectedAdmin])
                this.selectedAdmin = ''
            }
        },
        removeAdmin(admin) {
            this.$emit('update:modelValue', this.modelValue.filter(a => a !== admin))
        }
    }
}
</script> 