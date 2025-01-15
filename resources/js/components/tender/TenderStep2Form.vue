<template>
    <div>
        <!-- Template Selection -->
        <div class="mb-6">
            <button class="px-4 py-2 border rounded-md text-sm">
                Select Form Template
            </button>
        </div>

        <!-- Technical Evaluation -->
        <div class="space-y-6">
            <div>
                <!-- Header -->
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-blue-600 font-medium">Part I - Technical Evaluation</h3>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center">
                            <span class="text-sm mr-2">Weight % *</span>
                            <input 
                                type="number"
                                v-model="form.technicalEvaluation.weight"
                                class="w-16 border rounded-md px-2 py-1"
                            />
                        </div>
                        <div class="flex items-center">
                            <span class="text-sm mr-2">Pass % *</span>
                            <input 
                                type="number"
                                v-model="form.technicalEvaluation.passPercentage"
                                class="w-16 border rounded-md px-2 py-1"
                            />
                        </div>
                    </div>
                </div>

                <!-- Section Headers -->
                <div class="grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 text-sm font-medium">
                    <div class="col-span-4">Section</div>
                    <div class="col-span-2">Weight %</div>
                    <div class="col-span-6">Remarks</div>
                </div>

                <!-- Sections -->
                <div class="space-y-4">
                    <div v-for="(section, index) in form.technicalEvaluation.sections" 
                         :key="index"
                         class="border rounded-md"
                    >
                        <!-- Section Header -->
                        <div class="grid grid-cols-12 gap-4 p-4">
                            <div class="col-span-4 flex items-center space-x-2">
                                <span class="text-blue-600">{{ section.letter }}</span>
                                <input 
                                    type="text"
                                    v-model="section.name"
                                    class="flex-1 border rounded-md px-3 py-1"
                                />
                            </div>
                            <div class="col-span-2">
                                <input 
                                    type="number"
                                    v-model="section.weight"
                                    class="w-full border rounded-md px-2 py-1"
                                />
                            </div>
                            <div class="col-span-6">
                                <input 
                                    type="text"
                                    v-model="section.remarks"
                                    class="w-full border rounded-md px-3 py-1"
                                />
                            </div>
                        </div>

                        <!-- Assessment Items -->
                        <div class="border-t px-4 py-2">
                            <div class="grid grid-cols-12 gap-4 text-sm font-medium mb-2">
                                <div class="col-span-4">Assessment Item</div>
                                <div class="col-span-7">Remarks</div>
                                <div class="col-span-1">Action</div>
                            </div>
                            <div class="space-y-2">
                                <div v-for="(item, itemIndex) in section.items" 
                                     :key="itemIndex"
                                     class="grid grid-cols-12 gap-4 items-center"
                                >
                                    <div class="col-span-4 flex items-center space-x-2">
                                        <span class="text-gray-500">{{ itemIndex + 1 }}</span>
                                        <input 
                                            type="text"
                                            v-model="item.name"
                                            class="flex-1 border rounded-md px-3 py-1"
                                        />
                                    </div>
                                    <div class="col-span-7">
                                        <input 
                                            type="text"
                                            v-model="item.remarks"
                                            class="w-full border rounded-md px-3 py-1"
                                        />
                                    </div>
                                    <div class="col-span-1 flex justify-end space-x-1">
                                        <button 
                                            v-if="itemIndex === section.items.length - 1"
                                            @click="addItem(section)"
                                            class="text-gray-500 hover:text-gray-700"
                                        >
                                            +
                                        </button>
                                        <button 
                                            v-else
                                            @click="removeItem(section, itemIndex)"
                                            class="text-gray-500 hover:text-gray-700"
                                        >
                                            −
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add Section Buttons -->
                <div class="flex justify-end space-x-2 mt-4">
                    <button class="p-1 border rounded-md hover:bg-gray-50" title="Add Header">
                        <span class="sr-only">Add Header</span>
                        A
                    </button>
                    <button class="p-1 border rounded-md hover:bg-gray-50" title="Add Paragraph">
                        <span class="sr-only">Add Paragraph</span>
                        ¶
                    </button>
                    <button class="p-1 border rounded-md hover:bg-gray-50" title="Add Section">
                        <span class="sr-only">Add Section</span>
                        ≡
                    </button>
                </div>
            </div>
        </div><br/>

        <!-- Fee Evaluation -->
        <div class="space-y-6">
            <!-- Fee Evaluation Header -->
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-blue-600 font-medium">Part II - Fee Evaluation</h3>
                <div class="flex items-center">
                    <span class="text-sm mr-2">Weight % *</span>
                    <input 
                        type="number"
                        v-model="form.feeEvaluation.weight"
                        class="w-16 border rounded-md px-2 py-1"
                    />
                </div>
            </div>

            <!-- Fee Items -->
            <div class="border rounded-md">
                <!-- Headers -->
                <div class="grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 text-sm font-medium">
                    <div class="col-span-6">Assessment Item</div>
                    <div class="col-span-5">
                        <div class="flex space-x-8">
                            <span>Mandatory</span>
                            <span>Optional</span>
                        </div>
                    </div>
                    <div class="col-span-1">Action</div>
                </div>

                <!-- Items -->
                <div class="space-y-2 p-4">
                    <div v-for="(item, index) in form.feeEvaluation.items" 
                         :key="index"
                         class="grid grid-cols-12 gap-4 items-center"
                    >
                        <div class="col-span-6 flex items-center space-x-2">
                            <span class="text-green-600">{{ item.letter }}</span>
                            <input 
                                type="text"
                                v-model="item.name"
                                class="flex-1 border rounded-md px-3 py-1"
                            />
                        </div>
                        <div class="col-span-5">
                            <div class="flex space-x-8">
                                <label class="flex items-center">
                                    <input 
                                        type="radio"
                                        v-model="item.type"
                                        value="mandatory"
                                        class="mr-2"
                                    />
                                </label>
                                <label class="flex items-center">
                                    <input 
                                        type="radio"
                                        v-model="item.type"
                                        value="optional"
                                        class="mr-2"
                                    />
                                </label>
                            </div>
                        </div>
                        <div class="col-span-1 flex justify-end">
                            <button 
                                v-if="index === form.feeEvaluation.items.length - 1"
                                @click="addFeeItem"
                                class="text-gray-500 hover:text-gray-700"
                            >
                                +
                            </button>
                            <button 
                                v-else
                                @click="removeFeeItem(index)"
                                class="text-gray-500 hover:text-gray-700"
                            >
                                −
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TenderStep2Form',
    data() {
        return {
            form: {
                technicalEvaluation: {
                    weight: 70,
                    passPercentage: 50,
                    sections: [
                        {
                            letter: 'A',
                            name: 'Service Team',
                            weight: 15,
                            remarks: 'The strength and competence of the service team and their understanding to the business, system and service requirements',
                            items: [
                                {
                                    name: 'Company Strength',
                                    remarks: 'Company strength in terms of company size, industry presence, awards, service portfolio, etc.'
                                },
                                {
                                    name: 'Qualification and Experience',
                                    remarks: 'Project team members possess relevant skills and working experience to fulfill project role duties satisfactorily.'
                                },
                                {
                                    name: '',
                                    remarks: ''
                                }
                            ]
                        },
                        {
                            letter: 'B',
                            name: 'Proposed Solution',
                            weight: 15,
                            remarks: 'Completeness of proposed solution and flexibility',
                            items: [
                                {
                                    name: '',
                                    remarks: ''
                                }
                            ]
                        }
                    ]
                },
                feeEvaluation: {
                    weight: 30,
                    items: [
                        {
                            letter: 'A',
                            name: 'Mandatory system development on CSPM System Revamp',
                            type: 'mandatory'
                        },
                        {
                            letter: 'B',
                            name: '',
                            type: 'mandatory'
                        }
                    ]
                }
            }
        }
    },
    methods: {
        addItem(section) {
            section.items.push({
                name: '',
                remarks: ''
            })
        },
        removeItem(section, index) {
            section.items.splice(index, 1)
            if (section.items.length === 0) {
                this.addItem(section)
            }
        },
        addFeeItem() {
            this.form.feeEvaluation.items.push({
                letter: this.getNextLetter(this.form.feeEvaluation.items.length),
                name: '',
                type: 'mandatory'
            });
            this.reorderFeeItems();
        },
        removeFeeItem(index) {
            this.form.feeEvaluation.items.splice(index, 1);
            this.reorderFeeItems();
            if (this.form.feeEvaluation.items.length === 0) {
                this.addFeeItem();
            }
        },
        reorderFeeItems() {
            this.form.feeEvaluation.items.forEach((item, index) => {
                item.letter = this.getNextLetter(index);
            });
        },
        getNextLetter(index) {
            return String.fromCharCode(65 + index);
        }
    }
}
</script> 