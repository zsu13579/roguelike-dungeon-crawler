/**
 * Created by Vadym Yatsyuk on 24/02/16
 */

import {createStore, combineReducers} from 'redux'
import map1 from './maps/map1'
import map2 from './maps/map2'
import Enemy from './Entities/Enemy'
import Weapon from './Entities/Weapon'
import Health from './Entities/Health'
import Teleport from './Entities/Teleport'
import {getRandomEmptyPointOnMap} from './utils'

let dataMap = reset()
const player = {
  health: 100,
  weapon: new Weapon('Hands', 5),
  experience: 0,
  maxExp: 10,
  level: 0
};
const initialState = {
  map: dataMap.map,
  position: dataMap.startPosition,
  player: player
};

const game = (state = initialState, action) => {

  if (action.type === 'UPDATE_PLAYER_POSITION') {
    return Object.assign({}, state, {
      position: action.position
    })
  }

  if (action.type === 'UPDATE_MAP_CLEAR') {
    let map = state.map.slice(0)
    map[action.position.y][action.position.x] = 0
    return Object.assign({}, state, {
      map: map
    })
  }

  if (action.type === 'UPDATE_PLAYER_HEALTH') {
    return Object.assign({}, state, {
      player: Object.assign({}, state.player, {
        health: action.health
      })
    })
  }

  if (action.type === 'UPDATE_PLAYER_WEAPON') {
    return Object.assign({}, state, {
      player: Object.assign({}, state.player, {
        weapon: action.weapon
      })
    })
  }

  if (action.type === 'UPDATE_PLAYER_EXPERIENCE') {
    return Object.assign({}, state, {
      player: Object.assign({}, state.player, {
        experience: action.experience
      })
    })
  }

  if (action.type === 'UPDATE_PLAYER_LEVEL') {
    return Object.assign({}, state, {
      player: Object.assign({}, state.player, {
        level: action.level
      })
    })
  }

  if (action.type === 'UPDATE_PLAYER_MAX_EXPERIENCE') {
    return Object.assign({}, state, {
      player: Object.assign({}, state.player, {
        maxExp: action.maxExp
      })
    })
  }

  if (action.type === 'UPDATE_MAP_BLOCK') {
    let map = state.map.slice(0)
    map[action.position.y][action.position.x] = action.block
    return Object.assign({}, state, {
      map: map
    })
  }

  if (action.type === 'UPDATE_MAP_RESET') {
    return setMap(state, reset())
  }

  if (action.type === 'CHANGE_LEVEL') {
    switch (action.map) {
      case 'map2':
        return setMap(state, map2()())
    }
  }

  return state
}

function setMap(state, data) {
  return Object.assign({}, state, {
    map: data.map,
    position: data.startPosition
  })
}

/**
 * Reset state
 * @returns {Object}
 */
function reset() {
  return map1()()
}

const modals = (state = {winModal: false, loseModal: false}, action) => {
  if (action.type === 'UPDATE_MODAL') {
    return Object.assign({}, state, {
      [action.modal]: action.value
    })
  }

  return state
}

export default createStore(combineReducers({
  game,
  modals
}))