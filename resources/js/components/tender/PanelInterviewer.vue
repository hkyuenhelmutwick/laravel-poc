<template>
    <div class="space-y-4">
        <div class="flex justify-between items-center">
            <h3 class="text-lg font-medium">Panel Interviewer</h3>
            <button 
                @click="addUserGroup"
                class="px-3 py-1 border rounded-md text-sm hover:bg-gray-50"
            >
                Add User Group
            </button>
        </div>

        <div class="space-y-4">
            <div 
                v-for="(group, groupIndex) in userGroups" 
                :key="groupIndex"
                class="bg-gray-50 p-6 rounded-lg"
            >
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-4">
                        <input 
                            type="text"
                            v-model="group.name"
                            class="border rounded-md px-3 py-2 bg-white w-40"
                            placeholder="Group Name"
                        />
                        <div class="flex items-center gap-2">
                            <input 
                                type="number"
                                v-model="group.weight"
                                class="border rounded-md px-3 py-2 bg-white w-20"
                                placeholder="Weight"
                            />
                            <span class="text-gray-500">%</span>
                        </div>
                    </div>
                    <button 
                        @click="removeUserGroup(groupIndex)"
                        class="text-red-600 hover:text-red-800"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

                <div class="space-y-3">
                    <div 
                        v-for="(user, userIndex) in group.users" 
                        :key="userIndex"
                        class="flex items-center gap-4"
                    >
                        <div class="flex items-center gap-4">
                            <label class="inline-flex items-center">
                                <input 
                                    type="radio"
                                    v-model="user.type"
                                    value="internal"
                                    class="form-radio text-blue-600"
                                />
                                <span class="ml-2">Internal</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input 
                                    type="radio"
                                    v-model="user.type"
                                    value="external"
                                    class="form-radio text-blue-600"
                                />
                                <span class="ml-2">External</span>
                            </label>
                        </div>

                        <input 
                            type="email"
                            v-model="user.email"
                            class="flex-1 border rounded-md px-3 py-2 bg-white"
                            placeholder="Email"
                        />

                        <div class="flex items-center gap-2">
                            <input 
                                type="number"
                                v-model="user.weight"
                                class="border rounded-md px-3 py-2 bg-white w-20"
                                placeholder="Weight"
                            />
                            <span class="text-gray-500">%</span>
                        </div>

                        <div class="flex items-center gap-2">
                            <button 
                                @click="removeUser(group, userIndex)"
                                class="text-red-600 hover:text-red-800"
                            >
                                ×
                            </button>
                            <button 
                                v-if="userIndex === group.users.length - 1"
                                @click="addUser(group)"
                                class="text-blue-600 hover:text-blue-800"
                            >
                                +
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
    name: 'PanelInterviewer',
    data() {
        return {
            userGroups: []
        }
    },
    created() {
        // Add one user group by default when component is created
        this.addUserGroup()
    },
    methods: {
        addUserGroup() {
            this.userGroups.push({
                name: '',
                weight: '',
                users: [{
                    type: 'internal',
                    email: '',
                    weight: ''
                }]
            })
        },
        removeUserGroup(index) {
            this.userGroups.splice(index, 1)
            if (this.userGroups.length === 0) {
                this.addUserGroup()
            }
        },
        addUser(group) {
            group.users.push({
                type: 'internal',
                email: '',
                weight: ''
            })
        },
        removeUser(group, index) {
            group.users.splice(index, 1)
            if (group.users.length === 0) {
                this.addUser(group)
            }
        }
    }
}
</script> 