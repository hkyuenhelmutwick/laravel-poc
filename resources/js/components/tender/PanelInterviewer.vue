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

        <!-- User Groups -->
        <div v-for="(group, groupIndex) in userGroups" :key="groupIndex" 
             class="p-4 bg-gray-50 rounded-md space-y-3">
            <div class="flex items-center space-x-4">
                <!-- Group Name -->
                <div class="w-48">
                    <input 
                        type="text"
                        v-model="group.name"
                        class="w-full border rounded-md px-3 py-1"
                        placeholder="User Group"
                    />
                </div>
                <!-- Group Weight -->
                <div class="w-24">
                    <input 
                        type="number"
                        v-model="group.weight"
                        class="w-full border rounded-md px-3 py-1"
                        placeholder="Weight %"
                    />
                </div>
                <!-- Delete Group Button -->
                <button 
                    @click="removeUserGroup(groupIndex)"
                    class="text-gray-500 hover:text-gray-700"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            <!-- Users List -->
            <div class="space-y-2">
                <div v-for="(user, userIndex) in group.users" :key="userIndex" 
                     class="flex items-center space-x-4">
                    <!-- Internal/External Radio -->
                    <div class="flex items-center space-x-2">
                        <label class="flex items-center">
                            <input 
                                type="radio"
                                v-model="user.type"
                                value="internal"
                                class="mr-1"
                            />
                            Internal
                        </label>
                        <label class="flex items-center">
                            <input 
                                type="radio"
                                v-model="user.type"
                                value="external"
                                class="mr-1"
                            />
                            External
                        </label>
                    </div>

                    <!-- User Input -->
                    <input 
                        type="text"
                        v-model="user.email"
                        class="flex-1 border rounded-md px-3 py-1"
                        placeholder="User email"
                    />

                    <!-- User Weight -->
                    <input 
                        type="number"
                        v-model="user.weight"
                        class="w-24 border rounded-md px-3 py-1"
                        placeholder="Weight %"
                    />

                    <!-- Add/Remove User Buttons -->
                    <div class="flex space-x-2">
                        <button 
                            @click="removeUser(group, userIndex)"
                            class="text-gray-500 hover:text-gray-700"
                        >
                            −
                        </button>
                        <button 
                            v-if="userIndex === group.users.length - 1"
                            @click="addUser(group)"
                            class="text-gray-500 hover:text-gray-700"
                        >
                            +
                        </button>
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