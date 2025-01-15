<template>
    <div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Vendor</label>
            <div class="mt-1 flex flex-col gap-2">
                <div class="flex">
                    <input 
                        type="text" 
                        v-model="newVendorName"
                        class="form-input rounded-md border-gray-300 flex-grow" 
                        placeholder="Enter vendor name"
                    />
                    <button 
                        class="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        @click="addVendor"
                    >
                        Add Vendor
                    </button>
                </div>
                <!-- Alert Message -->
                <div 
                    v-if="showAlert" 
                    class="bg-red-50 border-l-4 border-red-400 p-4"
                >
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">
                                Please enter a vendor name
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">Vendor Name</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">Document</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">Qualified</th>
                        <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr v-for="vendor in vendors" :key="vendor.id" class="border-b">
                        <td class="px-6 py-4">{{ vendor.name }}</td>
                        <td class="px-6 py-4">
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center">
                                    <select class="form-select rounded-md border-gray-300">
                                        <option value="">Select Document Type</option>
                                        <option value="technical">Technical Proposal</option>
                                    </select>
                                    <button class="ml-2 px-3 py-1 bg-gray-600 text-white rounded-md">Upload</button>
                                </div>
                                <div v-for="doc in vendor.documents" :key="doc.id" class="flex items-center">
                                    <span>{{ doc.name }}</span>
                                    <button class="ml-2 text-red-600">&times;</button>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-4">
                                    <label class="inline-flex items-center">
                                        <input 
                                            type="radio" 
                                            :name="'qualified-' + vendor.id" 
                                            value="yes" 
                                            v-model="vendor.qualified" 
                                            class="form-radio"
                                        >
                                        <span class="ml-2">Yes</span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input 
                                            type="radio" 
                                            :name="'qualified-' + vendor.id" 
                                            value="no" 
                                            v-model="vendor.qualified" 
                                            class="form-radio"
                                        >
                                        <span class="ml-2">No</span>
                                    </label>
                                </div>
                                <textarea
                                    v-if="vendor.qualified === 'no'"
                                    v-model="vendor.disqualificationReason"
                                    class="form-textarea mt-1 block w-full rounded-md border-gray-300"
                                    placeholder="Missing documents"
                                    rows="2"
                                ></textarea>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <button class="text-red-600" @click="deleteVendor(vendor.id)">
                                <span class="sr-only">Delete</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newVendorName: '',
            nextId: 3,
            showAlert: false,
            vendors: [
                {
                    id: 1,
                    name: 'Vendor A',
                    qualified: 'no',
                    disqualificationReason: '',
                    documents: [
                        { id: 1, name: 'technical_proposal1.pdf' },
                        { id: 2, name: 'technical_proposal2.pdf' }
                    ]
                },
                {
                    id: 2,
                    name: 'Vendor B',
                    qualified: 'no',
                    disqualificationReason: '',
                    documents: [
                        { id: 3, name: 'technical_proposal1.pdf' }
                    ]
                }
            ]
        }
    },
    methods: {
        addVendor() {
            if (!this.newVendorName.trim()) {
                this.showAlert = true;
                // Hide alert after 3 seconds
                setTimeout(() => {
                    this.showAlert = false;
                }, 3000);
                return;
            }

            const newVendor = {
                id: this.nextId++,
                name: this.newVendorName,
                qualified: 'no',
                disqualificationReason: '',
                documents: []
            };

            this.vendors.push(newVendor);
            this.newVendorName = '';
            this.showAlert = false; // Hide alert if it was showing
        },
        deleteVendor(vendorId) {
            this.vendors = this.vendors.filter(vendor => vendor.id !== vendorId)
        }
    }
}
</script> 