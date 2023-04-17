import { createStore } from 'vuex'
import axios from 'axios'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/fire.js"
const store = {
    state: {
        hotels: [],
        filterhotels: 0
    },
    getters: {
        HOTELS(state){
            return state.hotels
        },
        FILTERHOTELS(state){
            return state.filterhotels
        }
    },
    mutations: {
        SET_HOTEL_TO_STATE:(state, response) => {
            state.hotels = response
        },
        UPDATE_CARDS:(state, filterState) => {
            state.filterhotels = filterState
        },
        CLEAR_MUTATIONS:(state) => {
            state.filterhotels = 0
        }
    },
    actions: {
        async  GET_HOTELS({commit}){
            // return axios
            // .get('http://localhost:3000/hotels')
            // .then(response => {
            //     commit('SET_HOTEL_TO_STATE',response.data)
            //     return response
            // })
            // .catch(error =>{
            //     return error
            // }) 
            const q = query(collection(db, "hotels"))
    
            const querySnapshot = await getDocs(q)
            const hotels = []
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data())
                hotels.push(doc.data())
            })
            commit('SET_HOTEL_TO_STATE', hotels)
            return hotels

        },
        FILTER_CARD({commit}, filterState){
            commit('UPDATE_CARDS', filterState)
        },
        FILTER_CLEAR({commit}){
            commit('CLEAR_MUTATIONS')
        }
    }
}

export default createStore(store)