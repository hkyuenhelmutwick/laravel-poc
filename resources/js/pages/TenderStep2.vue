<template>
    <div>
        <!-- Page Title -->
        <div class="mb-6">
            <h1 class="text-2xl font-semibold text-gray-800">Define Tender Evaluation</h1>
        </div>

        <!-- Steps Component -->
        <TenderSteps 
            :current-step="2"
            @update:step="updateStep"
        />

        <!-- Form Content -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
            <!-- Template Selection -->
            <div class="mb-6">
                <button class="px-4 py-2 border rounded-md text-sm">
                    Select Form Template
                </button>
            </div>

            <!-- Evaluation Form -->
            <div class="space-y-6">
                <!-- Part I - Technical Evaluation -->
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-medium">Part I - Technical Evaluation</h3>
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center">
                                <span class="text-sm mr-2">Weight % *</span>
                                <input type="number" value="70" class="w-16 border rounded-md px-2 py-1" />
                            </div>
                            <div class="flex items-center">
                                <span class="text-sm mr-2">Pass % *</span>
                                <input type="number" value="50" class="w-16 border rounded-md px-2 py-1" />
                            </div>
                        </div>
                    </div>

                    <!-- Sections -->
                    <div class="space-y-4">
                        <!-- Section A -->
                        <div class="border rounded-md p-4">
                            <div class="flex items-center space-x-4 mb-4">
                                <span class="font-medium">A</span>
                                <input 
                                    type="text" 
                                    value="Service Team" 
                                    class="border rounded-md px-3 py-1"
                                />
                                <input 
                                    type="number" 
                                    value="15" 
                                    class="w-20 border rounded-md px-2 py-1"
                                    placeholder="Weight %"
                                />
                                <input 
                                    type="text" 
                                    value="The strength and competence of the service team and their understanding to the business, system and service requirements"
                                    class="flex-1 border rounded-md px-3 py-1"
                                    placeholder="Remarks"
                                />
                            </div>

                            <!-- Assessment Items -->
                            <div class="space-y-2 pl-8">
                                <!-- Item rows -->
                            </div>
                        </div>

                        <!-- Add Section Button -->
                        <div class="flex justify-end space-x-2">
                            <button class="p-1 border rounded-md">
                                <span class="sr-only">Add Header</span>
                                <svg><!-- Header icon --></svg>
                            </button>
                            <button class="p-1 border rounded-md">
                                <span class="sr-only">Add Paragraph</span>
                                <svg><!-- Paragraph icon --></svg>
                            </button>
                            <button class="p-1 border rounded-md">
                                <span class="sr-only">Add Section</span>
                                <svg><!-- Section icon --></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Part II - Fee Evaluation -->
                <div>
                    <!-- Similar structure to Part I -->
                </div>
            </div>

            <!-- Action Buttons -->
            <ActionButtons
                @back="handleBack"
                @save-draft="saveDraft"
                @next="handleNext"
            />
        </div>
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import ActionButtons from '../components/ui/ActionButtons.vue'

export default {
    name: 'TenderStep2',
    components: {
        TenderSteps,
        ActionButtons
    },
    methods: {
        updateStep(step) {
            // Handle step navigation
        },
        handleBack() {
            // Navigate back to Tender page
            this.$router.push('/tender')
        },
        saveDraft() {
            // Handle save draft
            console.log('Saving evaluation draft')
        },
        handleNext() {
            // Navigate to next step (vendor)
            this.$router.push('/tender/vendor')
        }
    }
}
</script> 