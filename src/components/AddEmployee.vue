<template>
    
    <div class="employee-container">
        <form class="register" @submit="onSubmit">
            <h2>Add New Employee</h2>
            <input required type="text" v-model="employee.name" placeholder="Employee's Name" />
            <input required type="text" v-model="employee.mobile" placeholder="Employee's Address" />
            <input required type="number" v-model="employee.address" placeholder="Employee's Contact Number" />
            <input required type="text" v-model="employee.email" placeholder="Employee's Contact Number" />
            <input required type="text" v-model="employee.password" placeholder="Restraunt's Contact Number" />
            <button class="btn">Add</button>
        </form>

        <div class="card" >
         <h5 class="card-title">Form Data Result</h5>  
           <pre class="m-0">{{ employee }}</pre>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddEmployee',
    data: function () {
        return {
            employee: {
                name: '',
                address: '',
                mobile: '',
                email: '',
                password: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            let apiUrl = "http://localhost:8081/api/employee/addCustomer"

            this.$emit('submit', this.employee)

            // Axios 
            axios.post(apiUrl, this.employee)
                .then(() => {
                    this.$router.push("/employees")
                    this.employee = {
                        name: '',
                        address: '',
                        mobile: '',
                        email: '',
                        password: ''
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.employee.name = ''
            this.employee.mobile = ''
            this.employee.address = ''
            this.employee.email = ''
            this.employee.password = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>