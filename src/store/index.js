import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { api } from '../services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs: [],
    activeJob: {},
  },
  mutations: {
    //cars
    setCars(state, cars) {
      state.cars = cars
    },
    addCar(state, car) {
      state.cars.push(car)
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c.id != id)
    },
    //jobs
    setJobs(state, jobs) {
      state.jobs = jobs
    },
    addJob(state, job) {
      state.jobs.push(job)
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(c => c.id != id)
    }
  },
  actions: {
    //cars
    async getAllCars({ commit }) {
      try {
        let res = await api.get('cars')
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async getCarById({ commit }, id) {
      try {
        let res = await api.get('cars/' + id)
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async createCar({ commit }, newCar) {
      try {
        let res = await api.post('cars', newCar)
        //dispatch("getAllCars")
        commit("addCar", res.data.data)
        commit("setActiveCar", res.data.data)
        router.push({ name: "CarDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }

    },
    async bid({ commit }, bid) {
      try {
        let res = await api.put('cars/' + bid.id, bid)
        commit("setActiveCar", res.data)
      } catch (error) {
        console.error(error)
      }

    },
    async deleteCar({ commit }, id) {
      try {
        await api.delete('cars/' + id)
        commit("removeCar", id)
        commit("setActiveCar", {})
        // NOTE this will change the active route
        router.push({ name: "Cars" })
      } catch (error) {
        console.error(error)
      }
    },
    //jobs
    async getAllJobs({commit}){
      try {
        let res = await api.get('jobs')
        commit('setJobs', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createJob({ commit}, newJob){
      try {
        let res = await api.post('jobs', newJob)
        commit("addJob", res.data.data)
      } catch (error) {
        
      }
    }
  }
})
