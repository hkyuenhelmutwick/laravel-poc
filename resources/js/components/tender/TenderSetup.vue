<template>
    <div class="space-y-6">
        <!-- First Row: Tender Name and Status -->
        <div class="grid grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Tender Name *
                </label>
                <input 
                    type="text"
                    v-model="formData.tenderName"
                    class="w-full border rounded-md px-3 py-2"
                    placeholder="Enter tender name"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Status
                </label>
                <input 
                    type="text"
                    v-model="formData.status"
                    class="w-full border rounded-md px-3 py-2 bg-gray-100"
                    disabled
                />
            </div>
        </div>

        <!-- Second Row: Created By and Last Updated -->
        <div class="grid grid-cols-2 gap-6">
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Created By
                    </label>
                    <input 
                        type="text"
                        v-model="formData.createdBy"
                        class="w-full border rounded-md px-3 py-2 bg-gray-100"
                        disabled
                    />
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Created At
                    </label>
                    <input 
                        type="text"
                        v-model="formData.createdAt"
                        class="w-full border rounded-md px-3 py-2 bg-gray-100"
                        disabled
                    />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Last Updated By
                    </label>
                    <input 
                        type="text"
                        v-model="formData.lastUpdatedBy"
                        class="w-full border rounded-md px-3 py-2 bg-gray-100"
                        disabled
                    />
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Last Updated At
                    </label>
                    <input 
                        type="text"
                        v-model="formData.lastUpdatedAt"
                        class="w-full border rounded-md px-3 py-2 bg-gray-100"
                        disabled
                    />
                </div>
            </div>
        </div>

        <!-- Third Row: Dates and Tender Type -->
        <div class="grid grid-cols-4 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Close Tender At *
                </label>
                <input 
                    type="datetime-local"
                    v-model="formData.closeTenderAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Publish At *
                </label>
                <input 
                    type="datetime-local"
                    v-model="formData.publishAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Expire At *
                </label>
                <input 
                    type="datetime-local"
                    v-model="formData.expireAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Tender Type
                </label>
                <select 
                    v-model="formData.tenderType"
                    class="w-full border rounded-md px-3 py-2"
                >
                    <option value="Request for Proposal">Request for Proposal</option>
                    <!-- Add other tender types as needed -->
                </select>
            </div>
        </div>

        <!-- Fourth Row: Tender Administrator -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
                Tender Administrator *
            </label>
            <div class="flex items-center space-x-2">
                <input 
                    type="text"
                    v-model="selectedAdmin"
                    class="flex-1 border rounded-md px-3 py-2"
                    placeholder="Select administrator"
                />
                <button 
                    @click="addAdmin"
                    class="p-2 border rounded-md"
                >
                    <span class="sr-only">Add Administrator</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <!-- Admin Tags -->
            <div class="flex flex-wrap gap-2 mt-2">
                <div 
                    v-for="admin in formData.tenderAdmins" 
                    :key="admin"
                    class="flex items-center bg-gray-100 rounded-md px-3 py-1"
                >
                    <span>{{ admin }}</span>
                    <button 
                        @click="removeAdmin(admin)"
                        class="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TenderSetup',
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selectedAdmin: ''
        }
    },
    methods: {
        addAdmin() {
            if (this.selectedAdmin && !this.formData.tenderAdmins.includes(this.selectedAdmin)) {
                this.$emit('update:formData', {
                    ...this.formData,
                    tenderAdmins: [...this.formData.tenderAdmins, this.selectedAdmin]
                })
                this.selectedAdmin = ''
            }
        },
        removeAdmin(admin) {
            this.$emit('update:formData', {
                ...this.formData,
                tenderAdmins: this.formData.tenderAdmins.filter(a => a !== admin)
            })
        }
    }
}
</script> 