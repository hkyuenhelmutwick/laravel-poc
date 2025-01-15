<template>
    <div class="space-y-4">
        <!-- First Row: Tender Name and Status -->
        <div class="grid grid-cols-3 gap-6">
            <div class="col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Tender Name *
                </label>
                <input 
                    type="text"
                    v-model="modelValue.tenderName"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Status
                </label>
                <input 
                    type="text"
                    v-model="modelValue.status"
                    class="w-full border rounded-md px-3 py-2 bg-gray-50"
                    disabled
                />
            </div>
        </div>

        <!-- Second Row: Created By and Last Updated -->
        <div class="grid grid-cols-4 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Created By
                </label>
                <input 
                    type="text"
                    value="Admin"
                    class="w-full border rounded-md px-3 py-2 bg-gray-50"
                    disabled
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Created At
                </label>
                <input 
                    type="text"
                    value="2025-04-01 09:00"
                    class="w-full border rounded-md px-3 py-2 bg-gray-50"
                    disabled
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Last Updated By
                </label>
                <input 
                    type="text"
                    value="Admin"
                    class="w-full border rounded-md px-3 py-2 bg-gray-50"
                    disabled
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Last Updated At
                </label>
                <input 
                    type="text"
                    value="2025-04-01 09:00"
                    class="w-full border rounded-md px-3 py-2 bg-gray-50"
                    disabled
                />
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
                    v-model="modelValue.closeTenderAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Publish At *
                </label>
                <input 
                    type="datetime-local"
                    v-model="modelValue.publishAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Expire At *
                </label>
                <input 
                    type="datetime-local"
                    v-model="modelValue.expireAt"
                    class="w-full border rounded-md px-3 py-2"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Tender Type
                </label>
                <select 
                    v-model="modelValue.tenderType"
                    class="w-full border rounded-md px-3 py-2"
                >
                    <option value="Request for Proposal">Request for Proposal</option>
                </select>
            </div>
        </div>

        <!-- Fourth Row: Tender Administrator -->
        <TenderAdministrator
            v-model="modelValue.tenderAdmins"
        />
    </div>
</template>

<script>
import TenderAdministrator from './TenderAdministrator.vue'

export default {
    name: 'TenderSetupSection',
    components: {
        TenderAdministrator
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    }
}
</script> 