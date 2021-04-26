/* global Vue axios */ //> from vue.html
const $ = sel => document.querySelector(sel)

const products = new Vue ({

    el:'#app',

    data: {
        list: [],
        product: { descr:'( click on a row to see details... )' }
    },

    methods: {

        search: ({target:{value:v}}) => products.fetch (v && '$search='+v),

        async fetch (_filter='') {
            //const columns = 'id,short_description,caller_id,category,subcategory,cmdb_ci,assignment_group'
            //const response = await axios.get(`https://6085f360d14a87001757881b.mockapi.io/api/v1/incidents?$select=${columns}&${_filter}`)
            const response = await axios.get(`https://6085f360d14a87001757881b.mockapi.io/api/v1/incidents`)
            products.list = response.data
        }

    }
})

// Get list of products on the app initialization
products.fetch()